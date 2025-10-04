'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function ProjectsPage(){
    return(
        <>
        <h1 className="text-6xl font-sans m-10 text-center md:text-left">Projects.</h1>
          <div className="grid gap-4 mb-20"> 
                <div className="flex justify-center items-center md:flex-row flex-wrap gap-10 mb-20">
                    <Card className="bg-transparent shadow-2xl w-[500px] h-[auto] m-5">
                    <CardHeader>
                     <Image
                     src="/assets/icons/logo.svg"
                     height={200}
                     width={300}
                     alt="meditrack"
                     /> 
                    </CardHeader>
                    <CardContent className="font-sans">
                       <p>
                        As my bachelor's thesis, I aimed to showcase my existing skills, 
                        acquire new ones, and challenge myself to create a fully functional, 
                        visually appealing website within a limited timeframe.<br/>
                        With that in mind, I
                        <li>Strengthened my React and Next.js skills through hands-on development,</li> 
                        <li>learnt how to implement
                        Shadcn components, enabling faster development and a cohesive design system and</li> 
                        <li>successfully implemented OTP authentication with Twilio and Appwrite's messaging services.</li>
                       </p>
                    </CardContent>
                    </Card>

                    <Card className="bg-transparent shadow-2xl w-[500px] h-[auto] m-5">
                    <CardHeader>
                     <Image
                     src="/assets/icons/logo33.svg"
                     height={200}
                     width={300}
                     alt="localist"
                     /> 
                    </CardHeader>
                    <CardContent className="font-sans">
                       <p>
                        In my final year, I decided to create an Android app developed 
                        entirely in Java — a travel guide showcasing the beauty of Macedonia.<br/>
                        Although it was my first app, the project was a success: simple, functional,
                        and an excellent foundation for learning mobile development. <br/>
                        With this project, I:
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
                       </p>
                    </CardContent>
                    </Card>

                    <Card className="bg-transparent shadow-2xl w-[500px] h-[auto] m-5">
                    <CardHeader>
                     <Image
                     src="/assets/icons/logo2.svg"
                     height={200}
                     width={300}
                     alt="gifts4u"
                     /> 
                    </CardHeader>
                    <CardContent className="font-sans">
                       <p>
                        This project was a basic front-end project using HTML and CSS, 
                        completed in collaboration with a partner.<br/>
                        Our goal was to test our abilities, learn effective communication,
                        work on a single code branch, create a cohesive design, and implement interactive widgets.<br/>
                        Although simple, it was our first project during our early days of college, and it laid the
                        foundation for future teamwork and development skills.<br/>
                        <br/>
                        Through this project, I: 
                        <li>Learned how to collaborate effectively on a shared codebase, managing conflicts 
                          and coordinating tasks,</li>
                        <li>
                          practiced creating cohesive designs that integrate multiple elements seamlessly and 
                        </li>
                        <li>
                         gained experience implementing interactive front-end components, such as widgets and 
                         dynamic content.
                        </li>
                       </p>
                    </CardContent>
                    </Card>

                </div>
                   
            </div>
        </>
        
    )
}