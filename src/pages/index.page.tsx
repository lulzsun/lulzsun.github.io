import { Github, Linkedin, FileEarmarkPdf, ChatLeftQuoteFill } from 'react-bootstrap-icons';
import ColumnHeader from "../components/ColumnHeader";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Image from "../components/Image";
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
        <span className="text-stone-200">
          I'm a software engineer passionate about building amazing applications for users, 
          currently specializing in web and desktop applications.
        </span>
      </Header>
    </div>
{/*              */}
{/* STICKY LINKS */}
{/*              */}
    <div className="items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0 px-6 md:px-0">
      <div className="justify-center flex flex-wrap md:flex-col md:fixed top-24 z-50 gap-2">
        <a aria-label="Visit GitHub profile" href="https://github.com/lulzsun" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <Github/> <span className="pl-3.5">GitHub</span>
          </div>
        </a>
        <a aria-label="Visit LinkedIn profile" href="https://www.linkedin.com/in/jminquach/" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <Linkedin/> <span className="pl-3.5">Linkedin</span>
          </div>
        </a>
        <button aria-label="View resume" onClick={() => {document.getElementById("resumePdf")?.click()}} className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <FileEarmarkPdf/> <span className="pl-3.5">Resume</span>
          </div>
        </button>
        <a aria-label="Visit blog" href="/blog" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-24 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
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
      <div className="pb-4 text-white-400 text-2xl">
        <span className="text-stone-400">/* About Me */</span>
      </div>
      <div className="text-stone-200">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-2 mr-2">
            <span>
              My first ever computer was some Windows 95 machine that my parents picked up from the side of the road.
            </span>
            <span>
              I grew up fascinated with computers ever since, and eventually found myself to be a self-taught programmer all the way until college.
            </span>
            <span>
              Now with a bachelor's degree in computer science, I am looking to find my footing in the ever-growing world of technology. Check out my <a className="cursor-pointer underline underline-offset-2 text-red-300" onClick={() => {document.getElementById("resumePdf")?.click()}}>resume</a>.
            </span>
          </div>
          <div className="h-40 rounded-full overflow-hidden drop-shadow-lg" style={{"minWidth": "10rem"}}>
            <Image alt="baby jimmy in front of windows 95 computer" className="h-44 max-w-none relative -top-0.5 -left-4" src={'/win95-2.png'}/>
          </div>
        </div>
      </div>
    </div>
{/*          */}
{/* PROJECTS */}
{/*          */}
    <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <div className="pb-4 text-slate-200 text-2xl">
        <span className="text-stone-400">/* Projects */</span>
      </div>
      <div className="pb-4 text-stone-200">
        Here are the highlights of some of the projects that I have worked on:
      </div>
      <span className="flex">
        <span className="px-2 select-none">•</span>
        <span>
          <a className="underline underline-offset-2 text-red-300" href="https://github.com/lulzsun/RePlays">RePlays</a> is a free and open source program that automatically 
          manages recording of detected running games, with a clip editor 
          that allows for quick video sharing.
        </span>
      </span>
      <span className="flex">
        <span className="px-2 select-none">•</span>
        <span>
          <a className="underline underline-offset-2 text-red-300" href="https://github.com/lulzsun/gecgos.io">Gecgos.io</a> is a reimplementation
          of <a className="underline underline-offset-2 text-red-300" href="https://github.com/geckosio/geckos.io">geckos.io</a> in
          written in Go, which is a library for real-time UDP client/server 
          communication using WebRTC.
        </span>
      </span>
    </div>
  </>
  )
}