import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  overflow-y: auto;
  padding: 100px;
`;
export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: #c68400;
`;
export const CardBody = styled.div`
  margin: 15px;
`;
