import styled from "styled-components";
import { Form, Field } from "formik";

const StyledForm = styled(Form)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  padding: 8px 0;
  @media (max-width: 400px) {
    padding: 0;
    width: 100%;
    text-align: left;
  }
`;

const StyledInput = styled(Field)`
  margin: 8px 0;
  @media (max-width: 400px) {
    margin: 8px 0;
    width: 100%;
  }
`;

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: #2d8659;
  padding: 8px 16px;
  color: white;
  border: 1px solid #206040;
  cursor: pointer;

  :hover {
    background-color: #206040;
  }
  :disabled {
    background-color: #8c8c8c;
    cursor: auto;
  }
`;

const StyledErrorMessage = styled.span`
  padding-bottom: 8px;
  color: red;
  font-size: 14px;
`;

export {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
};
