import { Container } from "./styles"
import ImgCoffeeHome from "../../img/coffeeHome.jpg"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <Container>

                <div className="text-content">
                    <h2>
                        Manage your <span>tasks simply</span>
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