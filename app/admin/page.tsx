import { cookies } from "next/headers";
import { getMessages } from "@/lib/db";
import LoginForm from "./LoginForm";
import MessageList from "./MessageList";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const isAuthed =
    !!process.env.ADMIN_PASSWORD &&
    session?.value === process.env.ADMIN_PASSWORD;

  if (!isAuthed) {
    return <LoginForm />;
  }

  let messages: Awaited<ReturnType<typeof getMessages>> = [];
  try {
    messages = await getMessages();
  } catch {
    // DB not connected yet
  }

  return <MessageList initial={messages} />;
}
