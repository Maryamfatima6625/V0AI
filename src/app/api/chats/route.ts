import prisma from "@/prisma";
import { auth } from "@/auth";


export async function GET(req: Request, res: Response) {
    const session = await auth();

    const lastChat = await prisma?.chat.findMany({
        where: {
            userId: session?.user?.id,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return new Response(JSON.stringify(lastChat), { status: 200 });
}

export async function DELETE(req: Request, res: Response) {
    const session = await auth();

    console.log("Deleting chats")
    try {
        const deleteMessages = await prisma?.message.deleteMany({
            where: {
              userId: session?.user?.id,
            },
          });
          
          const deleteChat = await prisma?.chat.deleteMany({
            where: {
              userId: session?.user?.id,
            },
          });

        return new Response("Deteled", { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Failed to delete chats" }), { status: 500 });
}
}