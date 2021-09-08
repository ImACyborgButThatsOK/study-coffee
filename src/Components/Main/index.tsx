import { Container } from "./styles";
import { ToDoList } from "../ToDoList";

import ImgMainCoffee from "../../img/MainCoffe.gif"

export function Main({ setIsModal, color }: any) {
    return (
        <>
            <Container >

                <div className="main-content">
                    <ToDoList setIsModal={setIsModal} color={color} />
                    <img src={ImgMainCoffee} alt="coffee" />
                </div>

            </Container>
        </>
    )
}