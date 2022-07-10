import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
`;

const StyledLabel = styled.form`
  padding: 8px 0;
`;

const StyledInput = styled.input`
  margin: 8px;
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
`;

export { StyledForm, StyledLabel, StyledInput, StyledButton };
