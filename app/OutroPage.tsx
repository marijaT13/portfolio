'use client'
import {FaEnvelope, FaLinkedin, FaGlobe, FaGithub, FaDev } from 'react-icons/fa'

type ContactType = 
 | "email"
 | "linkedin"
 | "dev"
 | "github"
 | "website";

type Item = {
  type:ContactType
  label:string;
  value:string;
  icon:React.ReactNode,
}

export default function OutroPage() {
  const items: Item[] = [
    {
      type: "email",
      label: "EMAIL",
      value: "marija.tashevska222@gmail.com",
      icon: <FaEnvelope size={20} />,
    },
    {
      type: "website",
      label: "WEBSITE",
      value: "marias-portfolio.vercel.app",
      icon: <FaGlobe size={20} />,
    },
    {
      type: "linkedin",
      label: "LINKEDIN",
      value: "in/marija-tashevska",
      icon: <FaLinkedin size={20} />,
    },
    {
      type: "github",
      label: "GITHUB",
      value: "marijaT13",
      icon: <FaGithub size={20} />,
    },
    {
      type: "dev",
      label: "DEV.TO",
      value: "@marija_tashevska",
      icon: <FaDev size={20} />,
    },
   
  ];

  const getHref = (item: Item) => {
    switch (item.type) {
      case "email":
        return `mailto:${item.value}`;

      case "website":
        return `https://${item.value}`;

      case "linkedin":
        return `https://linkedin.com/${item.value}`;

      case "github":
        return `https://github.com/${item.value}`;

      case "dev":
        return `https://dev.to/${item.value.replace("@", "")}`;


      default:
        return "#";
    }
  };

  return (
    <div className="min-h-screen p-8 pt-30">
      <div className=" p-10 rounded-2xl text-gray-800 dark:text-gray-200 text-left mb-10 text-shadow-2xs">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Contacts
      </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 ">
          Choose where and say Hi👋🏻
         </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <a
            key={i}
            href={getHref(item)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-transparent border-1 p-6 rounded-2xl shadow-xl hover:shadow-md hover:scale-[1.02] transition cursor-pointer"
          >
            <div className="bg-gray-200 p-4 rounded-xl text-gray-700">
              {item.icon}
            </div>

            <div>
              <p className="text-xs tracking-widest text-gray-500 dark:text-white/90">
                {item.label}
              </p>
              <p className="font-semibold text-gray-900 dark:text-white break-all">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}