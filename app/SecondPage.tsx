import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ProjectsPage from "./ProjectsPage";



export default function SecondPage(){
    return(
        <>
           <div className="flex justify-center items-center gap-4 mb-20"> 
               
                <div className="flex justify-center items-center mt-0">
                    <Card className="bg-transparent shadow-2xl m-10 w-[auto] h-[auto]">
                    <CardHeader>
                        <CardTitle className="text-5xl font-sans ">Skills.</CardTitle>                
                    </CardHeader>
                    <CardContent className="font-sans">
                        <p>I had the privilege of studying at a university that exposed 
                        me to a wide range of programming languages, database integrations, 
                        and software development methodologies.  <br/> 
                        This allowed me to develop a strong foundation in multiple 
                        technologies and the ability to quickly adapt to new ones.<br/>
                        While I have worked with various tools and frameworks over time,
                        my preferred tech stack includes:
                        <br/>
                        <br/>
                        </p>
                       <strong>Technical Skills:</strong>
                        <ul className="list-disc ml-6">
                            <li>React · TypeScript · TailwindCSS · HTML/CSS/JavaScript</li>
                            <li>Java (used primarily for backend logic and Android development)</li>
                        </ul>

                        <strong>Tools & Platforms:</strong>
                        <ul className="list-disc ml-6">
                            <li>Git · GitHub · Figma</li>
                            <li>Firebase · Appwrite · Twilio</li>
                            <li>Android Studio</li>
                        </ul>
                        
                    </CardContent>
                    </Card>
                </div>   
            </div>
            
        </>
    )
}