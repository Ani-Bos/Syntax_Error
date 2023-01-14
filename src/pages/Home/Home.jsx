import React from "react";
// import Main from "../../components/Main/Main";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Feature from "../../components/Feature/Feature";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature/>
      <Footer />
    </div>
  );
};

export default Home;
