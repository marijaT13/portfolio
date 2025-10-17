import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SecondPage from "./SecondPage";


export default function FirstPage(){
   return (
  <>
    <div className="flex flex-col items-center justify-center gap-10 mt-0 mx-10 h-auto">
      {/* Education Card */}
      <Card className="bg-transparent shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-sans text-center">
            Education.
          </CardTitle>
        </CardHeader>
        <CardContent className="font-sans text-center">
          <p className="text-gray-600 italic">October 2021 - September 2025</p>
          <p className="text-gray-900 font-bold">FIKT</p>
          <br />
          <p>
            I am a college graduate from the Faculty of Information and Communication Technologies.
            I studied a wide range of ICT disciplines including programming, networking, and database 
            systems, learning how to design and implement them effectively. <br /><br />
            Through academic and project-based work, I gained hands-on experience in designing, 
            developing, and deploying technology-driven solutions. <br /><br />
            This blend of theory and practice has strengthened my ability to analyze problems, 
            think critically, and deliver efficient digital solutions.
          </p>
        </CardContent>
      </Card>

      {/* QR Images Section */}
     <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-30 m-10 mt-20">
        {/* LinkedIn QR */}
        <div className="flex flex-col items-center ml-20">
          <Image
            src="/assets/images/linkedin.png"
            width={250}
            height={250}
            alt="LinkedIn QR"
            className="w-[220px] sm:w-[250px] h-auto"
          />
        </div>

        {/* GitHub QR */}
        <div className="flex flex-col items-center mt-8 sm:mt-0 mr-10">
          <Image
            src="/assets/images/github.png"
            width={240}
            height={240}
            alt="GitHub QR"
            className="w-[240px] sm:w-[240px] h-auto"
          />
        </div>
      </div>
    
    </div>

   <SecondPage />
  </>
);
}