import { useContext, useEffect, useState } from "react";
import { UserContextToken } from "../../Context/UserContext";
import { useRequestUser } from "../../hook/api";
import { Line } from "react-chartjs-2"

import { Container } from "./styles";


export function Task({ color }: any) {

    const { getTask } = useRequestUser();
    const { token } = useContext(UserContextToken);

    const [task, setTask] = useState([]);
    const [graphTask, setGraphTask] = useState([]);
    const [indexGraph, setIndexGraph] = useState([]);

    useEffect(() => {
        getTask(token).then(response => {
            setTask(response)
            const result = response.map((item: any) => {
                const [day] = new Intl.DateTimeFormat("pt-br").format(new Date(item.created_at)).split("/");
                const [day2] = new Intl.DateTimeFormat("pt-br").format(new Date()).split("/");
                if (day === day2) {

                    if (item.status) {
                        return item.status * 5;
                    } else if (!item.status) {
                        return item.status - 1;
                    }
                }
                return undefined;
            }).filter((item: any) => {

                return item
            })
            setGraphTask(result);

            const index = result.map((item: any, index: number) => {
                return index + 1;
            })
            setIndexGraph(index)
        });

    }, [token, setTask, getTask]);

    const data = {
        labels: indexGraph,
        datasets: [
            {
                label: "The Tasks",
                data: graphTask,
                fill: false,
                backgroundColor: "#ffd166",
                borderColor: "#00afb9"
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    }
                }
            ]
        }
    }

    return (
        <Container color={color}>

            {token && (
                <>
                    <div className="graph-main">
                        <Line
                            data={data}
                            options={options}
                            width={1000}
                            height={300}
                        />
                    </div>

                    <div className="tasks_completed">
                        <h3>Tasks completed</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    task.map((response: any) => {
                                        const [day] = new Intl.DateTimeFormat("pt-br").format(new Date(response.created_at)).split("/");
                                        const [compareDay] = new Intl.DateTimeFormat("pt-br").format(new Date()).split("/");
                                        if (day === compareDay) {
                                            return response.status && (
                                                <tr key={response.id}>
                                                    <td>{response.task}</td>
                                                    <td>
                                                        {
                                                            new Intl.DateTimeFormat('pt-BR',
                                                                { timeZone: 'UTC' })
                                                                .format(new Date(response.created_at))
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        return (
                                            <></>
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                    </div>


                    <div className="tasks_not_completed">
                        <h3>Tasks Not complete</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    task.map((response: any) => {
                                        const [day] = new Intl.DateTimeFormat("pt-br").format(new Date(response.created_at)).split("/");
                                        const [compareDay] = new Intl.DateTimeFormat("pt-br").format(new Date()).split("/");
                                        if (day === compareDay) {
                                            return !response.status && (
                                                <tr key={response.id}>
                                                    <td>{response.task}</td>
                                                    <td>
                                                        {
                                                            new Intl.DateTimeFormat('pt-BR',
                                                                { timeZone: 'UTC' })
                                                                .format(new Date(response.created_at))
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        return (
                                            <></>
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                    </div>
                </>
            )}

        </Container>
    )
}