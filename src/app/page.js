"use client";
import AppProvider from "@/utils/context";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slides from "@/components/Slides";
import Tasks from "@/components/Tasks";
import Modals from "@/components/Modals";
import Bot from "@/components/Bot";


export default function home() {
  return (
    <AppProvider>
      <Modals />
      <Bot />
      <div>
        <main className="grid md:grid-cols-[300px_1fr] min-h-screen items-start">
          <Slides />
          <div className="body p-5 xs:p-10 overflow-hidden">
            <Header />
            <Tasks />
          </div>
        </main>
        <Footer />
      </div>    
    </AppProvider>
  )
}