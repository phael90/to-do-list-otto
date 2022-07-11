import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  padding-inline-start: 0;
`;

const Container = styled.div`
  width: 30%;
  margin: auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export { Container, StyledList };
