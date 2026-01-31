 'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Frame = {
  title: string;
  image: string;
 link: string;
  description: string | React.ReactNode;

};

const frames: Frame[] = [
  {
    title: "Portfolio Page",
    link:"https://github.com/marijaT13/portfolio",
    image:
      "/assets/images/favicon-1.png",
   description: (
        <>
          Making <b className="underline">this</b> project I learnt that I'm not easily pleased when it comes to things I produce. 
          The first version was okay, the second one is this. And I doubt it will be the last one. I&apos;m constantly learning about new animations, effects,
          styles, themes, technologies, tools ect. and when I find what I like, I implement it in my projects.
        </>
      )
  },
  {
    title: "MediTrack",
    link:"https://github.com/marijaT13/meditrack",
    image:
      "/assets/icons/logo.svg",
    description:(<>
      MediCall is a user-friendly, easy-to-use website for sheduling and resheduling appointments, getting quick information about your doctor&apos;s available appointmets meanwhile
      helping doctors stay organised and patients stay at home when sheduling their appointments.
      <br/>
      This is my bachelor&apos;s thesis and I wanted to make something quick and easy meanwhile using everything I learnt that far. 
      With that I can say that this is a simple React(Next.js) project, written in Typescript, designed with Shadcn components,
      implemented OTP authentication with Twilio and used Appwrite as database and it's messaging services. And designed my first logo in Figma.
             
    </>),
  },
  {
    title: "Localist",
    link:"https://github.com/marijaT13/LocaList",
    image:
      "/assets/icons/logo33.svg",
    
     description:(<>
      This project represents my initial exploration of Android app development. It is a project where you can list, search, reserve to stay at and learn more about 
      the beautiful cities and attractions in Macedonia. I focused on including a beautiful UI design, in the colors of our breathtaking nature, wrote it in Java, implemented 
      Firebase and learnt that mobile development isn't my forte.
         
     </>),
         
   },
  
  {
    title: "Learning animations",
    link:"https://github.com/marijaT13/apple.com",
    
    image:
      "/assets/icons/animations.svg",

     description: (
        <>
          This project is a front-end clone of Apple’s official website, specifically of the MacBook section,
          built to learn modern web technologies and explore advanced animation techniques.<br/>
          It was developed using Vite + React (JSX), styled with Tailwind CSS, and enhanced with GSAP, Three.js and
          Zustand for 3D model integration and smooth interactions.<br/>
          The goal was to understand how professional websites achieve seamless animations, 
          efficient performance, and a polished user experience.
           <Link href="https://www.figma.com/design/kbkr3EpE0c75L2BvhKmiNR/apple.com?node-id=0-1&t=PQAkautrObGb0qEV-1" target="_blank" className="text-blue-600 underline">
            <br/>Check out the Figma design
          </Link>  
        </> 

        ),
  },
  {
    title: "Widgets",
    link:"https://github.com/marijaT13/projects",
    image:
      "/assets/icons/logo4.svg",
   
    description:(<>
           One of my first projects where I learnt about React and Vite.
           I developed reusable React components and understood component lifecycle management, 
           wrote it in Typescript and integrated simple tools and libraries to enhance functionality and user experience.          
         </>),
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);

  const limit = {
    start: 0,
    end: frames.length - 1,
  };

 useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setSlideWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => {
    if (index < limit.end) setIndex((i) => i + 1);
  };

  const prev = () => {
    if (index > limit.start) setIndex((i) => i - 1);
  };

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keyup", onKey);
    return () => document.removeEventListener("keyup", onKey);
  }, [index]);

  return (
    <>

      <div
      ref={containerRef}
      className="gallery w-full max-w-4xl mx-auto my-6 rounded border dark:bg-neutral-700/50 bg-transparent shadow-2xl"
    >
        {/* top bar */}
        <div className="top flex p-2 border-b select-none items-center">
        
        {/* SAME LABEL, DIFFERENT LINK */}
        <a
          href={frames[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-300 hover:underline"
        >
          Check out on GitHub
        </a>

          <div className="buttons ml-auto flex text-gray-600 dark:text-gray-400 mr-1">
            <svg
              onClick={prev}
              className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0 hover:bg-gray-500/50 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>

            <svg
              onClick={next}
              className="w-7 border-2 rounded-r-lg p-1 cursor-pointer hover:bg-gray-500/50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        {/* content */}
         <div className="content-area w-full h-[28rem] overflow-hidden">
        <div
          ref={platformRef}
          className="platform h-full flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${index * slideWidth}px)`,
          }}
        >
          {frames.map((frame) => (
            <div
              key={frame.title}
              className="each-frame flex-none h-full"
              style={{ width: slideWidth }}
            >
              <div className="main flex flex-col md:flex-row w-full h-full p-4 md:p-8 gap-4">
                {/* Image */}
                <div className="sub w-full md:w-4/6 my-auto">
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="w-full max-h-64 md:max-h-none object-contain mx-auto"
                  />
                </div>

                {/* Text */}
                <div className="sub w-full my-auto">
                  <div className="long-text text-base md:text-lg">
                    {frame.description}
                  </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
