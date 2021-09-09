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
            margin-top: 3rem;
            h2{
                font-family: 'Courier New', Courier, monospace;
                line-height: 5rem;
                font-size: 3rem;
                font-weight: bold;
                color: ${p => p.color ? "#000000" : "#fff"};
            }
            span{
                color: ${p => p.color ? "#49cce4" : "#06d6a0"} ;
            }
            .click-here{
                line-height: 5rem;
                font-family: 'Courier New', Courier, monospace;
                font-size: 3rem;
                font-weight: bold;
                color: ${p => p.color ? "#ef476f" : "#ee6c4d"};

                a{
                    text-decoration: none;
                    
                    margin-left: 1rem;
                    padding: 0.7rem;
                    background-color: transparent;
                    border: 2px solid ${p => p.color ? "#ef767a" : "#219ebc"};

                    font-family: 'Courier New', Courier, monospace;
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: ${p => p.color ? "#ef767a" : "#1be7ff"} ;
                    cursor: pointer;
                    &:hover{
                    color: ${p => p.color ? "#d62246" : "#1be7ff"} ;
                    border: 2.5px solid ${p => p.color ? "#d62246" : "#1be7ff"};
                    }             
                }
            }
        }

`;