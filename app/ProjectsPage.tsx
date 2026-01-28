'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OutroPage from "./OutroPage";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { useEffect } from "react";
import { SwiperOptions } from "swiper/types";

export default function ProjectsPage(){
   const router = useRouter();
  const widgets = () => {
    router.push('/#WidgetsPage');
  };
  const projects = [
    {
      title: "MediTrack",
      img: "/assets/icons/logo.svg",
      description: (
        <>
          As my bachelor&apos;s thesis, I aimed to showcase my existing skills, 
          acquire new ones, and challenge myself to create a fully functional, 
          visually appealing website within a limited timeframe.<br/>
          With that in mind, I:
          <br/>
          <ul className="list-disc ml-5 mt-2 text-sm text-black">
            <li>Strengthened my React with Next.js skills through hands-on development,</li> 
            <li>learnt how to implement Shadcn components, enabling faster development and a cohesive design system and</li> 
            <li>successfully implemented OTP authentication with Twilio and Appwrite&apos;s messaging services.</li>
          </ul>
        </>
      )
    },
    {
      title: "Localist",
      img: "/assets/icons/logo33.svg",
      description: (
        <>
        In my final year, I decided to create an Android app developed 
        entirely in Java — a travel guide showcasing the beauty of Macedonia.<br/>
        Although it was my first app, the project was a success: simple, functional,
        and an excellent foundation for learning mobile development. <br/>
        With this project, I: 
        <br/>         
          <ul className="list-disc ml-5 mt-2 text-sm text-black">
            <li>Gained hands-on experience with Java for Android development, 
            including UI design and app lifecycle management,</li>
            <li>
            implemented core app features, such as interactive maps, 
            informational content, and user navigation and
            </li>
            <li>
            learned how to structure a project effectively, laying the 
            groundwork for more complex apps in the future.
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Widgets",
      img: "/assets/icons/logo4.svg",
      description: (
        <>
          Mini React + Vite experiments to deepen TypeScript understanding.
          <br/>
          <ul className="list-disc ml-5 mt-2 text-sm text-black">
            <li>Developed reusable React components and understand component 
            lifecycle management,</li>
            <li>
            apply TypeScript for type safety and maintainable code and
            </li>
            <li>
            integrate simple tools and libraries to enhance functionality 
            and user experience.
            </li>
          </ul>
          <div className="mt-3 flex items-center">
            <Link href="https://github.com/marijaT13/projects" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Check out my repository
            </Link>
            <Button onClick={widgets} className="ml-3 bg-red-900 hover:bg-red-950">Click Me</Button>
          </div>
        </>
      )
    },
    {
      title: "Learning animations",
      img: "/assets/icons/animations.svg",
      description: (
        <>
          This project is a front-end clone of Apple’s official website, specifically of the MacBook section,
          built to strengthen my skills in modern web technologies and explore advanced animation techniques.<br/>
          It was developed using Vite + React (JSX), styled with Tailwind CSS, and enhanced with GSAP, Three.js, 
          Zustand, and GLTF-to-JSX for 3D model integration and smooth interactions.<br/>
          The goal was to understand how professional websites achieve seamless animations, 
          efficient performance, and a polished user experience.<br/>
        
          Through this project, I: 
          <br/>
          <ul className="list-disc ml-5 mt-2 text-sm text-black"> 
            <li>Recreated dynamic UI and animations inspired by Apple’s design principles,</li> 
            <li>integrated 3D models using Three.js and converted GLTF assets into JSX components,</li> 
            <li>utilized Zustand for lightweight state management,</li> 
            <li>explored GSAP for smooth scroll and transition effects and</li> 
            <li>improved understanding of component structure and reactivity in React with Vite.</li> 
          </ul>
          <Link href="https://www.figma.com/design/kbkr3EpE0c75L2BvhKmiNR/apple.com?node-id=0-1&t=PQAkautrObGb0qEV-1" target="_blank" className="text-blue-600 underline">
              Here is the Figma design I followed
          </Link>
        </>
      )
    },
    {
      title: "Gifts4U",
      img: "/assets/icons/logo2.svg",
      description: (
        <>
          This project was a basic front-end project using HTML and CSS, 
          completed in collaboration with a partner.<br/>
          Our goal was to test our abilities, learn effective communication,
          work on a single code branch, create a cohesive design, and implement interactive widgets.<br/>
          Although simple, it was our first project during our early days of college, and it laid the
          foundation for future teamwork and development skills.<br/>
        
          Through this project, I: 
          <br/>
          <ul className="list-disc ml-5 mt-2 text-sm text-black">
            <li>Practiced teamwork on shared codebases,</li>
            <li>Created cohesive UI with interactive elements,</li>
            <li>Learned version control collaboration.</li>
          </ul>
        </>
      )
    },
    
  ];
 useEffect(() => {
    const initMenuSwipers = () => {
      const sliders = document.querySelectorAll<HTMLElement>('.menu-swiper');

      if (!sliders.length) return;

     
      sliders.forEach((sliderEl) => {
        if (sliderEl.classList.contains("swiper-initialized")) return;

        const swiperOptions: SwiperOptions = {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          loop: false,
          grabCursor: true,
          breakpoints: {
            980: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          },
        };

        const swiperInstance = new Swiper(sliderEl, swiperOptions);

        // Click-to-activate and follow link
        sliderEl
          .querySelectorAll<HTMLElement>(".swiper-slide")
          .forEach((slide, index) => {
            slide.addEventListener("click", (e) => {
              const isActive = slide.classList.contains("swiper-slide-active");
              const link = slide.querySelector("a") as HTMLAnchorElement | null;

              if (!isActive) {
                e.preventDefault();
                swiperInstance.slideTo(index);
              } else if (link) {
                window.location.href = link.href;
              }
            });
          });
      });
    };

    initMenuSwipers();

    // Cleanup
    return () => {
      document.querySelectorAll<HTMLElement>(".menu-swiper").forEach((el) => {
        const instance = (el as unknown as { swiper?: Swiper }).swiper;
        if (instance && typeof instance.destroy === "function") {
          instance.destroy(true, true);
        }
      });
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
    <section className="menu-swiper swiper-container w-full py-16 px-6 ">
      <div className="swiper-wrapper">
        {projects.map((project, index) => (
          <div className="swiper-slide" key={index}>
            <figure className="menu-card bg-white shadow-md rounded-xl overflow-hidden p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="date text-gray-500">PROJECT</div>
              <figcaption className="text-gray-900">
                <div className="mt-2 text-sm leading-relaxed">{project.description}</div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
   
  {/* CONTACT */}
  <section id="contact" className="w-full scroll-mt-24">
    <OutroPage />
  </section>   
    </main>
  );
}