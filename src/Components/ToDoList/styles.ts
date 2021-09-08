import styled from "styled-components";


export const Container = styled.div`
         width:100%;
         margin-right: 3rem;

    .header-to-do-list{
        
        position: relative;
        background-color:${(props: any) => (props.color === "activeColor" ? '#6d466b' : "#353535")} ;
        padding: 30px 40px;
        color: white;
        text-align: center;
        border-radius: 0.5rem;
        
        h2{
        margin-bottom:1rem;

        }
        &::after{
            content: "";
            display: table;
            clear: both;
        }

        input{
            margin: 0;
            border: none;
            border-radius: 0;
            width: 75%;
            padding: 10px;
            float: left;
            font-size: 16px;
            margin-bottom: 0.5rem;
        }
        .error-input{
            position: absolute;
            bottom: 0.8rem;
            left: 2.5rem;

            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            font-size: 1rem;
            color: crimson;

        }

        .addBtn{
            padding: 10px;
            width: 25%;
            background: #d9d9d9;
            color: #555;
            float: left;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            border-radius: 0;

            &:hover{
                background-color: #bbb;
            }
        }
    }  

    .toDoList{
        
        background-color: #ced4da;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        width: 100%;
        height: 80px;
        border: 1px solid #bbb;


        .complete_task{
        margin-top:1rem;

        position: absolute;
        height: 70px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: filter 0.2s ease-in;

        img{
            
            position: absolute;
            left: -1.5rem;
            top: -3rem;
            width: 40px;
            height: 40px;

         
        }
        &:hover{
                filter: brightness(0.8);
            }
    }

        h3{
            position: relative;
            top: 2rem;
            margin-left: 4rem;

            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            color: #333333;
        }

       div{
        a{
            position: relative;
            top: -2rem;
            cursor: pointer;
            

         img{
             width: 40px;
             height: 40px;
         }
     }
       }
    }

 
`;
