import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  font-family:
  font-size: 50px;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
