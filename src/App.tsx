import ColumnHeader from "./components/ColumnHeader";
import ProjectCard from "./components/ProjectCard";
import win95 from './assets/win95-2.png';
import replaysPreview from './assets/replays-preview.png';
import gecgosPreview from './assets/gecgos-preview.png';
import Modal from 'react-modal';
import { useState } from "react";
import { Resume, ResumePDF } from "./components/Resume";
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { Github, Linkedin, FileEarmarkPdf, Envelope, XLg, Download, Printer } from 'react-bootstrap-icons';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col items-center h-screen mt-10">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        onAfterClose={() => document.body.style.overflow = 'unset'}
        overlayClassName="fixed inset-0 z-50"
        className="focus:outline-none absolute top-0 bottom-0 right-0 left-0 md:top-20 md:bottom-20 md:right-20 md:left-20 p-6 md:rounded-lg"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            backgroundColor: 'rgb(32 32 32)'
          }
        }}
        contentLabel="Resume Modal"
      >
        <div className="flex flex-col h-full">
          <div className="w-full flex-initial">
            <div className="flex gap-3 md:absolute md:mt-0 -mt-2 mb-4 float-left left-0 -top-5 -left-5">
              <a onClick={async () => {
                let blob = await pdf(Resume()).toBlob();
                saveAs(blob, "Jimmy Quach's Resume.pdf");
              }} className="cursor-pointer group overflow-hidden bg-neutral-800 w-auto h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
                <div className="inline-flex items-center place-content-center px-4">
                  <Download/> <span className="pl-3.5 whitespace-nowrap">Download</span>
                </div>
              </a>
              <a onClick={async () => {
                let blob = await pdf(Resume()).toBlob();
                let pdfFile = URL.createObjectURL(blob);
                window.open(pdfFile, "PRINT");
              }} className="cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
                <div className="inline-flex items-center place-content-center">
                  <Printer/>
                </div>
              </a>
            </div>

            <a onClick={closeModal} className="md:absolute md:mt-0 -mt-2 mb-4 float-right right-0 -top-5 -right-5 cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
              <div className="items-center place-content-center">
                <XLg/>
              </div>
            </a>
          </div>
          <div className="pt-0 md:pt-4 flex-auto">
            <ResumePDF/>
          </div>
        </div>
      </Modal>
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="pb-4 text-red-400">Hello! My name is</div>
            <div className="pb-4 text-red-300 text-3xl md:text-4xl lg:text-5xl">Jimmy Quach.</div>
            <div className="pb-4 text-stone-400 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              I build cool stuff.
            </div>
          </div>
          <div className="grow"></div>
          <div className="h-40 w-40 rounded-full overflow-hidden drop-shadow-lg" style={{"minWidth": "10rem"}}>
            <img className="h-40 max-w-none relative" src={"https://avatars.githubusercontent.com/u/28168454?v=4"}/>
          </div>
        </div>
        <div className="text-stone-200">
          I'm a software developer & engineer working on building amazing applications for users in the future, 
          specializing in both web and desktop applications at the moment.
        </div>
      </div>
{/*              */}
{/* STICKY LINKS */}
{/*              */}
      <div className="items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0">
        <div className="flex md:flex-col md:fixed top-24 z-50 gap-2">
          <a href="https://github.com/lulzsun" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
            <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
              <Github/> <span className="pl-3.5">GitHub</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jminquach/" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
            <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
              <Linkedin/> <span className="pl-3.5">Linkedin</span>
            </div>
          </a>
          <a onClick={openModal} className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
            <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
              <FileEarmarkPdf/> <span className="pl-3.5">Resume</span>
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
                <img className="h-44 max-w-none relative -top-0.5 -left-4" src={win95}/>
              </div>
            </div>
            <br/>
            I would consider myself a self-taught developer, but I am currently pursuing a Bachelors in Computer Science at the time of building this portfolio.
          </div>
        </div>
        <div className="pt-4 flex flex-row">
          <span className="text-white-200">"</span>
          <span className="text-red-400">;</span>
        </div>
      </div>
{/*        */}
{/* SKILLS */}
{/*        */}
      <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
        <ColumnHeader titleIndex="1"/>
        <div className="pl-4">
          <div className="pb-4 text-white-200 text-2xl">
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
          <span className="text-white-200">"</span>
          <span className="text-red-400">;</span>
        </div>
      </div>
{/*          */}
{/* PROJECTS */}
{/*          */}
      <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
        <ColumnHeader titleIndex="2"/>
        <div className="pl-4">
          <div className="pb-4 text-white-200 text-2xl">
            <span className="text-red-400 pr-1">&#123;</span>
            <span className="text-stone-400">/* Projects */</span>
            <span className="text-red-400 pl-1">&#125;</span>
          </div>
          <div className="-mb-2 text-stone-200">
            Here are the highlights of some of the projects that I have worked on:
          </div>
          <ProjectCard rightAlign={true} image={replaysPreview} title="RePlays"
            github="https://github.com/lulzsun/RePlays"
          >
            <span>
              RePlays is a free and open source program that automatically 
              manages recording of detected running games, with a clip editor 
              that allows for quick video sharing.
            </span>
          </ProjectCard>
          <ProjectCard rightAlign={false} image={gecgosPreview} title="Gecgos.io"
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
          <span className="text-white-200">"</span>
          <span className="text-red-400">;</span>
        </div>
      </div>
{/*        */}
{/* FOOTER */}
{/*        */}
      <div className="flex flex-row sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-16 md:pb-16 place-content-center items-center gap-6">
        <a className="hover:underline underline-offset-2 hover:text-red-300" href="https://github.com/lulzsun">
          <div className="inline-flex items-center place-content-center">
            <Github/> <span className="pl-3.5">GitHub</span>
          </div>
        </a>
        <span>•</span>
        <a className="hover:underline underline-offset-2 hover:text-red-300" href="https://www.linkedin.com/in/jminquach/">
          <div className="inline-flex items-center place-content-center">
            <Linkedin/> <span className="pl-3.5">LinkedIn</span>
          </div>
        </a>
        <span>•</span>
        <a onClick={openModal} className="hover:underline underline-offset-2 hover:text-red-300 cursor-pointer">
          <div className="inline-flex items-center place-content-center">
            <FileEarmarkPdf/> <span className="pl-3.5">Resume</span>
          </div>
        </a>
        <span className="hidden md:block">•</span>
        <a className="hidden md:block hover:underline underline-offset-2 hover:text-red-300" href="mailto:jminquach@gmail.com">
          <div className="inline-flex items-center place-content-center">
            <Envelope/> <span className="pl-3.5 whitespace-nowrap">Contact Me</span>
          </div>
        </a>
      </div>
      <a className="pb-16 pt-3 md:hidden block hover:underline underline-offset-2 hover:text-red-300" href="mailto:jminquach@gmail.com">
        <div className="inline-flex items-center place-content-center">
          <Envelope/> <span className="pl-3.5 whitespace-nowrap">Contact Me</span>
        </div>
      </a>
    </div>
  )
}

export default App