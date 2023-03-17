import { Github, Linkedin, FileEarmarkPdf, ChatLeftQuoteFill } from 'react-bootstrap-icons';
import ColumnHeader from "../components/ColumnHeader";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const metaData = {
  title: 'Portfolio | Jimmy Quach',
  description: "Jimmy Quach's home on the web!"
}

export function Page() {
  return (<>
{/*        */}
{/* HEADER */}
{/*        */}
    <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <Header greeting="Hello! My name is" title="Jimmy Quach" description="I build cool stuff.">
        <div className="text-stone-200">
          I'm a software developer & engineer working on building amazing applications for users in the future, 
          specializing in both web and desktop applications at the moment.
        </div>
      </Header>
    </div>
{/*              */}
{/* STICKY LINKS */}
{/*              */}
    <div className="items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0 px-6 md:px-0">
      <div className="justify-center flex flex-wrap md:flex-col md:fixed top-24 z-50 gap-2">
        <a href="https://github.com/lulzsun" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <Github/> <span className="pl-3.5">GitHub</span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jminquach/" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <Linkedin/> <span className="pl-3.5">Linkedin</span>
          </div>
        </a>
        <a onClick={() => {document.getElementById("resumePdf")?.click()}} className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <FileEarmarkPdf/> <span className="pl-3.5">Resume</span>
          </div>
        </a>
        <a href="/blog" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-24 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <ChatLeftQuoteFill/> <span className="pl-3.5">Blog</span>
          </div>
        </a>
      </div>
    </div>
{/*          */}
{/* ABOUT ME */}
{/*          */}
    <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <ColumnHeader titleIndex="0"/>
      <div className="pl-4">
        <div className="pb-4 text-white-400 text-2xl">
          <span className="text-red-400 pr-1">&#123;</span>
          <span className="text-stone-400">/* About Me */</span>
          <span className="text-red-400 pl-1">&#125;</span>
        </div>
        <div className="text-stone-200">
          <div className="flex flex-row">
            <span className="w">
              My name is Jimmy Quach, and I have been coding since I was a wee baby. 
              My first ever computer was one of those ancient dinosaur PCs with the CRT monitor, running Windows 95.
              <br/><br/>
              It all started when I was learning how to create rom hacks for GameBoy Pokemon games in my early teens. 
              I continued to invest my interests in computers and technology since then.
            </span>
            <div className="h-40 rounded-full overflow-hidden drop-shadow-lg" style={{"minWidth": "10rem"}}>
              <img className="h-44 max-w-none relative -top-0.5 -left-4" src={'/win95-2.png'}/>
            </div>
          </div>
          <br/>
          I would consider myself a self-taught developer, but I am currently pursuing a Bachelors in Computer Science at the time of building this portfolio.
        </div>
      </div>
      <div className="pt-4 flex flex-row">
        <span className="text-slate-200">"</span>
        <span className="text-red-400">;</span>
      </div>
    </div>
{/*        */}
{/* SKILLS */}
{/*        */}
    <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <ColumnHeader titleIndex="1"/>
      <div className="pl-4">
        <div className="pb-4 text-slate-200 text-2xl">
          <span className="text-red-400 pr-1">&#123;</span>
          <span className="text-stone-400">/* Skills */</span>
          <span className="text-red-400 pl-1">&#125;</span>
        </div>
        <div className="pb-4 text-stone-200">
          I am currently focusing on building full stack web and desktop applications. <br/><br/>
          Here are the technologies that I have been working with for software development:
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-3">
          <div className="flex"><span className="px-2">•</span><span>
            Javascript / Typescript
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            C# / .NET
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            Go
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            PostgreSQL
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            MongoDB
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            React
          </span></div>
        </div>
        <div className="pb-4 text-stone-200">
          <br/>
          And if I'm not working with these technologies, then I might be tinkering in the <b>hardware</b> space (for fun)!
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-3">
          <div className="flex"><span className="px-2">•</span><span>
            PCB schematics & board design in KiCad
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            3D printing & modeling in Fusion360
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            Microcontroller firmware (Arduino, RP2040)
          </span></div>
          <div className="flex"><span className="px-2">•</span><span>
            Soldering & hobby electrical work
          </span></div>
        </div>
      </div>
      <div className="pt-4 flex flex-row">
        <span className="text-slate-200">"</span>
        <span className="text-red-400">;</span>
      </div>
    </div>
{/*          */}
{/* PROJECTS */}
{/*          */}
    <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <ColumnHeader titleIndex="2"/>
      <div className="pl-4">
        <div className="pb-4 text-slate-200 text-2xl">
          <span className="text-red-400 pr-1">&#123;</span>
          <span className="text-stone-400">/* Projects */</span>
          <span className="text-red-400 pl-1">&#125;</span>
        </div>
        <div className="-mb-2 text-stone-200">
          Here are the highlights of some of the projects that I have worked on:
        </div>
        <ProjectCard rightAlign={true} image={"/replays-preview.png"} title="RePlays"
          github="https://github.com/lulzsun/RePlays"
        >
          <span>
            RePlays is a free and open source program that automatically 
            manages recording of detected running games, with a clip editor 
            that allows for quick video sharing.
          </span>
        </ProjectCard>
        <ProjectCard rightAlign={false} image={"/gecgos-preview.png"} title="Gecgos.io"
          github="https://github.com/lulzsun/gecgos.io"
        >
          <span>
            Gecgos.io is a reimplementation
            of <a className="underline underline-offset-2 text-red-300" href="https://github.com/geckosio/geckos.io">geckos.io</a> in
            written in Go, which is a library for real-time UDP client/server 
            communication using WebRTC.
          </span>
        </ProjectCard>
      </div>
      <div className="pt-4 flex flex-row">
        <span className="text-slate-200">"</span>
        <span className="text-red-400">;</span>
      </div>
    </div>
  </>
  )
}