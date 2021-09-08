import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { UserContextToken } from "../../Context/UserContext";
import { useRequestUser } from "../../hook/api";
import { Container } from "./styles";


export function LoginUser({ modalLoginProps }: any) {

    const { setToken } = useContext(UserContextToken);
    const { isModalLogin, handleCloseModalLogin } = modalLoginProps

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginUser } = useRequestUser();

    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        await loginUser({ email, password })
            .then(response => {
                setToken(response.token);
            });

        setEmail("");
        setPassword("");
        handleCloseModalLogin();
    }

    // useEffect(() => {
    //     console.log(token);
    // }, [token])

    return (
        <>

            <Modal
                isOpen={isModalLogin}
                onRequestClose={handleCloseModalLogin}
                overlayClassName="react-modal-overlay"
                className="react-modal"
            >

                <Container onSubmit={onSubmit}>


                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="Email..."
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(event) => setPassword(event.target.value)}
                    />


                    <button type="submit">Sign In</button>
                </Container>

            </Modal>

        </>
    )
}