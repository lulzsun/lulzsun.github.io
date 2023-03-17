export const Portrait: React.FC = () => {
  const todaysDate = new Date();
  let isBirthday = todaysDate.getMonth() === 4 && todaysDate.getDay() === 7;

  return (
    <div className="relative">
      <img className="relative h-40 max-w-none rounded-full overflow-hidden" src={"/linkedin-profilepic.jpg"}/> 
      {isBirthday && <img className="absolute -top-9 left-14" src="/partyhat.svg" alt="some text" width="42"/>}
      {/* src={"https://avatars.githubusercontent.com/u/28168454?v=4"}/> */}
    </div>
  )
}

export default Portrait;