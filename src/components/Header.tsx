import Portrait from "./Portrait";
import Confetti from 'react-confetti';

interface Props {
  greeting: JSX.Element|JSX.Element[]|string,
  title: JSX.Element|JSX.Element[]|string,
  description: JSX.Element|JSX.Element[]|string,
  children?: JSX.Element|JSX.Element[]|string
}

export const Header: React.FC<Props> = ({greeting, title, description, children}) => {
  const todaysDate = new Date();
  let isBirthday = todaysDate.getMonth() === 4 && todaysDate.getDay() === 7;

  return (<>
    {/* @ts-ignore */}
    <div className="relative flex flex-row">
      {/* {isBirthday && <Confetti style={{position: 'absolute'}} width={width} height={height} gravity={0.005} numberOfPieces={100}/>} */}
      <span className="inline-block text-red-400 pb-4">
        {greeting}<br/>
        <span className="inline-block py-4 text-red-300 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">{title}</span><br/>
        <span className="inline-block text-stone-400 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
          {description}
        </span>
        {/* <span className="pl-1 text-xs text-stone-400 whitespace-pre-line">
          (where I write about stuff no one else will read)
        </span> */}
      </span>
      <div className="grow"></div>
      <div className="h-40 w-40 drop-shadow-lg" style={{"minWidth": "10rem"}}>
        <Portrait/>
      </div>
    </div>
    {children}
  </>)
}

export default Header;