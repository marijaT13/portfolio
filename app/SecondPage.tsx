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
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 place-items-center">
                            <Image
                            src="/assets/skills/ts1.png"
                            alt="typescript"
                            width={50}
                            height={50}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/react1.png"
                            alt="react"
                            width={60}
                            height={60}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/java.png"
                            alt="java"
                            width={60}
                            height={60}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/tailwindcss1.png"
                            alt="tailwindcss"
                            width={50}
                            height={50}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/js.png"
                            alt="js"
                            width={70}
                            height={70}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/html1.png"
                            alt="html"
                            width={55}
                            height={55}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/css.png"
                            alt="css"
                            width={70}
                            height={70}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/nextjs.png"
                            alt="nextjs"
                            width={90}
                            height={80}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/nodejs.png"
                            alt="nodejs"
                            width={90}
                            height={80}
                            className="hover:animate-bounce"
                            />
                            
                        </div>

                        <strong>Tools & Platforms:</strong>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 place-items-center">
                            <Image
                            src="/assets/skills/appwrite1.png"
                            alt="appwrite"
                            width={50}
                            height={50}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/mongodb1.png"
                            alt="mongodb"
                            width={80}
                            height={80}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/firebase1.png"
                            alt="tailwindcss"
                            width={80}
                            height={80}
                            className="hover:animate-bounce"
                            />                            
                            <Image
                            src="/assets/skills/figma.png"
                            alt="figma"
                            width={80}
                            height={80}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/androids.png"
                            alt="androidstudio"
                            width={60}
                            height={60}
                            className="hover:animate-bounce"
                            />
                            <Image
                            src="/assets/skills/git.png"
                            alt="git"
                            width={60}
                            height={60}
                            className="hover:animate-bounce"
                            />
                            
                        </div>
                        
                    </CardContent>
                    </Card>
                </div>   
            </div>
            <ProjectsPage/>
        </>
    )
}