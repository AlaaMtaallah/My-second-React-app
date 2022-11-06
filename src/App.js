import React from "react";
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ProfilePhoto from "./Profile/ProfilePhoto.js";
import FullName from "./Profile/FullName.js";
import Address from "./Profile/Address.js";
import { Container } from "react-bootstrap";

const App = () =>{
  return(
    <>
    <Header />
    <Container>
      <FullName />
      <ProfilePhoto />
      <Address />
    </Container>
    <Footer />
    </>
  );
}

export default App;