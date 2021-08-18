import styled from 'styled-components';

export const PostContainer = styled.div`

    background-color: white;
    padding: 1.5rem;
    margin-top: 2rem;
    border-radius: 0.6rem;

    .post_header{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        .post_description {
            margin-left: .6em;
        }
        h2 {
            font-weight: 600;
            font-size:17px;
            margin-bottom: .1rem;
        }
        p{
            font-size: 14px;
            font-style: normal;
            color: gray;
        }
    }

    .post_main_content{
        overflow-wrap: auto;
    }

    .post_buttons_section{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`;