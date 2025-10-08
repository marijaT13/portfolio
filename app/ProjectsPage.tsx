'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OutroPage from "./OutroPage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export default function ProjectsPage(){
  const router = useRouter();
  const widgets = () => {
    router.push('/widgets')
  };

  const projects = [
    {
      title: "MediTrack",
      img: "/assets/icons/logo.svg",
      description: (
        <>
          As my bachelor&aposs thesis, I aimed to showcase my existing skills, 
          acquire new ones, and challenge myself to create a fully functional, 
          visually appealing website within a limited timeframe.<br/>
          With that in mind, I:
          <br/>
          <ul className="list-disc ml-5 mt-2 text-sm text-black">
            <li>Strengthened my React with Next.js skills through hands-on development,</li> 
            <li>learnt how to implement Shadcn components, enabling faster development and a cohesive design system and</li> 
            <li>successfully implemented OTP authentication with Twilio and Appwrite&aposs messaging services.</li>
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
    {
      title: "Widgets",
      img: "/assets/icons/logo4.svg",
      description: (
        <>
          Mini React + Vite experiments to deepen TypeScript understanding.
          <br/>
          <ul className="list-disc ml-5 mt-2 text-sm text-black">
            <li>Developed reusableReact components and understand component 
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
            <Link href="https://github.com/marijaT13/projects" target="_blank" className="text-blue-600 underline">
              Check out my repository
            </Link>
            <Button onClick={widgets} className="ml-3 bg-red-900 hover:bg-red-950">Click Me</Button>
          </div>
        </>
      )
    }
  ];

  return (
    <div id="ProjectsPage">
      <h1 className="text-6xl font-sans lg:text-center md:text-left m-10 mt-0">Projects.</h1>
        <div className="relative flex justify-center items-center min-h-screen mt-0">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            navigation
            loop={true}
            centeredSlides={true}
            slidesPerView={2.8} // fractional value centers perfectly
            grabCursor={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: -100, // negative stretch pulls cards closer evenly
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            className="w-full max-w-6xl"
          >
          
        {projects.map((p, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <Card className="bg-transparent backdrop-blur-md shadow-xl w-[380px] h-[520px] flex flex-col justify-between rounded-2xl">
                  <CardHeader className="flex justify-center p-4">
                    <Image
                      src={p.img}
                      width={200}
                      height={150}
                      alt={p.title}
                      className="object-contain"
                    />
                  </CardHeader>
                  <CardContent className="px-6 pb-6 font-sans text-sm leading-relaxed text-black overflow-auto">
                    {p.description}
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      <OutroPage/>
    </div>
  );
}
