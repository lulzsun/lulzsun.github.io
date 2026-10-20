import { EnvelopeFill } from "../../components/Icons";
import Portrait from "../../components/Portrait";

export const metadata = {
  title: "Lost Item | Jimmy Quach",
  description: "You found one of Jimmy Quach's lost items. Please get in touch so it can be returned!",
};

const email = "jminquach@gmail.com";
const subject = encodeURIComponent("I found your lost item!");

export default function Page() {
  return (
    <div className="flex flex-col items-center text-center sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 gap-6">
      <div className="h-40 w-40 drop-shadow-lg" style={{ minWidth: "10rem" }}>
        <Portrait />
      </div>
      <h1 className="text-red-300 text-3xl md:text-4xl">You found one of my lost items!</h1>
      <div className="text-stone-200 flex flex-col gap-3">
        <span>Hi, I'm Jimmy. Thank you so much for scanning this.</span>
        <span>
          It looks like I've misplaced something and you've found it. I'd be very grateful if you could get in touch so
          I can arrange to get it back.
        </span>
      </div>
      <a
        aria-label="Email Jimmy about the lost item"
        href={`mailto:${email}?subject=${subject}`}
        className="cursor-pointer bg-neutral-800 h-11 px-6 rounded-full drop-shadow-lg inline-flex items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300"
      >
        <EnvelopeFill />
        <span className="pl-3.5 whitespace-nowrap">Email me</span>
      </a>
      <span className="text-stone-400 text-sm">{email}</span>
    </div>
  );
}
