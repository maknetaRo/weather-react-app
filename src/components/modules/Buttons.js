import styled from "styled-components";

export const Button = styled.button`
 font-size: 1.1rem;
  padding: 0.75rem 1.25rem;
  outline: transparent;
  border: 1px solid #68e1fd;
  background: #68e1fd;
  color: rgb(36, 40, 91);
  cursor: pointer;
  border-radius: 5px;
  letter-spacing: 2px;
`;

export const FormButton = styled(Button)` 
  border-radius: 0 5px 5px 0; 
  width: 35%;
`;


