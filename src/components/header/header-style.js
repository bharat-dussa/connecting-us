import  styled  from 'styled-components';

export const HeaderStyled = styled.div`
    display:flex;
    justify-content: space-around;
    padding:14px;
    background-color: white;
    border-bottom:0.1px solid lightgray;
    .header_left {
        display: flex;
        align-items: center;
        align-self: center;
        text-align: center;
        gap:5px;

        .HeaderLogo {
            color: #0a66c2;
        }
        .header_search {
            display: flex;
            align-items: center;
            border-radius: 5px;
            height:22px;
            color:gray;
            background-color: #eef3f8;
            padding:10px;
            input {
                outline:none;
                border:none;
                background: none;
            }
        }
    }
    .header_right{
        display: flex;
        gap:30px;
    }
`;