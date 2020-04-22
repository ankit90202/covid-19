import React from "react";
import styled from "styled-components";
import loading from "../../utils/loading.gif";

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 150px;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <img src={loading} alt="" />
    </StyledLoader>
  );
};

export default Loader;
