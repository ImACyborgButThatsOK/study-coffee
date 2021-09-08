import styled from "styled-components";


export const Container = styled.main`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;

    width: 1120px;
    height: calc(100vh - 5rem);
    border-radius: 0.5rem;


    color: ${(props) => props.color ? "#000000" : "#ffff"};
    .tasks_completed{
        position: absolute;
        left: 2rem;
        bottom: 2rem;
        height: 350px;

        h3{
            margin-bottom: 1rem;
            text-align: center;

            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            font-size: 1.5rem;
        }

        table {
        width: 400px;
        margin: 0%;
        padding:0%;
    }

    table td, th{
        padding: 1rem;
    }

    table th,td{
        border: 1px solid #8e9aaf;
        
    }
 
    }
    .tasks_not_completed{
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        height: 350px;
        
        h3{
            margin-bottom: 1rem;
            text-align: center;

            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            font-size: 1.5rem;
        }

        table {
        width: 400px;
        margin: 0%;
        padding:0%;
    }

    table td, th{
        padding: 1rem;
    }

    table th,td{
        border: 1px solid #8e9aaf;
        
    }
 
    }

    .graph-main{
        width: 80%;
        height: 270px;
        margin: 0 auto;
     
    }
`;