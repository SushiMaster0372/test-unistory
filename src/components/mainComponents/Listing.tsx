import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/types";
import MySubtitle from "../UI/MySubtitle/MySubtitle";

interface ListingProps {
  users: IUser[];
  createdUser: IUser;
  removeNewUser: (id: number) => void;
}

const Listing: FC<ListingProps> = ({
  users,
  createdUser,
  removeNewUser,
}: ListingProps) => {
  const navigate = useNavigate();

  return (
    <div className="listing-wrapper">
      <h3>Participation listing (enable only for participants)</h3>
      <div className="listing">
        <table>
          <tr>
            <th>
              <MySubtitle>Name</MySubtitle>
            </th>
            <th>
              <MySubtitle>Email</MySubtitle>
            </th>
            <th>
              <MySubtitle>Wallet</MySubtitle>
            </th>
          </tr>
          {users.map((userItem) => (
            <tr
              onClick={() =>
                userItem.id !== createdUser.id &&
                navigate(`/user/${userItem.id}`)
              }
              className={userItem.id !== createdUser.id ? "user-item" : ""}
              key={userItem.id}
            >
              <td>{userItem.username}</td>
              <td>{userItem.email}</td>
              <td>{userItem.address}</td>
              {createdUser.id !== 0 && userItem.id === createdUser.id && (
                <td onClick={() => removeNewUser(userItem.id)}>
                  <i className="fa-solid fa-xmark"></i>
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Listing;
