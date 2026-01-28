import { Card, CardHeader, CardTitle, CardContent, CardItemMeta, CardList, CardItemLeft, CardItemText, CardItemSubtitle, CardItemTitle, CardIcon, CardItem } from "@/components/ui/card";
import SecondPage from "./SecondPage";
import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {HiCode} from "react-icons/hi";

export default function FirstPage() {
  // Helper constants for cleaner math
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-16 px-6 sm:px-10 py-10">
        {/* EDUCATION CARD */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-12 w-full max-w-6xl">
      <Card className="bg-transparent shadow-2xl w-full md:w-1/2 dark:bg-neutral-700/50">    
            <CardContent className="font-sans text-left text-gray-800 leading-relaxed pt-10">
              <p className="dark:text-gray-200">
                A freshly graduated software engineer who is learning how to make an
                impact in the tech world.
                <br/>
                Through my academic years, I gained hands-on
                experience and guidance how to design, develop and implement 
                software solutions using various programming languages and technologies.
                <br/>
                My love for coding lies in Frontend Development where I can express my style and creativity. 
                <br/>
                Inbetween my classes and tests, I undertook projects of my own,
                which allowed me to apply theoretical knowledge into practical applications and hardcode 
                all that I have learned.
                <br/>
                <br/>
                Now, I&apos;m  looking for opportunities to further enhance my skills, contribute to
                real-world projects and add my sugar, spice and everything nice to the looks of the world wide web. 
              </p>
            </CardContent>
          </Card>

          {/* CERTIFICATES CARD */}
        <Card className="bg-transparent shadow-2xl w-full md:w-1/2 dark:bg-neutral-700/50">
            <CardHeader>
              <p className="font-sans text-center font-bold text-gray-800 dark:text-gray-300 mb-2">
                In my free time I travel, and when I travel, I gather inspiration and skills.
                When I&apos;m not traveling, I gather new skills
                online!
              </p>
            </CardHeader>

            <CardContent className="flex flex-wrap justify-center items-stretch gap-12 font-sans text-center">
              {/* Certificate 1 */}
              <CertificateItem
                progress={1}
                label="WordPress Course – SMX Academy 2021"
                fileUrl="/assets/certificates/wordpress.pdf"

              />

              {/* Certificate 2 */}
              <CertificateItem
                progress={0.18}
                label="Full-Stack Web Development Bootcamp – Udemy"

              />
            </CardContent>
          </Card>
        </div>

{/* EDUCATION AND WORK */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 w-full max-w-6xl">
        <Card className="bg-transparent shadow-2xl w-full dark:bg-neutral-700/50">
        <CardHeader className="flex-row items-center gap-4">
          <FaGraduationCap className="text-2xl"/>
          <CardTitle className="m-0 p-0 text-xl">Education</CardTitle>
        </CardHeader>

        <CardContent>
        <CardList>
        <CardItem>
        <CardItemLeft>
        <CardIcon className="bg-white">
          <img
          src={'/assets/images/fiktlogo.png'}
          />
        </CardIcon>
        <CardItemText>
        <CardItemTitle>FICT</CardItemTitle>
        <CardItemSubtitle className="dark:text-gray-300">BSs - Computer Science</CardItemSubtitle>
        <CardItemSubtitle className="dark:text-gray-300">Bitola, Macedonia</CardItemSubtitle>
        </CardItemText>
        </CardItemLeft>
        <CardItemMeta className="dark:text-gray-300">10.2021 - 09.2025</CardItemMeta>
        </CardItem>


        <CardItem>
        <CardItemLeft>
        <CardIcon className="bg-white">
          <img
          src={'/assets/images/jbt.png'}
          />
        </CardIcon>
        <CardItemText>
        <CardItemTitle>Gymnasium Josip Broz Tito</CardItemTitle>
        <CardItemSubtitle className="dark:text-gray-300">Natural Sciences and Mathematics field - Combination A</CardItemSubtitle>
        <CardItemSubtitle className="dark:text-gray-300">Bitola, Macedonia</CardItemSubtitle>
        </CardItemText>
        </CardItemLeft>
        <CardItemMeta className="dark:text-gray-300">09.2017 - 06.2021</CardItemMeta>
        </CardItem>
        </CardList>
        </CardContent>
        </Card>
        
        <Card className="bg-transparent shadow-2xl w-full dark:bg-neutral-700/50">
        <CardHeader className="flex-row items-center gap-4">
          <FaBriefcase className="text-xl"/>
          <CardTitle className="m-0 p-0 text-xl">Work</CardTitle>
        </CardHeader>

        <CardContent>
        <CardList>
        <CardItem>
        <CardItemLeft>
        <CardIcon className="bg-white ">
          <img
          src={'/assets/images/softwareyard.jpg'}
        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        </CardIcon>
        <CardItemText>
        <CardItemTitle>Software Yard</CardItemTitle>
        <CardItemSubtitle className="dark:text-gray-300">QA Tester Internship</CardItemSubtitle>
        <CardItemSubtitle className="dark:text-gray-300">Bitola, Macedonia</CardItemSubtitle>
        </CardItemText>
        </CardItemLeft>
        <CardItemMeta className="dark:text-gray-300">01.2026 - now</CardItemMeta>
        </CardItem>
        </CardList>
        </CardContent>
        </Card>
    </div>
    </div>

  {/* PROJECTS */}
  <section id="skills" className="w-full scroll-mt-24">
    <SecondPage />
  </section>

  </>
);
}
function CertificateItem({
  progress,
  label,
  fileUrl,
}: {
  progress: number;
  label: string;
  fileUrl?:string;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  //animation
  useEffect(()=>{
    const element = ref.current;
    if(!element) return;
    
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setOffset(circumference * (1 - progress));
          }
        });
      },
      {threshold:0.4}
    );
    observer.observe(element);
    return()=>{
      if(element) observer.unobserve(element);
    }
  },[progress,circumference])


  const handleClick = () => {
    if (progress === 1 && fileUrl) {
      setIsModalOpen(true);
    }
  };


  return (
    <>
    <div
        ref={ref}
        onClick={handleClick}
        className={`flex flex-col items-center justify-center text-center cursor-pointer transition-transform ${
          progress === 1 ? "hover:scale-105" : ""
        }`}
      ><div className="relative w-28 h-28 flex items-center justify-center">
    {/* Progress Circle */}
    <svg
      className="absolute inset-0 w-full h-full -rotate-90"
      viewBox="0 0 100 100"
    >
      {/* Background Circle */}
      <circle
        className="text-gray-400 dark:text-gray-300"
        stroke="currentColor"
        strokeWidth="4"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      {/* Progress Circle */}
      <circle
        className="text-[var(--certificate-bar)] stroke-dash-animate" 
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        
      />
    </svg>

    {/* Center Icon */}
   <div className="absolute inset-0 flex items-center justify-center">
    <div className="flex items-center justify-center rounded-full w-12 h-12 shadow-lg ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-7 text-gray-800 dark:text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375
             c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375
             c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497
             m5.007 0a7.454 7.454 0 0 1-.982-3.172
             M9.497 14.25a7.454 7.454 0 0 0 .981-3.172
             M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728
             M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228
             M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25
             c2.291 0 4.545.16 6.75.47v1.516
             M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35
             m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228
             m2.48-5.492a46.32 46.32 0 0 1 2.916.52
             a6.003 6.003 0 0 1-5.395 4.972
             m0 0a6.726 6.726 0 0 1-2.749 1.35
             m0 0a6.772 6.772 0 0 1-3.044 0"
        />
      </svg>
      </div>
        </div>
      </div>

        <p className="text-gray-700 dark:text-gray-200 italic mt-3 max-w-[12rem] text-center leading-snug">
        {label}      
      </p>
    </div>
{isModalOpen && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70]"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="bg-white rounded-lg p-4 max-w-3xl w-[90%] relative shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 z-20 bg-white/80 rounded-full px-3 py-1 shadow-md cursor-pointer"
        onClick={() => setIsModalOpen(false)}
      >
        ✕
      </button>

      {/* PDF / Image Preview */}
      {fileUrl?.toLowerCase().endsWith(".pdf") ? (
        <iframe
          src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-[80vh] rounded-lg relative z-10"
          title={label}
        />
      ) : (
        <img
          src={fileUrl}
          alt={label}
          className="w-full h-auto rounded-lg shadow-sm"
        />
      )}
    </div>
  </div>
)}

    </>
  );
}