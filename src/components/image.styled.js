import styled from "@emotion/styled";
import React from "react";
import Img from "gatsby-image";

const StyledImg = styled(Img)`
  max-width: 960px;

  &:hover {
    div + img {
      opacity: 1 !important;
      transition: none !important;
    }

    img + picture > img {
      opacity: 0 !important;
    }

    span: {
      opacity: 1 !important;
    }
  }
`;

export const TestComponent = styled.div`
width: 100%;
height: 100px;
background: red;

`;

export default StyledImg;