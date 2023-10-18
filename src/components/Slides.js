"use client";
import SliceFilter from "./SliceFilter";
import SliceUserForm from "./SliceUserForm";
import ReduxProvider from "./ReduxProvider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { slideActions } from "@/toolkits/features/slide/slideSlice";

const slides = [
  {
    heading: "todo list",
    Slide: SliceFilter,
  },
  {
    heading: "user settings",
    Slide: SliceUserForm,
  },
];

function SlidesBody() {
  const appDispatch = useDispatch();
  const { isSettings } = useSelector((state) => state.main);
  const { currentSlide } = useSelector((state) => state.slide);

  function nextHandler() {
    appDispatch(slideActions.currentSlideSetter());
  }

  useEffect(function () {
    appDispatch(slideActions.maxSlidesSetter(slides.length));
  }, []);

  return (
    <aside
      className={`${
        isSettings ? "left-0" : "-left-full"
      } md:p-5 fixed top-0  h-screen md:sticky md:left-0 grid z-[49]`}
    >
      <section className="bg-slate-100 px-5 py-10 md:rounded-2xl overflow-x-hidden">
        {slides.map(({ Slide, heading }, i) => (
          <div
            key={i}
            className={`slide animate-slideRight ${
              currentSlide === i ? "" : "hidden"
            }`}
          >
            <h1 className=" capitalize">{heading}</h1>
            <Slide nextHandler={nextHandler} />
          </div>
        ))}
      </section>
    </aside>
  );
}

export default function Slides() {
  return (
    <ReduxProvider>
      <SlidesBody />
    </ReduxProvider>
  );
}
