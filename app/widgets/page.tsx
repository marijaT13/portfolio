'use client'
import Converter from "@/components/widget/byte";
import Clock from "@/components/widget/clocks";
import KeycodesWidget from "@/components/widget/keycodes";
import Timer from "@/components/widget/timer";

export default function WidgetsPage(){
    return (
        <>
        <h1 className="font-mono text-6xl text-center mt-20">Widgets.</h1>
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