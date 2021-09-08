import styled from "styled-components";

export const Container = styled.main`
    margin-top: 2rem;
    width: 1120;
    height: calc(100vh - 15rem);

    display: flex;
    justify-content: center;

    .main-content{
            width: 1120px;

            display: flex;
            justify-content: space-between;
            div{

                margin: 0 auto;
            }

            img{
            margin-top: 3.5rem;
            margin-left: 2rem;
            width: 500px;
            height: 400px;
            border-radius: 1.5rem;
            }

            h2{

                font-family: 'Courier New', Courier, monospace;
                font-weight: bold;
                font-size: 2rem;
                color: #f4f3ee;
            }
        }

   
`;