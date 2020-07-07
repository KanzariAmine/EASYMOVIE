import styled from "styled-components";

export const Navigation = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffc107;
  nav {
    display: flex;

    justify-content: space-between;
    padding: 20px;
  }

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
