import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import AddNew from "../pages/AddNew";
import styled from "styled-components";
import Detail from "../pages/Detail";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNew />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </StyledContent>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 100%;
`;
const StyledContent = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Layout;
