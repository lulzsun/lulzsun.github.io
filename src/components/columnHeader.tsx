interface Props {
    titleIndex: string
}

export const ColumnHeader: React.FC<Props> = ({titleIndex}) => {
  return (
    <div className="flex flex-row pb-4">
      <span className="text-white-200 pr-1">var</span>
      <span className="text-red-400">section[</span>
      <span className="text-white-200">{titleIndex}</span>
      <span className="text-red-400 pr-1">] =</span>
      <span className="text-white-200">"</span>
    </div>
  )
}

export default ColumnHeader;