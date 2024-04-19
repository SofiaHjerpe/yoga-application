import React from 'react'
interface IImageProps {
    altAtr: string; 
    source: string;
    className: string;
}
export const Image = ({altAtr, source, className}: IImageProps) => {
  return <img className={className} src={source} alt={altAtr} />;
}

