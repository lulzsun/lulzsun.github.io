import { Github } from "react-bootstrap-icons";

interface Props {
    rightAlign: boolean,
    image: string,
    title: string,
    github: string,
    children?: JSX.Element|JSX.Element[];
}

export const ProjectCard: React.FC<Props> = ({rightAlign, image, title, github, children}) => {
  return (
    <div className="relative py-8 h-72">
    <img className={"relative " + (rightAlign ? "float-left" : "float-right") + " rounded-lg drop-shadow-lg h-56"} src={image}/>
    <div className={"absolute " + (rightAlign ? "left-1/2" : "right-1/2") + " bottom-0 rounded-xl drop-shadow-lg bg-stone-800 p-4 z-10 hover:z-20"}>
      <div className="flex text-stone-400 text-lg pl-1 pb-1.5">
        <span className="inline-block align-text-bottom">// {title}</span>
        <div className="grow"/>
        <div className="w-11">
          <a href={github} className="absolute -top-5 cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
            <div className="items-center place-content-center">
              <Github/>
            </div>
          </a>
        </div>
      </div>
      {children}
    </div>
  </div>
  )
}

export default ProjectCard;