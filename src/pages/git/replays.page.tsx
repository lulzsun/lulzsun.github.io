import Image from "../../components/Image";

export const metaData = {
  // title: 'Redirecting...',
  // description: "Redirect to another URL",
  // redirectUrl: "https://github.com/lulzsun/RePlays"

  title: 'Project: RePlays',
  description: "Preview of Replays",
}

export function Page() {
  return (
    <>
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 flex flex-col">
        <span className="">
          <span className="text-red-400">Project: </span>RePlays
        </span>
      </div>
      <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 text-center space-y-8">
        <h1>RePlays is a free and open source program that automatically manages recording of detected running games, with a clip editor that allows for quick video sharing.</h1>
        <div className="grid justify-items-center">
          <Image alt="image preview of replays" className="h-64" src={'/replays-preview.png'}/>
        </div>
        <h1>
          This project had an interesting history where it first started off as a reverse engineering, client modification of a recording application called Plays. 
          <br/><br/>
          After some time, I decided that re-developing the application from scratch would give me more freedom to develop without the restraints of the original proprietary software.
        </h1>
        <h1>Click <a className='underline underline-offset-2 text-red-300' href="https://github.com/lulzsun/gecgos.io">here</a> to be redirected to the GitHub repository.</h1>
      </div>
    </>
  )
  // return (
  //   <>
  //     <h1>If you are not redirected automatically, click <a className='underline underline-offset-2 text-red-300' href={metaData.redirectUrl}>here</a>.</h1>
  //   </>
  // )
}