import axios from "axios";

interface IAddUserInput {
    username: string;
    email: string;
    password: string;
}

type LoginInput = Omit<IAddUserInput, "username">;

async function addUser({ username, email, password }: IAddUserInput) {

    await axios.post("http://localhost:3001/user/register", {
        username,
        email,
        password
    })
}

async function loginUser({ email, password }: LoginInput) {

    const response = await axios.post("http://localhost:3001/user/login", {
        email,
        password
    })

    return response.data;

}


async function addTask(task: string, token: string) {

    await axios.post("http://localhost:3001/task/register", {
        task
    }, { headers: { token } });
}

async function getTask(token: string) {

    try {
        if (token) {

            const response = await axios.get("http://localhost:3001/tasks",
                { headers: { token } });

            return response.data;
        } else {
            return []
        }
    } catch (error) {
        console.error(error);
    }
}


async function deleteTask(id: string, token: string) {
    await axios.delete("http://localhost:3001/delete/task/" + id,
        { headers: { token } });

}

async function updateTask(id: string, token: string, task: string) {
    await axios.put("http://localhost:3001/put/task/" + id, {
        task
    }, { headers: { token } });
}


async function updatedStatusTask(id: string, token: string, status: boolean) {
    await axios.put("http://localhost:3001/put/status/task/" + id,
        { status },
        { headers: { token } })
}

async function updatedTaskNotCompleted(id: string, token: string, task_not_completed: boolean) {
    await axios.put("http://localhost:3001/put/task_not_completed/" + id,
        { task_not_completed },
        { headers: { token } })
}



export function useRequestUser() {

    return {
        addUser,
        loginUser,

        addTask,
        getTask,

        deleteTask,
        updateTask,
        updatedStatusTask,
        updatedTaskNotCompleted

    }
}