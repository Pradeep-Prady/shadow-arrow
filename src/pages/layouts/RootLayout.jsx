import React from "react";
import Header from "../../components/HeaderAndFooter/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../components/HeaderAndFooter/Footer/Footer";
import MenuBar from "../../components/HeaderAndFooter/Header/MenuBar";
import { useSelector } from "react-redux";
import Modal from "../../components/General/UI/Modal";

const RootLayout = () => {
  const isOpen = useSelector((state) => state.ui.showMenuBar);
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Modal isOpen={isOpen}>
        <MenuBar />
      </Modal>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
