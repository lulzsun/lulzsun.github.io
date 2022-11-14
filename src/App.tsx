import ColumnHeader from "./components/columnHeader"
import win95 from './assets/win95-2.png'
import replaysPreview from './assets/replays-preview.png'
import { Github, Linkedin, FileEarmarkPdf } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="flex flex-col items-center h-screen mt-10">
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="pb-4 text-red-400">Hello! My name is</div>
            <div className="pb-4 text-red-200 text-3xl md:text-4xl lg:text-5xl">Jimmy Quach.</div>
            <div className="pb-4 text-stone-400 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              I build cool stuff.
            </div>
          </div>
          <div className="grow"></div>
          <div className="h-40 w-40 rounded-full overflow-hidden" style={{"minWidth": "10rem"}}>
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
          <a className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
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
              <div className="h-40 rounded-full overflow-hidden" style={{"minWidth": "10rem"}}>
                <img className="h-40 max-w-none relative" src={win95}/>
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
            Today, I am currently focusing on building full stack web and desktop applications. <br/><br/>
            Here are the technologies that I have been working with for software development:
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-3">
            <div className="flex"><span className="px-2">•</span><span>
              Javascript / Typescript
            </span></div>
            <div className="flex"><span className="px-2">•</span><span>
              Golang
            </span></div>
            <div className="flex"><span className="px-2">•</span><span>
              C# / .NET
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
              Soldering & hobby electrical work
            </span></div>
            <div className="flex"><span className="px-2">•</span><span>
              Microcontroller firmware (Arduino, RP2040)
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
          <div>
            <div className="text-stone-400 text-xl p-3">// RePlays</div>
            <div className="relative pb-8">
              <img className="rounded-lg drop-shadow-lg h-56" src={replaysPreview}/>
              <div className="absolute left-1/2 bottom-0 rounded-xl drop-shadow-lg bg-stone-800 p-4">
                <span>
                  RePlays is a free and open source program that automatically manages recording of detected running games, with a clip editor that allows for quick video sharing.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-row">
          <span className="text-white-200">"</span>
          <span className="text-red-400">;</span>
        </div>
      </div>
{/*        */}
{/* FOOTER */}
{/*        */}
      <div className="flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      </div>
    </div>
  )
}

export default App
