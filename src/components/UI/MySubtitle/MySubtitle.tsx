import React, { FC, PropsWithChildren } from "react";
import cl from "./MySubtitle.module.scss";

const MySubtitle: FC<PropsWithChildren> = ({ children }) => {
  return <span className={cl.subtitle}>{children}</span>;
};

export default MySubtitle;
