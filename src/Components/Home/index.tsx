import { Container } from "./styles"
import ImgCoffeeHome from "../../img/coffeeHome.jpg"


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
                        <button>start</button>
                    </span>
                </div>

                <img src={ImgCoffeeHome} alt="" />

            </Container>
        </>
    )
}