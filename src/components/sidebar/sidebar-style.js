import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  /* margin-top: 80px; */
  margin-left: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
  max-width: 270px;
  width: 100%;
  .avatar_logo {
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
    border: 3px solid white;
  }
  .siderbar_image {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: -30px;
      width: 100%;
      height: 60px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      object-fit: cover;
    }
  }
  .sidebar_top,
  .sidebar_bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-bottom: 0;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 10px;
    background-color: white;
  }
  .avatar_description {
    .title {
      color: black;
      font-weight: 600;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
    .sub_title {
      color: gray;
      font-size: 14px;
    }
  }

  .sidebar_status {
    margin-top: 10px;
  }

  .divider {
    margin-top: 30px;
    width: 100%;
    color: gray;
    opacity: 40%;
  }
  .sidebar_status {
    width: 100%;
  }

  .my_items {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: flex-start;
    padding: 10px;
    align-self: center;
    .bookmark_icon {
      opacity: 60%;
    }
    cursor: pointer;
    :hover {
      background-color: whitesmoke;
    }
  }

  .sidebar_bottom {
    margin-top: 2rem;
    padding: 1rem;
    text-align:left;
    align-items:flex-start;
    p{
    font-size:14px;
      text-align:left;
    }

  }
  .sidebar_bottom_recenttags{
      display: flex;
      margin:13px 0px;
      color:gray;
      cursor:pointer;
      font-weight:800;
      width:100%;
      span {
        font-size: 14px;
        /* color:gray; */
      }
      :hover{
          color:black;
      }
  }

  /* @media screen and (max-width:768px){
    .sidebar_top {
      display: flex;
      flex-direction: row;
    }
  } */
`;
