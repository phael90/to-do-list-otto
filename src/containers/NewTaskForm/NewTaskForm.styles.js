import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const StyledLabel = styled.form`
  padding: 8px 0;
  @media (max-width: 400px) {
    padding: 0;
    width: 100%;
    text-align: left;
  }
`;

const StyledInput = styled.input`
  margin: 8px;
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
`;

export { StyledForm, StyledLabel, StyledInput, StyledButton };
