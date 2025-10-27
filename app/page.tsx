'use client';
import { useEffect, useRef, useState } from "react";
import IntroPage from "./IntroPage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
   const fullText = "Marija Tashevska";
   const [showName, setShowName] = useState(false);
   const [showScrollTop, setShowScrollTop] = useState(false);

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

      const scrollToIntro = () => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };

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
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
  return (
  <main className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
    <div className="w-full max-w-[1200px] flex flex-col items-center justify-center p-6 space-y-4">
          <div className="w-full flex justify-start">
            <a
              href="/assets/files/CV - Marija Tashevska.pdf"
              download="Marija_Tashevska_CV.pdf"
              className="inline-flex items-center m-3 mb-0 w-auto"
            >
              <Button
                type="button"
                className="bg-transparent hover:bg-white/20 text-red-800 mb-0 flex items-center gap-2 px-4 py-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                CV
              </Button>
            </a>
            <div className="w-full flex justify-end ">
          <p className="inline-flex items-center m-3 mb-0 w-auto text-red-800 italic"
          >Bitola, Macedonia</p>
          </div>
          </div>
          
    {/* portfolio title */}
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="flex w-full justify-center">
      <p className="portfolio text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-sans mb-0 text-center leading-none flex flex-wrap justify-center">
        <span className="block sm:inline">P
          <b className="portfolio">
          <svg width="76" height="92" viewBox="0 0 76 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.09503 21.2076C2.12692 19.2454 1.34085 15.321 1.6275 9.60286C1.81742 5.81428 10.9509 7.61406 15.6082 8.88772C18.4484 9.66443 18.6697 13.9026 19.3612 17.4487C20.3846 22.697 17.2985 26.3141 15.3334 30.2562C14.0221 32.8867 11.4001 35.9596 9.32265 38.832C8.50443 39.9633 7.05607 40.3155 6.46209 40.3184C3.94733 40.331 9.99347 35.9951 12.6531 34.4111C18.2975 31.0496 27.3223 41.4798 30.5818 43.9562C31.1846 44.4142 31.8614 44.2576 32.3579 43.77C33.2444 42.3072 33.6463 40.5224 34.1339 38.4626C34.6215 37.1831 35.5967 35.4277 36.6014 33.6192" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M46.0577 1.7038C46.0577 1.31373 44.6925 1.11278 42.5264 1.50285C39.398 2.06621 40.1475 19.4937 42.0092 29.8603C42.4165 32.1282 45.845 32.4371 48.9035 33.1227C50.32 33.4402 53.1264 34.2102 57.0626 33.8201C59.6982 33.5589 60.8275 31.456 61.8115 30.3774C67.7094 23.9127 61.4362 8.60698 59.4622 6.53839C57.232 4.20136 54.3439 3.67783 51.3888 1.90771C50.5968 1.50876 49.8167 1.31373 48.8296 1.21325C47.8426 1.11278 46.6724 1.11278 45.4667 1.11278" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21.2343 63.1704C20.8442 62.7804 20.6433 60.8241 21.1309 58.0669C21.46 56.2058 26.1339 56.6692 30.3657 57.0592C33.0931 57.3107 34.621 59.4233 36.0986 60.502C38.7862 62.4639 37.192 70.4046 34.9372 75.7652C33.1321 80.0568 30.5016 82.4615 27.9425 84.539C25.8117 86.2687 22.6291 86.6105 20.3537 86.9119C19.9393 86.9668 20.0523 85.8422 21.125 85.4403C27.5096 83.0483 31.861 89.1637 34.9106 90.2571C38.1376 90.3576 41.5124 89.1874 44.2636 86.7317C45.6496 85.4462 47.0148 84.0809 48.4215 82.6743" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M57.8782 49.5769C57.4881 51.5272 57.2871 56.2377 57.6772 61.3649C57.7722 62.6137 60.8215 59.6361 63.8741 58.0522C67.4637 56.1896 71.2649 59.8134 72.84 61.4831C76.3484 65.2021 74.2259 72.4141 74.0368 77.0418C73.9894 78.2017 72.8666 78.9154 71.782 79.5123C65.3821 83.0349 56.5129 80.7062 54.2493 80.1181C53.3509 79.7251 52.9608 79.1399 52.7599 78.1559C52.5589 77.1718 52.5589 75.8066 53.741 73.2179" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M57.8779 51.3499C57.8779 50.9599 58.6581 50.5639 60.2302 50.2684C61.8023 50.1679 63.1912 49.9729 64.6629 49.3848C65.5494 48.9917 66.7197 48.4066 67.9254 47.8038" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          </svg>o
        </b>
          rt</span>
        <span className="block sm:inline">fol
           <b className="portfolioI">
          <svg width="36" height="100" viewBox="0 0 36 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.6219 32.7292C10.1713 32.1756 15.1324 30.798 18.9074 30.0259C20.5142 29.6973 22.7864 28.9833 24.5948 29.1894C27.3927 29.5081 17.8294 30.7813 14.6267 32.6522C11.8971 34.2467 9.22234 35.5011 7.19959 36.885C6.74966 37.1928 6.57529 37.7153 6.70847 37.7902C8.47975 38.7865 11.4116 36.8912 14.812 36.063C17.4842 35.4121 21.6627 34.8102 25.6894 34.9475C26.8395 34.9868 26.1452 35.3596 25.1733 35.5011C20.4729 36.1855 14.9243 37.99 10.0527 38.6247C8.79167 38.789 7.41185 39.2469 5.88647 39.8691C5.2731 40.1193 5.18517 40.6287 5.11441 41.1843C5.04366 41.74 5.04366 42.4267 5.38702 42.8492C8.67863 46.8988 19.4526 42.7264 23.7582 41.5423C25.0137 41.197 26.2617 41.0532 26.2055 41.0532C19.3389 41.0532 14.787 41.4694 10.2067 41.1261C8.74853 41.0168 9.19737 40.096 9.61565 39.5362C11.2038 37.4107 14.8744 35.243 17.2447 33.5657C19.3271 32.0921 21.1258 30.9312 23.5564 29.9593C24.1529 29.7208 24.3222 28.8585 24.189 28.8481C21.6555 28.6501 20.1768 32.854 16.8493 36.2544C13.0587 40.128 6.72096 41.8856 4.71069 41.5423C1.74387 41.0355 2.82945 35.5177 3.09791 33.291C3.21503 32.3195 6.95819 31.9009 14.2105 31.2766C18.7043 30.8898 24.8966 31.0644 27.7372 31.133C30.5777 31.2017 29.891 31.339 28.3011 31.8905C20.9703 34.4333 17.6879 35.6343 14.9722 37.1638C12.3891 38.6187 8.53144 39.6548 6.09249 40.7723C4.63442 41.4404 3.383 42.1603 2.55268 42.6452C2.14843 42.8813 1.72235 42.9927 7.55336 43.0635C13.3844 43.1343 25.4709 43.1343 30.8732 43.1343C36.2756 43.1343 34.6274 43.1343 33.2976 43.2716C28.0746 43.8111 21.7168 44.2414 16.0231 44.5202C14.302 44.6045 13.0972 45.902 12.0567 47.4919C11.5255 48.3035 11.7029 49.4938 12.0463 50.0599C13.2531 52.0493 16.8222 49.6603 21.6044 48.5491C23.2557 48.1653 24.7342 47.7125 25.6416 47.9185C28.9889 48.6786 18.1124 50.7591 14.5581 51.733C13.7923 51.8745 12.9682 51.8745 12.2689 51.9432C11.5697 52.0119 11.0203 52.1492 10.4543 52.2907" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15.4486 8.17316C15.1739 7.34492 14.6162 5.13488 14.8222 2.91651C14.9027 2.05059 15.4403 1.79692 15.9959 1.58674C17.2025 1.13031 20.006 1.0977 23.3336 1.23505C25.0613 1.30636 25.7122 2.34215 26.4031 3.17248C27.2176 4.15141 28.0721 5.11407 28.2802 7.116C28.615 10.3375 27.6642 13.0219 26.349 14.1311C23.7403 16.3311 20.0352 18.5699 17.54 19.8914C16.8429 20.2389 16.1562 20.6509 15.665 21.0692C15.1739 21.4875 14.8992 21.8996 14.6162 22.7403" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15.0324 7.34075C14.2041 6.23365 13.0928 4.85186 11.9171 3.39098C10.3641 1.46143 6.99962 2.34631 4.78126 2.55233C3.50788 2.67059 3.10396 4.00696 2.55041 4.90596C0.860196 7.65097 1.98853 11.9107 3.09563 13.9917C4.47926 16.5925 7.66555 17.4628 9.82356 18.6428C10.8662 19.9642 12.1148 20.3804 13.0138 20.7259C13.5007 20.934 14.0501 21.2087 15.4486 21.9079" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
          </svg>i</b>
          o</span>
      </p>
    </div>
    {/** portfolio title name*/}
       <div className="flex flex-col items-center">
          <p className="text-4xl">
        <b className="signature">
          Marija Tashevska<svg width="397" height="79" viewBox="0 0 397 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4995 45.17C21.3733 45.17 22.247 45.17 24.1534 44.7331C26.0598 44.2963 28.9724 43.4225 89.3063 36.1279C149.64 28.8333 267.307 15.1443 388.54 1.04046" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1.96533 77.8259C2.54784 76.9522 3.13035 76.0784 30.3715 68.9294C57.6127 61.7804 111.495 48.3827 155.563 39.5876C199.631 30.7926 232.251 27.0063 266.743 23.1052" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M170.541 41.6397C181.608 39.8921 192.676 38.1446 217.309 35.0599C241.942 31.9753 279.805 27.6065 310.233 25.3559C340.66 23.1052 362.504 23.1052 374.631 23.6878C386.758 24.2703 388.505 25.4353 390.134 26.1811C391.762 26.9269 393.218 27.2181 395.601 27.5182" stroke="#7C0000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        </b>
        </p>
        </div>
        
          <button
            onClick={scrollToIntro}
            className="smooth-scroll main-btn animate-bounce absolute bottom-8 
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
      </div>
      {showScrollTop && (
  <button
    onClick={scrollToTop}
    className="
    fixed 
    bottom-6 
    right-6 
    bg-red-800 
    text-white 
    p-3 
    rounded-full 
    shadow-lg 
    hover:bg-red-700 
    transition-all z-50"
    aria-label="Scroll To Top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
  </svg>

  </button>
)}
  </main> 
 );
}
