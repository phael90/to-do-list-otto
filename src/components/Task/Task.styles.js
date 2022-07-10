import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HiddenTaskCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 16px;
  height: 16px;
  :hover {
    cursor: pointer;
  }
`;

const VisibleTaskCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${(props) => (props.checked ? "green" : "grey")};
  border-radius: 3px;
  margin: 3px 3px 3px 4px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
`;

const CheckboxContainer = styled.div`
  display: flex;
  padding: 16px 0;
`;

export {
  HiddenTaskCheckbox,
  VisibleTaskCheckbox,
  CheckboxContainer,
  StyledIcon,
};
