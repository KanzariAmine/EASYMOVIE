import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  border: 2px solid;
  justify-content: space-between;
  padding: 20px;

  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin: 0 15px;
    justify-content: space-between;
    font-size: 1em;
  }
  a {
    font-size: 1em;
    text-decoration: none;
    list-style-type: none;
    color: #000;
    letter-spacing: 2px;
    font-weight: 500px;
  }
`;
