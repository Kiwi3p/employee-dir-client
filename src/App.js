import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListNames from "./components/ListNames.js";
import AddName from "./components/AddName";
import NameDetail from "./components/NameDetail";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AutoComplete from "./components/AutoComplete";
import EditName from "./components/EditName";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AutoComplete />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/names" component={ListNames} />
          <Route exact path="/names/add" component={AddName} />
          <Route exact path="/names/:id" component={NameDetail} />
          <Route exact path="/names/:id/edit" component={EditName} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
