import React, { FC } from "react";
import cl from "./MyInput.module.scss";

interface MyInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

const MyInput: FC<MyInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}: MyInputProps) => {
  return (
    <div className={cl.input}>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default MyInput;
