import { DetailedHTMLProps } from "react";

export const Image: React.FC<DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>> = 
(props: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>) => {
  const src = props.src;
  const webpSrc = src?.replace(/\.(png|jpe?g|gif)$/i, '.webp');
  
  return (
    <img
      {...props}
      src={(!src?.includes('.svg') && !import.meta.env.DEV)
        ? webpSrc
        : src}
    />
  );
};
  
export default Image;