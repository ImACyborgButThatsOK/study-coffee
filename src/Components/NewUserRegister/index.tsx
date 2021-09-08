import { useState, FormEvent } from "react";
import Modal from "react-modal";
import { useRequestUser } from "../../hook/api";
import { Container } from "./styles";

Modal.setAppElement("body");

export function NewUserRegister({ modalProps }: any) {

    const { isModal, handleCloseModal } = modalProps;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const { addUser } = useRequestUser();

    async function onsubmit(event: FormEvent) {
        event.preventDefault();

        await addUser({ username, email, password });

        setUsername("");
        setEmail("");
        setPassword("");

        handleCloseModal();

    }

    return (
        <>

            <Modal
                isOpen={isModal}
                onRequestClose={handleCloseModal}
                overlayClassName="react-modal-overlay"
                className="react-modal"
            >
                <Container onSubmit={onsubmit}>

                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        placeholder="Username..."
                        onChange={(event) => setUsername(event.target.value)}
                    />

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