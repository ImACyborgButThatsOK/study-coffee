import styled from "styled-components";

export const Container = styled.div`
    width: 1120px;
    height: calc(100vh - 20rem);
    margin: 4rem auto;


    display: flex;
    justify-content: space-between;

    .text-about{
        width: 600px;

        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5rem;
        line-height: 3rem;
        color: white;

    }
    img{
        margin-top: 1.5rem;
        border-radius: 0.5rem;
        width: 450px;
        height: 350px;
    }

`