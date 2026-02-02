'use client';
import { Analytics } from "@vercel/analytics/next"

import { useEffect, useRef, useState } from "react";
import IntroPage from "./IntroPage";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import ClickSpark from "@/components/ClickSpark";
import GlareOverlay from "@/components/GlareHover";

const navigation = [
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
  
]

function classNames(...classes: (string | undefined | boolean | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
   const fullText = "Marija Tashevska";
   const [showName, setShowName] = useState(false);
   const [showScrollTop, setShowScrollTop] = useState(false);
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
   const sectionRef = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        const timeout = setTimeout(() => setShowName(true), 1000);
        return () => clearTimeout(timeout);
      }, []);

      useEffect(() => {
        if (!showName) return;
        
          let index = 0;
          const interval = setInterval(() => {
          index++;
        if (index === fullText.length) {
            clearInterval(interval);
          }
        }, 150);

        return () => clearInterval(interval);
      }, []);

    //button for scroll on top
        useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const scrollToTop = () => {
      // Smooth scroll
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Remove hash from URL WITHOUT reload
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    };
    useEffect(() => {
      if (typeof window === "undefined") return;
        if("scrollRestoration" in history){
          history.scrollRestoration="manual";
        }
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({top:0, behavior:"auto"});
    }, []);

if (!mounted) {
  return null;
}
  return (
    <>
      <GlareOverlay playOnce fullscreen />
    <ClickSpark />
 
<main className="overflow-x-hidden flex flex-col items-center pt-24">
     {/* navbar */}
    <div className="fixed top-0 z-50 pt-2">
      <Disclosure as="nav" className="relative">
      {({ open }) => (
        <>
          {/* NAVBAR CONTAINER */}
          <div
            className="mx-auto max-w-7xl
            rounded-xl
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur
            border border-gray-200 dark:border-gray-700
            shadow-sm
            supports-backdrop-filter:bg-white/70"
          >
            <div className="px-5 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between mx-3">
                {/* MOBILE MENU BUTTON */}
                <div className="flex items-center sm:hidden pr-3">
                  <DisclosureButton
                    className="
                      inline-flex items-center justify-center
                      rounded-md p-2
                      text-gray-500 dark:text-gray-400
                      hover:bg-gray-100 dark:hover:bg-white/5
                      hover:text-gray-900 dark:hover:text-white
                    
                    "
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                    ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    )}
                  </DisclosureButton>
                </div>

                {/* LOGO */}
                <div className="flex flex-1 items-center justify-center sm:justify-start">
                  
                  <button
                    onClick={scrollToTop}
                    className="
                      mr-3 cursor-pointer
                      transition-transform
                      hover:scale-105
                      active:scale-95
                    "
                    aria-label="Scroll To Top"
                  >
                    <img
                    src="./assets/images/favicon-2.png"
                    alt="Your Company"
                    draggable={false}
                    className="h-8 w-auto"
                  />
                  </button>
                  

                  {/* DESKTOP NAV LINKS */}
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* RIGHT ACTIONS */}
                {/* DESKTOP THEME SELECTOR */}
                    <div className="hidden sm:flex items-center ml-4">
                      <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="
                          p-2 rounded-md
                          bg-gray-100 dark:bg-gray-800
                          text-gray-700 dark:text-gray-200
                          hover:bg-gray-200 dark:hover:bg-gray-700
                          transition
                        "
                        aria-label="Toggle theme"
                      >
                        {theme === "dark" ? (
                          <Sun className="h-5 w-5" />
                        ) : (
                          <Moon className="h-5 w-5" />
                        )}
                      </button>
                      </div>
              </div>
            </div>
          </div>
          {/* MOBILE MENU PANEL */}
          <DisclosurePanel className="  sm:hidden mt-2
    transition duration-200 ease-out
    data-[closed]:opacity-0
    data-[closed]:scale-95">
            <div className="w-full max-w-4xl p-6 lg:px-12 flex flex-col bg-white/90 dark:bg-gray-800/90 rounded-2xl gap-2">

              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 dark:bg-gray-800/90 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              {/* MOBILE THEME SELECTOR */}
              <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Theme
                </label>

                <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="
                  p-2 rounded-md
                  bg-gray-100 dark:bg-gray-800
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  transition
                "
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              </div>
            </div>
            
          </DisclosurePanel>
        </>
      )}
      </Disclosure>
    </div>
    
<div className="w-full max-w-7xl px-6 lg:px-12 flex flex-col space-y-8">
      {/* IntroPage Section */}
      
  {/* INTRO */}
  <section ref={sectionRef} className="w-full">
    <IntroPage />
  </section>

  
      </div>
    
  </main> 
</>
 );
} 