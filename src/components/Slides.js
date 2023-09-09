"use client";
import { useGlobalContext } from "@/utils/context";
import SliceFilter from "./SliceFilter";
import SliceUserForm from "./SliceUserForm";
import { currentSlideSetter, maxSlidesSetter } from "@/utils/actions";
import { useEffect } from "react";


const slides = [
  {
    heading: "todo list",
    Slide: SliceFilter,
  },
  {
    heading: "user settings",
    Slide: SliceUserForm,
  }
]


export default function Slides() {
  const { appDispatch, appState: { slides: {currentSlide}} } = useGlobalContext()
  function nextHandler() {
    appDispatch(currentSlideSetter())
  }

  useEffect(function() {
    appDispatch(maxSlidesSetter(slides.length))
  }, [])

  return (
    <section className="bg-slate-100 min-h-[calc(100vh-32px)] sticky top-4 left-0 px-5 py-10 rounded-2xl overflow-x-hidden">
      {
        slides.map(({Slide, heading}, i) => (
          <div key={i} className={`slide animate-slideRight ${currentSlide === i ? "" : "hidden"}`}>
            <h1 className=" capitalize">{heading}</h1>
            <Slide nextHandler={nextHandler} />
          </div>
        ))
      }
    </section>
  )
}
