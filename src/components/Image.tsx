import { DetailedHTMLProps } from "react";

export const Image: React.FC<DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>> = 
(props: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>) => {
  return (
    <img {...props} src={(!props.src?.includes(".svg") && process.env.NODE_ENV !== "development") ? props.src + ".webp" : props.src}/> 
  )
}
  
export default Image;