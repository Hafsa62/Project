import React, { useContext } from "react";
import Menu from "../../components/menu";
import Herosec from "../../components/herosec";
import Footer from "../../components/footer";
import Card from "../../components/card";

import Contact from "../../components/contactform";
import { counterContext } from "../Contex/counterContext";


function index() {
  const {count, setCount
   } = useContext(counterContext);
  return (
    <div>
      <h1>
        {count}
      </h1>
      <Menu />
      <Herosec />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;
