import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props: any) => (props.colorButtonProps === "activeColor" ? '#ffffff' : "#212529")};
    }

    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal{
        width: 470px;
        height: 500px;
        background-color: #242423;
        border-radius: 0.5rem;
        border: 1px solid #212529;

    }
`;