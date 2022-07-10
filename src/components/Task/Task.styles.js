import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HiddenTaskCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }
`;

const VisibleTaskCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.checked ? "#40bf80" : "#f2f2f2")};
  border-color: ${(props) => (props.checked ? "#39ac73" : "#cccccc")};
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  margin: 3px 3px 3px 4px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  width: 20px;
  height: 30px;
  color: white;
`;

const CheckboxContainer = styled.div`
  display: flex;
  padding: 8px 0;
`;

const StyledLabel = styled.label`
  line-height: 33px;
  padding: 0 16px;
`;

export {
  HiddenTaskCheckbox,
  VisibleTaskCheckbox,
  CheckboxContainer,
  StyledIcon,
  StyledLabel,
};
