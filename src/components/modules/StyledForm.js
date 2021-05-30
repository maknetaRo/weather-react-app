import styled from 'styled-components';
import { FormButton } from './Buttons';
const Input = styled.input`
  font-size: 1.1rem;
  padding: 0.75rem 0.45rem;
  border-radius: 5px 0 0 5px;
  border: 1px solid #68e1fd;
  outline: 0;
  color: rgb(36, 40, 91);
  width: 60%;
`;

const Label = styled.label`
  font-size: 1.1rem;
  padding: 0.5rem;
  color: #68e1fd;
  font-weight: bold;
  padding-left: 0.25rem;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 1rem;
  width: 100%;
  padding-right: 2rem;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 1rem 0;
  align-items: left;
  justify-content: center;
  transform: translateY(40%);
  &:hover {
    opacity: 0.9;
  }
`;

const StyledForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Label>{props.city}</Label>
      <Row>
        <Input
          value={props.value}
          onChange={props.onChange}
          autoComplete="address-level2"
        />
        <FormButton>{props.submit}</FormButton>
      </Row>
    </Form>
  );
};

export default StyledForm;
