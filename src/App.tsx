import { useState } from "react";
import { ButtonDarkAndWhiteMode } from "./Components/ButtonDarkAndWhiteMode";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { UserProvider } from "./Context/UserContext";

import { BrowserRouter as Router, Route, } from "react-router-dom"

import { GlobalStyles } from "./GlobalStyles";
import { Task } from "./Components/Task";
import { Home } from "./Components/Home";


function App() {
  const [color, setColor] = useState("")


  const [isModal, setIsModal] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(false);


  function handleOpenModal() {
    setIsModal(true);
  }

  function handleCloseModal() {
    setIsModal(false);
  }


  function handleOpenModalLogin() {
    setIsModalLogin(true)
  }

  function handleCloseModalLogin() {
    setIsModalLogin(false)
  }

  return (
    <Router >
      <UserProvider>
        <GlobalStyles colorButtonProps={color} />
        <Header
          color={color}
          modalProps={{
            isModal,
            isModalLogin,
            handleOpenModal,
            handleCloseModal,
            handleOpenModalLogin,
            handleCloseModalLogin
          }} />
        <Route path="/" exact>

          <Home />
        </Route>


        <Route path="/tasks" exact>
          <Main setIsModal={setIsModal} color={color} />
          <Task color={color} />
        </Route>

        <Route path="/graph" exact>
          <Task color={color} />
        </Route>



        <ButtonDarkAndWhiteMode colorButton={{ color, setColor }} />
      </UserProvider>
    </Router >
  );
}

export default App;
