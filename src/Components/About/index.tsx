import { Container } from "./styles";
import ImgStudyAbout from "../../img/studyAbout.gif"

export function About({ color }: any) {
    return (
        <>

            <Container color={color}>

                <div className="text-about">

                    <h2>About</h2>

                    <p>This is my first project as a programmer
                        It's a simple and dumb application but it was made with a lot of effort and
                        I feel satisfied with the result the project is far from being completed but
                        this one and the first version I will update as I learn.</p>

                </div>

                <img src={ImgStudyAbout} alt="" />

            </Container>
        </>
    )
}