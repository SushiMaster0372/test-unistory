import React, { FC, useState } from "react";
import { IUser } from "../../types/types";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MySubtitle from "../UI/MySubtitle/MySubtitle";

interface RegistrationProps {
  isRegistrated: boolean;
  setIsRegistrated: (value: boolean) => void;
  createNewUser: (user: IUser) => void;
  createdUser: IUser;
}

const Registration: FC<RegistrationProps> = ({
  isRegistrated,
  setIsRegistrated,
  createNewUser,
  createdUser,
}: RegistrationProps) => {
  const [entry, setEntry] = useState({
    username: "",
    email: "",
    address: "",
  });

  const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, username: e.target.value });
  };
  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, email: e.target.value });
  };

  const getAccessToUserList = () => {
    if (!entry.username || !entry.email) {
      alert("Please fill the form");
    } else {
      setIsRegistrated(true);
    }
  };

  return (
    <div className="registration">
      <h3>Beta test registration</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="name-input">
        <div className="input__subtitle">
          <MySubtitle>Name</MySubtitle>
        </div>
        {!isRegistrated ? (
          <MyInput
            value={entry.username}
            onChange={changeNameInput}
            placeholder="We will display your name in participation list"
            type="text"
          />
        ) : (
          <h3>{entry.username}</h3>
        )}
      </div>
      <div className="email-input">
        <div className="input__subtitle">
          <MySubtitle>Email</MySubtitle>
        </div>
        {!isRegistrated ? (
          <MyInput
            value={entry.email}
            onChange={changeEmailInput}
            placeholder="We will display your email in participation list"
            type="text"
          />
        ) : (
          <h3>{entry.email}</h3>
        )}
      </div>
      {!isRegistrated ? (
        <MyButton onClick={() => getAccessToUserList()}>
          Get early access
        </MyButton>
      ) : (
        <div className={createdUser.username ? "not-active" : ""}>
          <MyButton
            isDisabled={createdUser.username ? true : false}
            onClick={() => createNewUser({ ...entry, id: Date.now() })}
          >
            List me to the table
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default Registration;
