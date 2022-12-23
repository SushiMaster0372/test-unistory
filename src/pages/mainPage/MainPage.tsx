import "./mainPage.scss";
import { FC, useEffect, useState } from "react";
import { IData, IUser } from "../../types/types";
import axios from "axios";
import TopContent from "../../components/mainComponents/TopContent";
import BottomContent from "../../components/mainComponents/BottomContent";
import MyModal from "../../components/UI/MyModal/MyModal";
import MyButton from "../../components/UI/MyButton/MyButton";

interface MainPageProps {
  account: string | undefined;
}

const MainPage: FC<MainPageProps> = ({ account }: MainPageProps) => {
  const metamaskURL =
    "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";

  const initialStateOfCreatedUser = {
    id: 0,
    username: "",
    email: "",
    address: "",
  };
  const [users, setUsers] = useState<IUser[]>([]);
  const [createdUser, setCreatedUser] = useState<IUser>(
    initialStateOfCreatedUser
  );
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IData>(
        "https://new-backend.unistory.app/api/data"
      );
      setUsers(response.data.items);
    } catch (e) {
      alert(e);
    }
  }

  const createNewUser = (user: IUser) => {
    const newUser = {
      ...user,
      address: typeof account === "string" ? account.toLowerCase() : account,
    };
    const newUsers = [newUser, ...users];
    if (typeof account === "string") {
      setUsers(newUsers);
      setCreatedUser(newUser);
    } else {
      alert("You have to connect to metamask for participation");
    }
  };

  const removeNewUser = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    setCreatedUser(initialStateOfCreatedUser);
  };

  return (
    <section className="main">
      <MyModal visible={visible} setVisible={setVisible}>
        <h4 className="modal-title">Metamask Extention</h4>
        <div className="modal-description">
          <span>
            To work with our application, you have to install the{" "}
            <a target="_blank" href={metamaskURL}>
              Metamask browser extension
            </a>
          </span>
        </div>
        <div className="skip-button">
          <MyButton onClick={() => setVisible(false)}>Skip this step</MyButton>
        </div>
      </MyModal>
      <TopContent />
      <BottomContent
        users={users}
        createNewUser={createNewUser}
        createdUser={createdUser}
        removeNewUser={removeNewUser}
      />
    </section>
  );
};

export default MainPage;
