import styled from "styled-components";

const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0 5px 5px 0;
  outline: transparent;
  border: 1px solid mediumvioletred;
  background: mediumvioletred;
  color: white;
  cursor: pointer;
  width: 35%;
`;

const Input = styled.input`
  font-size: 1.1rem;
  padding: 0.45rem;
  border-radius: 5px 0 0 5px;
  border: 1px solid mediumvioletred;
  outline: 0;
  color: mediumvioletred;
  width: 60%;
`;

const Label = styled.label`
  font-size: 1.1rem;
  padding: 0.5rem;
  color: mediumvioletred;
  font-weight: bold;
  padding-left: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: calc(400px - 10%);
  margin: 5rem auto 1rem;
  align-items: center;
  justify-content: center;
`;

const StyledForm = (props) => {
  console.log(props);
  return (
    <Form onSubmit={props.onSubmit}>
      <Label>{props.city}</Label>
      <Row>
        <Input value={props.value} onChange={props.onChange} />
        <Button>{props.submit}</Button>
      </Row>
    </Form>
  );
};

export default StyledForm;
