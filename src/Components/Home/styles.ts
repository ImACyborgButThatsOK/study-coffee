import styled from "styled-components";

export const Container = styled.div`

        margin: 5rem auto;
        width: 1120px;
        display: flex;
        justify-content: space-between;


        img{
            border-radius: 1rem;
            width: 400px;
            height: 600px;
        }

        .text-content{
            margin-top: 8rem;
            h2{
                font-family: 'Courier New', Courier, monospace;
                font-size: 3rem;
                font-weight: bold;
                color: white;
            }
            span{
                color: #219ebc;
            }
            .click-here{
                line-height: 5rem;
                font-family: 'Courier New', Courier, monospace;
                font-size: 2rem;
                font-weight: bold;

                a{
                    text-decoration: none;

                    margin-left: 1rem;
                    width: 100px;
                    padding: 0.5rem;
                    background-color: transparent;
                    border: 2px solid #219ebc;

                    font-family: 'Courier New', Courier, monospace;
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: #219ebc;
                    cursor: pointer;
                    &:hover{
                    color: #48cae4;
                    border: 2px solid #48cae4;
                    }             
                }
            }
        }

`;