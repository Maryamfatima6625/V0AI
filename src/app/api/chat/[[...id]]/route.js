import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import prisma from '@/prisma';
import { auth } from "@/auth";
import { URL } from 'url';

//export const runtime = 'edge'; // Restrain to use edge functions due to prisma limitation to support edge runtime.

export async function POST(req) {
  const { messages } = await req.json();

  const session = await auth();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const url = new URL(req.url);
  let chatId = url.pathname.split('/').pop() || "";
  const userId = session.user?.id || "";

  console.log(messages);

  if (url.pathname == '/api/chat') {
    const newChat = await prisma?.chat.create({
      data: {
        chat_title: messages[0].content,
        userId: userId
      },
    });
    chatId = newChat?.id || "";
  }

  const recentMessages = await prisma?.message.findMany(
    {
      where: {
        chatId: chatId,
        userId: userId
      },
      take: 3,
      orderBy: {
        createdAt: 'desc'
      }
    }
  );

  const formated = recentMessages?.reverse().map((message) => {
    return [
      {
        role: "user",
        content: message.prompt,
      },
      {
        role: "assistant",
        content: message.assistant,
      },
    ];
  }) ?? [];

  const message = [...formated.flatMap(arr => arr), ...messages].slice(-7);

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    onFinish: async ({ text }) => {
      await prisma?.message.create({
        data: {
          prompt: messages[messages.length - 1].content,
          assistant: text,
          chatId: chatId,
          userId: userId
        },
      });
    },

    messages: message,
    maxTokens: 100,
  });
  const init = {
    headers: {
      'Chat-Id': chatId
    }
  };

  return result.toDataStreamResponse({ init });
}
