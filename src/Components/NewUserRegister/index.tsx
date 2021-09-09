import { useState, FormEvent } from "react";
import { useForm } from "react-hook-form"
import Modal from "react-modal";
import { useRequestUser } from "../../hook/api";
import { Container } from "./styles";

Modal.setAppElement("body");

interface InputForm {
    username: string;
    email: string;
    password: string;
}

export function NewUserRegister({ modalProps }: any) {

    const { isModal, handleCloseModal } = modalProps;

    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputForm>();

    const username = watch("username")
    const email = watch("email")
    const password = watch("password")

    const { addUser } = useRequestUser();

    async function onsubmit() {
        await addUser({ username, email, password });

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
                <Container onSubmit={handleSubmit(onsubmit)}>

                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        placeholder="Username..."
                        {...register("username",
                            {
                                required: true,
                                pattern: /[a-zA]/,
                                minLength: 4,
                                shouldUnregister: true
                            })}

                    />

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
                        {...register("password",
                            {
                                required: true,
                                minLength: 6,
                                shouldUnregister: true
                            })}
                    />

                    <button type="submit" >Sign In</button>


                    {/* Handling Input Errors */}
                    {
                        errors.username && (
                            <span className="error-username">
                                Enter username is required and minimum length is 4 characters.
                            </span>
                        )
                    }
                    {
                        errors.email && (
                            <span className="error-email">
                                Enter email is required or email address is invalid.
                            </span>
                        )
                    }
                    {
                        errors.password && (
                            <span className="error-password">
                                Enter password is required and minimum length is 6 characters.
                            </span>
                        )
                    }

                </Container>

            </Modal>
        </>
    )
}