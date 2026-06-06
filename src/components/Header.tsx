import { useEffect, useRef, useState } from "react";
import Portrait from "./Portrait";
import Confetti from "react-confetti";
import * as reactUse from "react-use";

const useMeasure: typeof reactUse.useMeasure =
  typeof window !== "undefined"
    ? reactUse.useMeasure
    : () => [() => {}, { width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0, x: 0, y: 0 }] as any;

interface Props {
  greeting: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export default function Header({ greeting, title, description, children }: Props) {
  const [ref, { width, height }] = useMeasure();
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const now = new Date();
    setIsBirthday(now.getMonth() === 3 && now.getDate() === 7); // April 7th (0-indexed)
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <div ref={ref} className="relative flex flex-row">
        {isBirthday && (
          <Confetti
            style={{ position: "absolute" }}
            width={width}
            height={height}
            gravity={0.005}
            numberOfPieces={100}
          />
        )}
        <span className="inline-block text-red-400 pb-4">
          {greeting}
          <br />
          <span className="inline-block py-4 text-red-300 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
            {title}
          </span>
          <br />
          <span className="inline-block text-stone-400 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
            {description}
          </span>
        </span>
        <div className="grow" />
        <div className="h-40 w-40 drop-shadow-lg" style={{ minWidth: "10rem" }}>
          <Portrait />
        </div>
      </div>
      {children}
    </>
  );
}
