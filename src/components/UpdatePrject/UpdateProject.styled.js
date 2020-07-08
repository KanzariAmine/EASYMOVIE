import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 60%;
  max-width: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #f7f7f7;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
  text-align: center;
`;
export const Form = styled.form`
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 30px 40px;
`;
export const FormControl = styled.div`
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
  label {
    display: inline-block;
    margin-bottom: 5px;
  }
  input,
  textarea {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    font-size: 14px;
    width: 100%;
    padding: 10px;
    outline-color: #f37335;
  }
`;

export const Textarea = styled.textarea`
  height: 100px;
`;

export const Button = styled.button`
  background-color: #f37335;
  border: 2px solid #f37335;
  border-radius: 4px;
  color: #eee;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: inherit;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
`;
