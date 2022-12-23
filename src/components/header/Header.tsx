import MyButton from "../UI/MyButton/MyButton";
import "./header.scss";

interface HeaderProps {
  activate: () => void;
  account: any;
}

const Header = ({ activate, account }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="logo">Logo</div>
        {!account ? (
          <MyButton onClick={() => activate()}>Connect Metamask</MyButton>
        ) : (
          <p>{account}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
