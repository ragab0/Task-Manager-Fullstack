import Modals from "@/components/Modals/Modals";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarViewBtn from "@/components/SidebarViewBtn/SidebarViewBtn";
import Toasts from "@/components/Toasts/Toasts";

export const metadata = {
  title: "Tod",
  description:
    "A task managment app, Save and manage your tasks with AI - with Tod",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Modals />
          <main className="flex min-h-screen items-start">
            <Sidebar />
            <div className="body basis-full p-5 xs:p-10 overflow-hidden">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <div className="fixed right-2 bottom-2 ">
          <SidebarViewBtn />
        </div>
        <Toasts />
      </body>
    </html>
  );
}
