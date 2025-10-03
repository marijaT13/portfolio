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
import { useRouter } from "next/navigation";
import { useRef } from "react";
import FirstPage from "./FirstPage";

export default function IntroPage(){
    return(
        <>  
         <div className="grid grid-cols-2 h-screen gap-4 mt-0">
            <div className="flex justify-center items-center m-4">
                <Image
                src="assets/icons/intro.svg"
                height={600}
                width={600}
                alt='intro-illustration'
                />
           </div>
           <div className="flex justify-center items-center mt-0">
            <Card className="bg-transparent shadow-2xl m-10">
            <CardHeader>
                <CardTitle className="text-5xl font-sans ">Hello.</CardTitle>                
            </CardHeader>
            <CardContent className="font-sans">
                <p>As a recent graduate in Computer Science and Communications Engineering from Bitola, 
                I combine my love for technology with a strong passion for creativity and problem-solving. <br/> 
                I enjoy building digital experiences that are not only functional 
                and seamless but also visually engaging.  <br/> 
                Outside of coding, I draw inspiration from exploring neighboring countries—visiting museums, 
                galleries, historic sites, and cafes—which fuels both my creativity and curiosity.<br/>  
                I thrive on continuous learning, and I’m always eager to take on new challenges 
                that push me to grow as a developer and as a thinker.<br/>
                </p>
            </CardContent>
            </Card>
           </div>      
        </div>
        
        <FirstPage/>
        </>
        
    )
}