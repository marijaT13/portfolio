'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import FirstPage from "./FirstPage";
import { useEffect, useState } from "react";

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
<div className="flex items-center justify-between min-h-screen px-4 sm:px-8 md:px-12 gap-6">
    {/* Left side */}
    <div className="flex-1 max-w-xl">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
    {text}
    <span className="animate-pulse">|</span>
  </h1>
    </div>
 
  {/* RIGHT SIDE – Your card */}
<div className="hidden md:block max-w-sm bg-neutral-primary-soft p-6 rounded-md shadow-2xl dark:bg-neutral-700/50">
    <img
      src="./assets/images/intropageprofile2.png"
      alt="Profile Picture"
      className="rounded-md"
    />
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      Marija Tashevska
    </h5>
    <p className="mb-6 text-body text-gray-600 dark:text-gray-400">
      Junior Software Engineer
    </p>
    <p className="dark:text-white">
      Hi there! I'm Marija, a passionate Junior Software Engineer with a knack
      for crafting elegant solutions to complex problems.
      <hr className="my-4" />
      Outside of coding, I draw inspiration from exploring neighboring countries…
    </p>
  </div>
  {/* Mobile card */}
  <div className="md:hidden w-full max-w-md bg-neutral-primary-soft rounded-lg shadow-xl dark:bg-neutral-700/50 p-4">

  {/* FLEX ROW — THIS IS THE KEY */}
  <div className="flex flex-row items-center gap-4">

    {/* TEXT — LEFT */}
    <div className="flex-1">
      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
        Marija Tashevska
      </h5>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Junior Software Engineer
      </p>

      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Hi there! I'm Marija, a passionate Junior Software Engineer with a knack
        for crafting elegant solutions to complex problems.
      <hr className="my-2" />
      Outside of coding, I draw inspiration from exploring neighboring countries…
    </p>
    </div>
      
    <img
    src="./assets/images/intropageprofile.png"
    alt="Profile Picture"
    className="w-40 h-72 object-cover"
    />
    </div>
  </div>
</div>
{/* ABOUT */}
  <section id="about" className="w-full scroll-mt-24">
    <FirstPage />
  </section>

</>
    )
}