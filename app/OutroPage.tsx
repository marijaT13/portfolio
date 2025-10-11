'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function OutroPage(){
     useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // play once
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  
    return(
    <div className="relative flex flex-col h-screen justify-between items-center text-black">
      <main className="flex flex-col justify-center items-center flex-grow p-4">
       <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center font-sans mb-12 animate-on-scroll">
        <b className="outro relative flex items-center justify-center flex-wrap animate-on-scroll outro-section">
              <span className="relative w-full sm:w-auto max-w-[100%] mb-0 inline-block sm:h-auto">
                  <svg  width="882" height="395" viewBox="0 0 882 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.5903 13.7649C72.2301 9.37139 79.8699 4.97791 84.2549 4.32555C88.64 3.67318 89.5388 6.89507 88.4289 22.3211C87.319 37.747 84.1732 65.2795 70.1942 100.844C56.2151 136.409 31.4981 179.173 18.091 203.106C4.6839 227.039 3.3357 230.847 4.88817 232.076C6.44065 233.306 10.9346 231.841 24.26 225.375C37.5854 218.909 59.606 207.486 75.444 200.137C91.2819 192.788 100.27 189.859 110.892 186.841" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M130.352 164.697C157.316 164.697 173.004 162.939 175.953 159.251C178.87 155.602 178.016 151.108 176.892 147.855C174.974 142.301 146.421 145.454 128.125 150.176C114.052 153.808 117.197 166.135 117.408 178.41C117.476 182.355 122.168 183.921 125.109 184.955C132.599 186.584 138.959 188.066 147.075 188.51C153.394 188.661 164.18 188.661 175.292 188.661" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M231.888 35.1113C213.912 145.211 195.936 255.311 186.676 315.059C177.415 374.807 177.415 380.868 178.314 384.495C179.213 388.122 181.011 389.132 182.611 389.905C185.514 391.307 194.139 391.703 210.201 386.4C229.41 370.492 241.857 355.524 244.58 348.14C245.506 344.795 245.506 342.27 245.506 339.669" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M177.938 102.752C177.938 103.045 177.938 103.338 204.453 104.221C230.967 105.104 283.996 106.568 338.633 108.077" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M249.88 13.3726C248.981 13.3726 246.721 13.3726 245.57 13.3726C244.923 13.3726 249.363 13.3726 251.882 14.1048C254.401 14.8371 256.199 16.3015 257.35 17.6418C258.5 18.982 258.95 20.1536 259.413 21.3607" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M301.077 158.891C299.729 157.719 298.381 156.548 296.787 155.944C289.137 153.046 277.954 159.175 273.643 161.536C270.452 163.284 271.117 167.154 272.016 172.457C274.825 189.03 301.922 196.435 310.814 205.75C312.508 207.524 311.972 208.577 311.073 209.469C308.972 211.554 297.536 212.145 283.469 211.706C278.389 211.266 277.491 210.388 276.129 209.349C274.767 208.311 272.969 207.139 268.394 205.045" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M464.154 38.6614C461.458 38.6614 475.798 31.6318 500.528 22.299C508.897 19.1408 511.327 22.6318 509.782 53.5726C508.236 84.5133 503.293 143.679 501.645 173.719C499.997 203.759 501.795 202.88 504.743 199.791C512.461 191.706 523.543 179.262 540.062 165.54C557.679 150.905 570.812 142.525 573.76 140.302C574.885 139.453 575.823 144.256 575.374 150.593C574.776 159.017 573.099 173.767 573.998 188.417C574.288 193.14 576.695 192.229 580.542 188.994C584.389 185.759 590.231 180.194 609.419 158.435C628.607 136.676 660.964 98.892 681.228 74.0089C701.492 49.1258 708.682 38.2886 712.386 32.12C716.09 25.9514 716.09 24.7798 717.452 22.6851" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M686.685 143.58C663.317 151.781 649.93 160.692 649.46 169.111C649.25 172.884 653.484 175.479 661.621 176.984C669.758 178.488 682.791 178.781 690.628 177.76C698.465 176.74 700.712 174.397 701.87 171.139C703.027 167.882 703.027 163.781 700.106 157.861C697.185 151.941 691.343 144.326 682.6 138.255" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M731.23 133.823C731.23 134.116 731.23 134.409 730.106 145.983C728.983 157.557 726.736 180.403 724.904 188.511C724.409 190.703 721.683 168.571 724.625 145.526C726.681 129.413 731.216 122.586 734.607 121.845C736.557 121.419 739.346 121.983 741.634 123.012C749.369 128.489 755.715 134.373 760.495 140.608C761.19 141.802 761.19 142.681 761.19 143.586" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M797.768 4.24756C797.768 5.12625 797.768 6.00495 796.645 54.493C795.521 102.981 793.274 199.052 791.892 245.76C790.51 292.469 790.06 286.904 790.503 283.158C790.946 279.412 792.294 277.655 793.683 275.844" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M864.97 102.752C808.251 143.562 803.688 148.888 799.623 151.852C798.337 152.79 796.907 153.911 796.886 153.343C796.777 150.307 803.198 145.675 810.443 141.392C817.059 137.482 824.538 136.479 829.978 137.065C834.45 137.547 841.751 149.11 853.538 163.746C861.729 171.059 866.768 173.163 870.615 173.607C872.665 173.757 874.912 173.757 877.227 173.757" stroke="black" strokeWidth="8" strokeLinecap="round"/>
                    </svg>ogether!
                    </span>

                </b>
             </h1>

              <div className="flex flex-col sm:flex-row mt-20 gap-20 justify-center items-center">
                <Card className="text-center bg-white/40 border-none  shadow-xl p-2">            
                    <CardContent className="p-0">
                    <Button
                      onClick={() =>
                        (window.location.href =
                          "mailto:marijatashevska222@gmail.com")
                      }
                      className="bg-transparent text-black hover:bg-green-900/50"
                    >
                      Contact Me
                    </Button>
                    </CardContent>
                </Card>
            </div> 
      
      </main>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 right-0 bg-green-900 text-white py-6 px-9 flex flex-col sm:flex-row items-center justify-between text-sm font-sans">
        <p className="text-gray-300 mb-4 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} Marija Tashevska — All rights reserved.
        </p>

        <div className="flex gap-6 justify-center sm:justify-end ">
          <Link
            href="mailto:marijatashevska222@gmail.com"
            className="hover:text-yellow-400"
          >
            <Mail className="w-5 h-5" />
          </Link>
          
          <Link
            href="https://github.com/marijaT13"
            target="_blank"
            className="hover:text-gray-400"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marija-tashevska-567b1b219"
            target="_blank"
            className="hover:text-blue-500"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}