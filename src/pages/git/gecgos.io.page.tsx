import Image from "../../components/Image";

export const metaData = {
  // title: 'Redirecting...',
  // description: "Redirect to another URL",
  // redirectUrl: "https://github.com/lulzsun/gecgos.io"

  title: 'Project: Gecgos.io',
  description: "Preview of Gecgos.io",
}

export function Page() {
  return (
    <>
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 flex flex-col">
        <span className="">
          <span className="text-red-400">Project: </span>Gecgos.io
        </span>
      </div>
      <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 text-center space-y-8">
        <h1>Gecgos.io is a reimplementation of geckos.io in written in Go, which is a library for real-time UDP client/server communication using WebRTC.</h1>
        <div className="grid justify-items-center">
          <Image alt="image preview of gecgos" className="h-64" src={'/gecgos.svg'}/>
        </div>
        <h1>
          This project came together when I was researching ways to have low latency networking for web-based games when compared to using something such as websockets.
          <br/><br/>
          That is when I found the parent project <a className='underline underline-offset-2 text-red-300' href="https://github.com/geckosio/geckos.io">Geckos.io</a>, 
          in which I have decided to rewrite it in Golang to fit in my future projects' codebase.
          <br/><br/>
          I ended up using this library for my <a className='underline underline-offset-2 text-red-300' href="/git/whirled">Whirled</a> project.
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