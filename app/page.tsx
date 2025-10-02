'use client';
import { useEffect, useRef, useState } from "react";
import {  Transition } from '@headlessui/react'
import IntroPage from "./IntroPage/IntroPage";

export default function Home() {
   const fullText = "Marija Tashevska";
   const [displayedText, setDisplayedText] = useState("");
   const [showName, setShowName] = useState(false);
   const [typingFinished, setTypingFinished] = useState(false);
const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setShowName(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showName) return;
    
      let index = 0;
      const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
     if (index === fullText.length) {
        clearInterval(interval);
        setTypingFinished(true); // typing done
      }
    }, 150);

    return () => clearInterval(interval);
  }, [showName]);

 const scrollToIntro = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <>
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <p className="text-7xl font-mono animate-pulse">Portfolio</p>

        {showName && (
        <p className="text-3xl font-mono whitespace-nowrap flex items-center">
          {displayedText} 
        </p> 
      )}
    
      
          <button
            onClick={scrollToIntro}
            className="animate-bounce absolute bottom-8 
            left-1/2 
            -translate-x-1/2"
            aria-label="Scroll Down"
          >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
          </button>
      </div>

      {/* IntroPage Section */}
      <div ref={sectionRef} className="w-full">
        <IntroPage />
      </div>
  </> 
 );
}
