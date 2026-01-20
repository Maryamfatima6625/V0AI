import PromptMessage from "@/components/prompt-message"
import Recent from "@/components/recent-messages";
import { auth } from "@/auth";

export default async function Home({ params } : {params: { id: string }}) {
  const session = await auth();
  const user = session?.user;

  return (
    <main  className="overflow-y-scroll" >
      <div id="scroll-0" className="md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto">
        <Recent chatId={params.id} userImage={user?.image} />
        <PromptMessage userImage={user?.image} />
      </div>
    </main>
  );
}