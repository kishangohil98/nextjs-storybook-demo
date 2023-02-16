import React from "react";
import Image from "next/image";
import css from "../styles/Home.module.css";

const Logo = ({ src, width }: { src: string; width: number }) => {
  return <img src={src} alt="image" width={width} className={css.logo} />;
};

export default Logo;
