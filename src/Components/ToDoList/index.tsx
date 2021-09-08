/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"

import { UserContextToken } from "../../Context/UserContext";
import { useRequestUser } from "../../hook/api";
import { Container } from "./styles";

import ImgDeleteTask from "../../img/deleteTask.png"
import ImgUpdateTask from "../../img/updateTask.png"
import ImgCheckCompleteTask from "../../img/checkCompleteTask.png"

type InputForm = {
    list: string;
    exampleRequired: string;
}

export function ToDoList({ setIsModal, color }: any) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputForm>();
    const task = watch("list");

    const { token } = useContext(UserContextToken);
    const {
        addTask,
        getTask,
        updateTask,
        updatedStatusTask,
        updatedTaskNotCompleted
    } = useRequestUser();

    const [listTask, setListTask] = useState([]);


    async function handleAddTask() {
        try {

            if (!token || !task) {
                setIsModal(true);
            } else {
                await addTask(task, token);
                await getTask(token).then(response => setListTask(response));
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTask(token).then(response => setListTask(response))
    }, [getTask, token, setListTask]);



    async function handleUpdateTask(id: string) {

        try {
            await updateTask(id, token, task);
            await getTask(token).then(response => setListTask(response))
        } catch (error) {
            console.error(error);
        }
    }

    async function handleUpdatedStatusTask(id: string, status: boolean) {

        try {
            await updatedStatusTask(id, token, status)
            await getTask(token).then(response => setListTask(response))
        } catch (error) {
            console.error(error)
        }

    }

    async function handleUpdatedTaskNotCompleted(id: string, task_not_completed: boolean) {

        try {
            await updatedTaskNotCompleted(id, token, task_not_completed)
            await getTask(token).then(response => setListTask(response))
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Container color={color}>
                <div className="header-to-do-list">
                    <h2>My To Do List</h2>
                    <input
                        type="text"
                        placeholder="Title..."
                        {...register("list", { required: true, pattern: /[a-zA]/, minLength: 3 })}
                    />
                    <span
                        className="addBtn"
                        onClick={handleSubmit(handleAddTask)}
                    >Add </span>

                    {
                        errors.list &&
                        <span
                            className="error-input"
                        >
                            This field is required or minimum 3 caracter is required
                        </span>
                    }
                </div>
                {
                    listTask.map((response: any) => {
                        return !response.status && (
                            <div key={response.id}>
                                {
                                    response.task_not_completed && (
                                        <div className="toDoList">
                                            <a
                                                className="complete_task"
                                                onClick={() => {
                                                    handleUpdatedStatusTask(response.id, true)
                                                }}
                                            >

                                                <img src={ImgCheckCompleteTask} alt="complete task" />

                                            </a>

                                            <h3>{response.task}</h3>

                                            <div>
                                                <a
                                                    onClick={() => {
                                                        handleUpdatedTaskNotCompleted(response.id, false)
                                                        handleUpdatedStatusTask(response.id, false)
                                                    }}

                                                >
                                                    <img src={ImgDeleteTask} alt="" />
                                                </a>
                                                <a

                                                    onClick={() => handleUpdateTask(response.id)}
                                                >
                                                    <img src={ImgUpdateTask} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                }


                            </div>
                        )
                    })
                }

            </Container>
        </>
    )
}