import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Slides from "@/components/Slides/Slides";
import Tasks from "@/components/Tasks/Tasks";
import Modals from "@/components/Modals/Modals";
// import Bot from "@/components/Bot";

export default function home() {
  return (
    <>
      <Modals />
      {/* <Bot /> */}
      <div id="root">
        <main className="grid md:grid-cols-[300px_1fr] min-h-screen items-start">
          <Slides />
          <div className="body p-5 xs:p-10 overflow-hidden">
            <Header />
            <Tasks />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
