import Image from "../../components/Image";

export const metaData = {
  // title: 'Redirecting...',
  // description: "Redirect to another URL",
  // redirectUrl: "https://github.com/lulzsun/whirled2"

  title: 'Project: Whirled',
  description: "Preview of Whirled",
}

export function Page() {
  return (
    <>
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 flex flex-col">
        <span className="">
          <span className="text-red-400">Project: </span>Whirled
        </span>
      </div>
      <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 text-center space-y-8">
        <h1>Whirled is a social media platform in which users interact with each other in 3D virtual
        spaces with virtual avatars.</h1>
        <div className="grid justify-items-center">
          <Image alt="image preview of whirled" className="h-64" src={'/whirled-preview.png'}/>
        </div>
        <h1>
          The idea for this project came to me because of an old 2D Adobe flash browser game (which was also called <a className='underline underline-offset-2 text-red-300' href="https://en.wikipedia.org/wiki/Whirled">Whirled</a>). 
          The game was my absolute childhood and I was devastated when the game ended up being shutdown.
          <br/><br/>
          I challenged myself to recreate the game on my own using modern browser technologies. The scope of the project was large, but I was able to build out a promising tech demo, demonstrating my ability to learn and develop very quickly.
          <br/><br/>
          This project was submitted to my university's senior capstone course as our final project.
        </h1>
        <h1>
          Click <a className='underline underline-offset-2 text-red-300' href="https://github.com/lulzsun/whirled2">here</a> to be redirected to the GitHub repository.
          <br/>
          Click <a className='underline underline-offset-2 text-red-300' href="https://whirled2.fly.dev">here</a> to be redirected to the live demo.
        </h1>
        
      </div>
    </>
  )
  // return (
  //   <>
  //     <h1>If you are not redirected automatically, click <a className='underline underline-offset-2 text-red-300' href={metaData.redirectUrl}>here</a>.</h1>
  //   </>
  // )
}