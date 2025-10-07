'use client'
import { Button } from "@/components/ui/button";
import Converter from "@/components/widget/byte";
import Clock from "@/components/widget/clocks";
import KeycodesWidget from "@/components/widget/keycodes";
import Timer from "@/components/widget/timer";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WidgetsPage(){
    const Clock = dynamic(() => import("@/components/widget/clocks"), { ssr: false });
    const router = useRouter();
    const goBack =() =>{
        router.push('/');
    }
    return (
        <>
       <Button onClick={goBack} 
       className="bg-transparent hover:bg-white/30 text-black m-10 shadow-accent-foreground">
        Go back
       </Button>
        <h1 className="font-mono text-6xl text-center mt-20 flex flex-col items-center">
            <span>Widgets.</span>
            <Image
                src="/assets/icons/interactive.svg"
                alt="interactive"
                width={120}
                height={100}
                className="animate-pulse ml-45 mb-0 mt-[-10px]"
            />
            </h1>
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-10">
            <div className="flex justify-center items-center w-full h-screen">
                <Timer />
            </div>
            <div className="flex justify-center items-center w-full h-screen ">
                <KeycodesWidget />
            </div>
            <div className="flex justify-center items-center w-full h-screen">
                <Clock />
            </div>
            <div className="flex justify-center items-center w-full h-screen">
                <Converter />
            </div>
        </div>
        </>
        
    );
}