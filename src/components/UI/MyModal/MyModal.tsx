import React, { FC, PropsWithChildren } from "react";
import classes from "./MyModal.module.scss";

interface MyModalProps extends PropsWithChildren {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
