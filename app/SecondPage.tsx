import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaAndroid } from 'react-icons/fa';
import { SiMongodb, SiAppwrite, SiFirebase } from 'react-icons/si';
import ProjectsPage from './ProjectsPage';

// Alternative with image sources
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },

  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiAppwrite />, title: "Appwrite", href: "https://appwrite.io" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" }, 
    { node: <FaWordpress />, title: "WordPress", href: "https://wordpress.org" },
    { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <FaJs />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
    { node: <FaAndroid />, title: "Android", href: "https://developer.android.com" },
];

export default function SecondPage() {
  return (
    <>
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className='pt-20'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOutColor='none'
    />
    
    </div>
      <section id="projects" className="w-full scroll-mt-24">
        <ProjectsPage/>
        </section>
        </>
  );
}