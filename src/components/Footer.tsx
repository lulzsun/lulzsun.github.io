import { ChatLeftQuoteFill, Envelope, FileEarmarkPdf, Github, Linkedin } from "react-bootstrap-icons";

interface Props {
  openResume: () => void,
}

export const Footer: React.FC<Props> = ({openResume}) => {
  return (<>
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
      <a id="resumePdf" onClick={openResume} className="hover:underline underline-offset-2 hover:text-red-300 cursor-pointer">
        <div className="inline-flex items-center place-content-center">
          <FileEarmarkPdf/> <span className="pl-3.5">Resume</span>
        </div>
      </a>
      <span className="hidden md:block">•</span>
      <a className="hidden md:block hover:underline underline-offset-2 hover:text-red-300" href="/blog">
        <div className="inline-flex items-center place-content-center">
          <ChatLeftQuoteFill/> <span className="pl-3.5 whitespace-nowrap">Blog</span>
        </div>
      </a>
      <span className="hidden md:block">•</span>
      <a className="hidden md:block hover:underline underline-offset-2 hover:text-red-300" href="mailto:jminquach@gmail.com">
        <div className="inline-flex items-center place-content-center">
          <Envelope/> <span className="pl-3.5 whitespace-nowrap">Contact Me</span>
        </div>
      </a>
    </div>
    {/* for responsive mobile layout... there's probably a better way to do this but i am lazy */}
    <div className="md:hidden flex items-center gap-6">
      <a className="pb-16 pt-3 hover:underline underline-offset-2 hover:text-red-300" href="/blog">
        <div className="inline-flex items-center place-content-center">
          <ChatLeftQuoteFill/> <span className="pl-3.5 whitespace-nowrap">Blog</span>
        </div>
      </a>
      <span className="pb-16 pt-3">•</span>
      <a className="pb-16 pt-3 md:hidden block hover:underline underline-offset-2 hover:text-red-300" href="mailto:jminquach@gmail.com">
        <div className="inline-flex items-center place-content-center">
          <Envelope/> <span className="pl-3.5 whitespace-nowrap">Contact Me</span>
        </div>
      </a>
    </div>
  </>
  )
}

export default Footer;