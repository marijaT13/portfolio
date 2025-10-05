import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function OutroPage(){
    return(
        <div className="flex flex-col justify-center items-center h-screen mt-5">
             <h1 className="text-9xl text-center font-sans">Let's work together!</h1>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center m-20">
                <Card className="mr-50 inline-flex text-center bg-transparent border-none  shadow-xl p-2">
                <CardContent className="p-0">
                    <Link href='mailto:marijatashevska222@gmail.com' 
                    className="text-center underline text-blue-800 hover:text-blue-500">
                   marijatashevska222@gmail.com</Link>
                    <p></p>
                </CardContent>
                
             </Card>
             <Card className="ml-40 inline-flex text-center bg-transparent border-none shadow-xl p-2">
                <CardContent className="p-0">
                    <Link href='tel:+38975978667' 
                    className="text-center underline text-red-900 hover:text-red-600">
                   +389 75 978 667</Link>
                    <p></p>
                </CardContent>
             </Card>
             </div>
             
        </div>   
    )
}