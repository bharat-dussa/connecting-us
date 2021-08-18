import styled from "styled-components";

export const FeedContainer = styled.div`
  /* margin-left: ; */

  flex: 0.6;
  margin: 0 20px;
  .feed_container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 0.1px solid lightgray;
    background-color: white;
    border-radius: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
    z-index: 4;
    padding: 10px;

    .avatar_logo {
      width: 3.5rem;
      height: 3.5rem;
      fill: green;
    }
    .search_input {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      form {
        margin-left: 10px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button{
          border: none;
          height:10px;
          margin:5px;
          align-items: center;
          display: flex;
          color: #0a66c2;
          font-size: 20px;
          background: none;
          opacity: 0;
          transition: opacity 0.2s ease-in;
          cursor: pointer;
        }
        input {
          padding: 19px;
          width: 90%;
          border-radius: 3rem;
          border: 0.1px solid gray;
          /* opacity: 50%; */
          color: black;
          outline: none;
          font-weight: 600;
          font-size: 18px;

          :focus + button {
            display: flex;
            opacity: 1;
          }
        }
      }
    }

    .sub_section_div {
      display: flex;
      justify-content: space-between;
      /* gap:40px; */
    }
  }
`;
