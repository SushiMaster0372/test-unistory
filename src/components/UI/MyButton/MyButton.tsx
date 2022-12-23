import { FC, PropsWithChildren } from "react";
import cl from "./MyButton.module.scss";

interface MyButtonProps extends PropsWithChildren {
  onClick: () => void;
  isDisabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({
  children,
  onClick,
  isDisabled,
}: MyButtonProps) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={cl.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
