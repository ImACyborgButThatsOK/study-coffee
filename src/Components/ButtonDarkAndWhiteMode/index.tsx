import { Container } from "./styles";

import ImgDarkMode from "../../img/nightMode.png"
import ImgLightMode from "../../img/lightMode.png"
export function ButtonDarkAndWhiteMode({ colorButton }: any) {
    const { color, setColor } = colorButton;
    return (
        <Container onClick={() => {
            if (!color) {
                setColor("activeColor");
            } else {
                setColor("");
            }
        }}>
            {
                color ? <img src={ImgLightMode} alt="" /> : <img src={ImgDarkMode} alt="" />
            }
        </Container>
    )
}