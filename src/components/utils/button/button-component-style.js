import styled from "styled-components";

export const IconContainer = styled.div`
  .photo_container {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    border-radius: 12px;
    p {
      margin-left: 10px;
      font-weight: 600;
    }

    .blue {
      color: blue;
    }
    :hover {
      background-color: whitesmoke;
    }
  }
`;
