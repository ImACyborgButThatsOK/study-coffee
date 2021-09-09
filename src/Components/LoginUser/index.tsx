import { FormEvent, useState, useContext } from "react";
import { useForm } from "react-hook-form"
import Modal from "react-modal";
import { UserContextToken } from "../../Context/UserContext";
import { useRequestUser } from "../../hook/api";
import { Container } from "./styles";


interface InputForm {
    email: string;
    password: string;
}

export function LoginUser({ modalLoginProps }: any) {

    const { setToken } = useContext(UserContextToken);
    const { isModalLogin, handleCloseModalLogin } = modalLoginProps

    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputForm>();
    const email = watch("email");
    const password = watch("password");

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const { loginUser } = useRequestUser();

    async function onSubmit() {

        await loginUser({ email, password })
            .then(response => {
                setToken(response.token);
            });

        // setEmail("");
        // setPassword("");
        handleCloseModalLogin();
    }


    return (
        <>

            <Modal
                isOpen={isModalLogin}
                onRequestClose={handleCloseModalLogin}
                overlayClassName="react-modal-overlay"
                className="react-modal"
            >

                <Container onSubmit={handleSubmit(onSubmit)}>


                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="Email..."

                        {...register("email", {
                            required: true,
                            pattern: /[a-zA]/,
                            shouldUnregister: true
                        })}

                    />

                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        placeholder="Password..."

                        {...register("password", {
                            required: true,
                            shouldUnregister: true
                        })}
                    />


                    <button type="submit">Sign In</button>


                    {/* Handling Input Errors */}

                    {
                        errors.email && (
                            <span className="error-email">
                                Email  is invalid. Please try again
                            </span>
                        )
                    }

                    {
                        errors.password && (
                            <span className="error-password">
                                Password is invalid. Please try again
                            </span>
                        )
                    }
                </Container>

            </Modal>

        </>
    )
}