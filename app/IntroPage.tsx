'use client'
import FirstPage from "./FirstPage";
import { useEffect, useState } from "react";
import GlareOverlay from "@/components/GlareHover";

export default function IntroPage(){
  const fullText = "Welcome to my portfolio";
const [text, setText] = useState("");
const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < fullText.length) {
    const timeout = setTimeout(() => {
      setText((prev) => prev + fullText[index]);
      setIndex(index + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }
}, [index, fullText]);
return(
  <>  
<div className="px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start gap-10 lg:gap-52 pb-70 pt-40">


  {/* WELCOME — always rendered, just flows naturally */}
  <div className="flex-1 max-w-xl">
<h1 className="
  text-5xl
  sm:text-6xl
  lg:text-7xl
  font-bold
  text-gray-900
  dark:text-white
  leading-tight
">      {text}
      <span className="animate-pulse">|</span>
    </h1>
  </div>

  {/* DESKTOP CARD */}
<div className="
hidden md:block
  w-full
  max-w-md
  mx-auto
  md:mx-0
  bg-neutral-primary-soft
  p-6
  rounded-md
  shadow-2xl
  dark:bg-neutral-700/50
  overflow-hidden
">
  <GlareOverlay glareOpacity={0.12} playOnce />

  <img
    src="./assets/images/intropageprofile2.png"
    alt="Profile Picture"
    className="rounded-md w-full h-auto"
  />

  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
    Marija Tashevska
  </h5>

  <p className="mb-4 text-gray-600 dark:text-gray-400">
    Junior Software Engineer
  </p>

  <p className="text-sm dark:text-white leading-relaxed">
    Always curious. Always learning. Always building.
  </p>
</div>


  {/* MOBILE CARD — SEPARATE, BELOW WELCOME */}
  <div className="md:hidden w-full max-w-md mx-auto bg-neutral-primary-soft rounded-lg shadow-xl dark:bg-neutral-700/50 p-4">
    <img
      src="./assets/images/intropageprofile2.png"
      alt="Profile Picture"
      className="w-full h-56 object-cover rounded-lg mb-4"
    />

     <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      Marija Tashevska
    </h5>

    <p className="mb-4 text-gray-600 dark:text-gray-400">
      Junior Software Engineer
    </p>
    <p className="text-sm dark:text-white leading-relaxed">
      Always curious. Always learning. Always building.
    </p>
  </div>
</div>

    {/* ABOUT */}
      <section id="about" className="w-full scroll-mt-24">
        <FirstPage />
      </section>
</>
    )
}