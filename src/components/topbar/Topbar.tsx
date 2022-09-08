import style from "styled-components";
import userAvatar from "../../../public/imgs/userAvatar.png";
import Bell from "../../assets/Bell.svg";

const Avatar = style.img`
  cursor: pointer;
  object-fit: cover;
`;

const Notification = style.svg`
  cursor: pointer;
  object-fit: cover;
  &:hover > path {
    fill: #F23847;
    opacity: 1 !important;
  }
`;

const Topbar = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 20px;
`;

const TopBar = () => {
  return (
    <Topbar className="wrapper">
      <Avatar src={userAvatar} alt="avatar" />
      <Notification
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M9.23999 20.4102H14.77C14.22 21.3702 13.19 22.0002 12.01 22.0002C10.81 22.0002 9.78999 21.3702 9.23999 20.4102Z"
          fill="#A9A9A9"
        />
        <path
          opacity="0.4"
          d="M21.3199 17.19C21.3199 17.69 21.1599 18.15 20.9099 18.53C20.4799 19.16 19.7699 19.58 18.9499 19.58H5.05991C4.80991 19.58 4.56991 19.54 4.34991 19.47C3.81991 19.31 3.3799 18.98 3.0799 18.53C2.8299 18.15 2.66992 17.69 2.66992 17.19C2.66992 16.12 3.3799 15.22 4.3399 14.91C4.4899 14.87 4.6399 14.84 4.7999 14.82V10.25C4.7999 6.55 7.6199 3.51 11.2099 3.11V2.78C11.2099 2.35 11.5599 2 11.9899 2C12.4199 2 12.7699 2.35 12.7699 2.78V3.11C14.3899 3.29 15.8999 3.99999 17.0699 5.17999C18.4299 6.51999 19.1799 8.33 19.1799 10.25V14.82C20.3799 14.95 21.3199 15.96 21.3199 17.19Z"
          fill="#A9A9A9"
        />
      </Notification>
    </Topbar>
  );
};

export default TopBar;
