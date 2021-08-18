import React from "react";
import { Container } from "./layout-styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import SideBar from "../sidebar/sidebar-component";
import FeedComponent from "../main-content";
import LoginComponent from "../account/login-component";

const LayoutOfTheApp = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {!user ? (
        <LoginComponent />
      ) : (
        <Container>
          <div className="container">
            <SideBar />
            <FeedComponent />
            <div className="end"></div>
          </div>
        </Container>
      )}
    </>
  );
};

export default LayoutOfTheApp;
