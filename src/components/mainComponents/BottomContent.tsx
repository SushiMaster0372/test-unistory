import React, { FC, useState } from "react";
import { IUser } from "../../types/types";
import Listing from "./Listing";
import Registration from "./Registration";

interface BottomContentProps {
  users: IUser[];
  createNewUser: (user: IUser) => void;
  createdUser: IUser;
  removeNewUser: (id: number) => void;
}

const BottomContent: FC<BottomContentProps> = ({
  users,
  createNewUser,
  createdUser,
  removeNewUser,
}: BottomContentProps) => {
  const [isRegistrated, setIsRegistrated] = useState<boolean>(false);

  return (
    <div className="bottom">
      <Registration
        isRegistrated={isRegistrated}
        setIsRegistrated={setIsRegistrated}
        createNewUser={createNewUser}
        createdUser={createdUser}
      />
      {isRegistrated && (
        <Listing
          users={users}
          createdUser={createdUser}
          removeNewUser={removeNewUser}
        />
      )}
    </div>
  );
};

export default BottomContent;
