import styled from "styled-components";

export default styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 0 40px;
  max-width: ${(props) => props.theme.devices.lg}px;

  ${(props) => props.theme.breakpoints.md} {
    width: 95%;
    padding: 0 20px;
  }

  ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
  }
`;
