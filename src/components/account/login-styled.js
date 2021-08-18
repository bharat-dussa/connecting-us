import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    height: 100vh;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 30px;

        input {
            margin-top: 30px;
            height: auto;
            width: 400px;
            font-size:20px;
            padding: 10px;
            border-radius: 6px;
            border:none;
            outline-color:#0a66c2;
        }


        .login_btn {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            height:auto;
            align-items: center;
            font-size:30px;
            background-color: #0a66c2;
            border: none;
            border-radius: 6px;
            color: white;
            padding: 6px;
        }
    }
     
`;