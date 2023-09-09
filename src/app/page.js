"use client";
import AppProvider from "@/utils/context";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slides from "@/components/Slides";
import Tasks from "@/components/Tasks";


export default function Home() {
  return (
    <AppProvider>
      <main className="grid grid-cols-[.20fr_1fr] min-h-screen items-start p-5">
        <Slides />
        <div className="body p-10">
          <Header />
          <Tasks />
        </div>
      </main>
      <Footer />
    </AppProvider>
  )
}
