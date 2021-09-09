import { Container } from "./styles"
import ImgCoffeeHome from "../../img/coffeeHome.jpg"
import { Link } from "react-router-dom"

export function Home({ color }: any) {
    return (
        <>
            <Container color={color}>

                <div className="text-content">
                    <h2>
                        <span>Study</span> and listen to music,
                        <span> manage</span> your <span>tasks</span> simply over <span>coffee</span>
                    </h2>
                    <span className="click-here">
                        Click here to
                        <Link to="/tasks" >start</Link>
                    </span>
                </div>

                <img src={ImgCoffeeHome} alt="" />

            </Container>
        </>
    )
}