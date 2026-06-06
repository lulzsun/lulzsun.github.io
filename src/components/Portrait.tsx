import { useState, useEffect } from "react";
import Image from "../components/Image";

export const Portrait: React.FC = () => {
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const todaysDate = new Date();
    setIsBirthday(todaysDate.getMonth()+1 === 4 && todaysDate.getDate() === 7);
  }, []);

  return (
    <div className="relative">
      <Image alt="a picture of jimmy" className="relative h-40 max-w-none rounded-full overflow-hidden" src={"/linkedin-profilepic.jpg"}/> 
      {isBirthday && <Image alt="party hat on top of jimmy" className="absolute -top-9 left-14" src="/partyhat.svg" width="42"/>}
      {/* src={"https://avatars.githubusercontent.com/u/28168454?v=4"}/> */}
    </div>
  )
}

export default Portrait;