import React from "react";
import styled from "styled-components";

const SiderBarStatus = ({ status, views }) => {
  return (
    <SiderBarStatusSection>
      <div className="siderbar_status">{status}</div>
      <div className="siderbar_views">{views}</div>
    </SiderBarStatusSection>
  );
};

export default SiderBarStatus;

export const SiderBarStatusSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding:10px;
  cursor: pointer;
  .siderbar_status{
      color:rgba(0,0,0,0.6);
  }
    .siderbar_views{
        color:#0a66c2;
        font-weight:600;
    }

    :hover{
        background-color: whitesmoke;
    }
`;
