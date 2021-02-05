import Logo from "./Logo";
import theme from "constants/theme";
import styled from "styled-components";

export default function Loader({ show }) {
  return (
    <Overlay show={show}>
      <Logo link={false} fill={theme.colors.blue.dark} />
    </Overlay>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  background-color: ${(props) => props.theme.colors.orange.medium};
`;
