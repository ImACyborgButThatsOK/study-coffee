import styled from "styled-components";

export const Container = styled.form`
    padding: 4rem;
    color: #d8d8d8;
    label{
        display: block;
        margin: 1rem 0 0.5rem 0 ;

        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 1.1rem;

    }
    input{
        width: 100%;
        padding: 1rem 0 1rem 0.2rem;
        display: block;
        border: 1px solid #adb5bd;
    }
    button{
        margin-top: 2rem;
        width: 100%;
        padding: 1rem;
        color : #000000;

        border: 1px solid #212529;

        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 1.3rem;

        &:hover {
            filter: brightness(0.8)
        }

        cursor: pointer

    }

    span{
        background-color: #f94144;
    }
    .error-username{
        position: absolute;
        padding: 1rem;
        border-radius: 0.3rem;
        top: 15rem;
        right: 1rem;
        color: #ffffff;
    }
    

    .error-email{
        position: absolute;
        padding: 1rem;
        border-radius: 0.3rem;
        top: 21rem;
        right: 3.5rem;
        color: #ffffff;
    }
  

    .error-password{
        position: absolute;
        padding: 1rem;
        border-radius: 0.3rem;
        top: 26.5rem;
        right: 1rem;
        color: #ffffff;
    }
  
  
`;