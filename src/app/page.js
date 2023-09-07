"use client";
import Tasks from "@/components/Tasks";
import AppProvider from "@/utils/context";
import Form from "@/components/Form";


export default function Home() {
  return (
    <main>
      <AppProvider>
        <Form />
        <Tasks />
      </AppProvider>
    </main>
  )
}
