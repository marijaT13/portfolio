import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsPage(){
    return(
        <>                      
        <h1 className="text-6xl font-mono font-light p-10">Projects. </h1>  
            <div className="justify-center items-center m-4">
                <Image
                src="assets/icons/logo.svg"
                height={300}
                width={200}
                alt='meditrack'
                className="m-10 justify-center"
                />
                <Image
                src="assets/icons/logo33.svg"
                height={300}
                width={200}
                alt='meditrack'
                className="m-10 justify-center"
                />
                <Image
                src="assets/icons/logo2.svg"
                height={300}
                width={200}
                alt='meditrack'
                className="m-10 justify-center"
                />
                
            </div>
                
        </>
    )
}