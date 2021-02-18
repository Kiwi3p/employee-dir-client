import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListNames from "./components/ListNames.js";
import AddName from "./components/AddName";
import NameDetail from "./components/NameDetail";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages";
import List from "./pages/list";
import Add from "./pages/add";
import EditName from "./components/EditName";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "./components/Dropdown.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/names" component={List} />
          <Route exact path="/names/add" component={Add} />
          <Route exact path="/names/:id" component={NameDetail} />
          <Route exact path="/names/:id/edit" component={EditName} />
        </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
