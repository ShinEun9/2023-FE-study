import styled from "styled-components";
import React from "react";

const Button1 = styled.button`
  width: 100px;
  height: 50px;
  background: blue;
  color: white;
`;

const Button2 = styled(Button1)`
  border-radius: 20px;
  color: black;
`;

const Button3 = styled(Button1)`
  background-color: green;
  border-radius: 30px;
`;

export { Button1, Button2, Button3 };
