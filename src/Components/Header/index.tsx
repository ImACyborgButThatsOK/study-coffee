/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { Link } from "react-router-dom"
import { Container } from "./styles";


import { NewUserRegister } from "../NewUserRegister";
import { LoginUser } from "../LoginUser";

import { UserContextToken } from "../../Context/UserContext";

import ImgLogo from "../../img/logo.gif";

export function Header({ color, modalProps }: any) {
    const { token } = useContext(UserContextToken);
    const {
        isModal,
        isModalLogin,
        handleOpenModal,
        handleCloseModal,
        handleOpenModalLogin,
        handleCloseModalLogin } = modalProps;

    return (
        <>
            <Container color={color}>
                <h1>Study With Coffe And Music</h1>
                <img src={ImgLogo} alt="logo site study with coffe" />

                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/tasks">Tasks</Link>
                        <Link to="/graph">Graph</Link>
                        {/* <Link to="/music">Music</Link> */}
                        {/* <Link to="/about">About</Link> */}
                        {
                            !token && (
                                <>

                                    <a href="#"
                                        className="user-sign-in"
                                        onClick={handleOpenModal}
                                    >Sign In
                                    </a>

                                    <a
                                        href="#"
                                        className="user-login"
                                        onClick={handleOpenModalLogin}>
                                        Login
                                    </a>
                                </>
                            )
                        }
                    </ul>
                </nav>
            </Container>

            <NewUserRegister modalProps={{ isModal, handleCloseModal }} />

            <LoginUser modalLoginProps={{ isModalLogin, handleCloseModalLogin }} />
        </>
    )
}