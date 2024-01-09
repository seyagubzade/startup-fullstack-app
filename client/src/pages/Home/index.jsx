import React from "react";
import Hero from "./Hero";
import styled from "styled-components";
import Services from "./Services";
import About from "./About";
import Team from "./Team";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <StyledHome>
      <Helmet>
        <title>Startup-Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Hero />
      <Services />
      <About />
      <Team />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding-top: 80px;
`;

export default Home;
