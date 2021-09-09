import styled from "styled-components";


export const Container = styled.header`
        overflow: hidden;
        background-color:${(props: any) => (props.color === "activeColor" ? "#c71f37" : "#0f0f0f")};
        height: 250px;
    h1{
        position: relative;
        top: 5rem;
        left: 15rem;

        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 3.5rem;
        color: ${(props: any) => (props.color === "activeColor" ? "#ffffff" : "#f8f9fa")};
    }
   
    img{
        position: relative;
        top: -2rem;
        width: 200px;
        height: 200px;

        margin-left: 1rem;
        border-radius: 0.5rem;
   }

   nav{
        
        position: relative;
        bottom: 3.5rem;
        margin-left: 15rem;

        ul{
            
            a{
            text-decoration: none;
            margin-left: 1rem;
            padding: 1rem;
            border-radius: 0.4rem;

            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            font-size: 1.2rem;
            color: white;

            &:hover{
                background-color: ${(props: any) => (props.color ? "#222222" : "#222222")};
                color: ${(props: any) => (props.color ? "#49cce4" : "#ef8354")} ;
            }
            &:first-child{
                background-color: #222222;
                color: ${(props: any) => (props.color ? "#49cce4" : "#ef8354")} ;
            }
            }
        }

        .user-sign-in{
           position: absolute;
           margin-left: 30rem;
           bottom: -1rem;
        }

        .user-login{
           position: absolute; 
           margin-left: 37rem;
           bottom: -1rem;
        }

        @media screen and (max-width:1199px){
         
            .user-sign-in{
           margin-left: 5rem;
            }

            .user-login{
                margin-left: 13rem; 
            }
        }
      
   }

   @media screen and (max-width:1144px){
            h1{
                font-size: 2.90rem;
            }
            .user-sign-in{
           margin-left: 10rem;
        }
        }
    
`;

