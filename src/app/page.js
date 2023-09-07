"use client";
import AppProvider from "@/utils/context";
import RightSide from "@/components/RightSide";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LefttSide from "@/components/LeftSide";


export default function Home() {
  return (
    <AppProvider>
      <main className="grid grid-cols-[.20fr_1fr] min-h-screen p-5">
        <RightSide />
        <div className="body p-10">
          <Header />
        </div>
        {/* <LefttSide /> */}
      </main>
      <Footer />
    </AppProvider>
  )
}
