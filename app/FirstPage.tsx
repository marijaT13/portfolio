import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SecondPage from "./SecondPage";


export default function FirstPage(){
    return(
        <>
            <div className="grid grid-cols-2 gap-4 mb-20"> 
               
                <div className="flex justify-center items-center mt-0">
                    <Card className="bg-transparent shadow-2xl m-10 w-[500px] h-[auto]">
                    <CardHeader>
                        <CardTitle className="text-5xl font-sans ">Education.</CardTitle>                
                    </CardHeader>
                    <CardContent className="font-sans">
                        <p className="text-gray-600 italic">October 2021 - September 2025</p>
                        <p className="text-gray-900 font-bold">FIKT</p>
                        <br/>
                        <p>I am a college graduate from the Faculty of Informaton and Communicational Technologies.<br/> 
                        Studied a wide range of ICT disciplines including programming, networking, database 
                        systems, how to implement them and telecommunications. <br/>
                        Through both academic and project-based work, I gained hands-on experience in designing, 
                        developing, and implementing technology-driven solutions.<br/>  
                        This combination of theoretical knowledge and practical application has strengthened my ability 
                        to analyze problems, think critically, and deliver efficient digital solutions.
                        </p>
                    </CardContent>
                    </Card>
                
                </div>     
                <div className="flex flex-col md:flex-col justify-center items-center gap-6 md:gap-10 lg:gap-16 mr-10 md:mr-20 lg:mr-29">
                    {/* LinkedIn QR */}
                    <div className="flex flex-col items-center ml-30">
                        <Image
                        src="/assets/images/frame11.png"
                        width={250}
                        height={250}
                        alt="LinkedIn QR"
                        />
                    </div>

                    {/* GitHub QR */}
                    <div className="flex flex-col items-center mr-30 md:size-[340px] md:mr-10">
                        <Image
                        src="/assets/images/framee.png"
                        width={320}
                        height={320}
                        alt="GitHub QR"
                        />
                    </div>
                    </div>                     
            </div>
            <SecondPage/>
        </>
    )
}