import { NextResponse } from "next/server";
import { Nlp } from "@nlpjs/basic";
import { corups } from "@/assets/data/data"

export function GET(req, res) {
  return new NextResponse("Hello")
}


const manager = new Nlp({ languages: ['en'] });
manager.load(corups);

export async function POST(req, res) {
    const { message } = await req.json();
    const response = await manager.process('en', message);
    const reply = response.answer || "I'm sorry, I didn't understand that." + `((${message}))`;
    return NextResponse.json({reply});
}