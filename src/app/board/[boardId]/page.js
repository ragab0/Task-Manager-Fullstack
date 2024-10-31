import ClientSide from "./components/ClientSide/ClientSide";

export async function generateMetadata({ params: { boardId } }) {
  return {
    title: `${boardId} - Tod`,
    icon: "/favicon.ico",
  };
}

export default function BoardPage({ params: { boardId } }) {
  return <ClientSide boardId={boardId} />;
}
