import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function FirstPage(){
    return(
            <div className="grid grid-cols-2"> 
               
                <div className="flex justify-center items-center mt-0">
                    <Card className="bg-transparent shadow-2xl m-10 w-[500px] h-[auto]">
                    <CardHeader>
                        <CardTitle className="text-5xl font-sans ">Education.</CardTitle>                
                    </CardHeader>
                    <CardContent className="font-sans">
                        <p className="text-gray-600 italic">October 2021 - September 2025</p>
                        <p className="text-gray-900 font-bold">FIKT</p>
                        <br/>
                        <p>I am a college graduate from Computer Science and Communications Engineering.<br/> 
                        Studied a wide range of ICT disciplines including programming, networking, database 
                        systems, how to implement them and telecommunications. <br/>
                        I had hands-on experience with all this disciplines through academic and project work.<br/>  
                        
                        </p>
                    </CardContent>
                    </Card>
                </div>   
                <div className="flex justify-center items-center m-4 relative">
                    <div className="absolute top-2 left-20">
                    <Image
                    src="/assets/images/frame.png"
                    height={200}
                    width={200}
                    alt='github'
                    className="m-3"
                    /></div>
                    <div className="absolute bottom-1 right-20">
                    <Image
                    src="/assets/images/frame1.png"
                    height={200}
                    width={200}
                    alt='linkedin'
                    className="m-3"
                    /></div>
                </div>
            </div>
    )
}