import Link from "next/link";
import theme from "constants/theme";
import Logo from "components/App/Logo";
import styled from "styled-components";
import Container from "styles/Container";
import { CgMenuRight } from "react-icons/cg";
import { Fragment, useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [menuOpen]);

  return (
    <Fragment>
      <Header open={menuOpen}>
        <Container>
          <Navbar>
            <Navlinks>
              <Link href="#" passHref>
                <Navlink>About</Navlink>
              </Link>
              <Link href="#" passHref>
                <Navlink>Services</Navlink>
              </Link>
              <Link href="#" passHref>
                <Navlink>Portfolio</Navlink>
              </Link>
            </Navlinks>
            <Brand>
              <Logo fill="#11354C" />
            </Brand>
            <Action>
              <Link href="#" passHref>
                <Button>Contact Me</Button>
              </Link>
            </Action>
            <Menu onClick={() => setMenuOpen((prev) => !prev)}>
              <CgMenuRight size={25} color={theme.colors.blue.dark} />
            </Menu>
          </Navbar>
        </Container>
      </Header>
      <MobileNav open={menuOpen}>
        <MobileNavWrapper open={menuOpen}>
          <Link href="#" passHref>
            <Navlink>About</Navlink>
          </Link>
          <Link href="#" passHref>
            <Navlink>Services</Navlink>
          </Link>
          <Link href="#" passHref>
            <Navlink>Portfolio</Navlink>
          </Link>
          <Action mobile>
            <Link href="#" passHref>
              <Button>Contact Me</Button>
            </Link>
          </Action>
        </MobileNavWrapper>
      </MobileNav>
      <Main open={menuOpen}>{children}</Main>
      <Footer>
        <Container>
          <Wrapper>
            <Logo fill="#A4CFD7" />
            <Socials>
              <Social href="#">
                <FaFacebookF size={20} color="#FAF6F4" />
              </Social>
              <Social href="#">
                <FaTwitter size={20} color="#FAF6F4" />
              </Social>
              <Social href="#">
                <FaInstagram size={20} color="#FAF6F4" />
              </Social>
              <Social href="#">
                <FaLinkedinIn size={20} color="#FAF6F4" />
              </Social>
              <Social href="#">
                <FaGithub size={20} color="#FAF6F4" />
              </Social>
            </Socials>
            <Copyright>&copy; Copyright 2021 Adrian Sajjan</Copyright>
          </Wrapper>
        </Container>
      </Footer>
    </Fragment>
  );
}

const Header = styled.header`
  height: 130px;
  padding: 50px 0;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) => props.theme.colors.orange.medium};

  ${(props) => props.theme.breakpoints.sm} {
    top: 0;
    left: 0;
    width: 100%;
    position: ${(props) => (props.open ? "fixed" : "relative")};
    background-color: ${(props) => (props.open ? "#FFFFFF" : props.theme.colors.orange.medium)};
  }
`;

const Main = styled.main`
  ${(props) => props.theme.breakpoints.sm} {
    padding-top: ${(props) => (props.open ? 130 : 0)}px;
  }
`;

const Footer = styled.footer`
  padding: 40px 0 30px;
  background-color: ${(props) => props.theme.colors.blue.dark};
`;

const Wrapper = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const MobileNav = styled.nav`
  left: 0;
  top: 130px;
  z-index: 20;
  width: 100%;
  display: none;
  position: fixed;
  overflow-y: scroll;
  background-color: white;
  height: calc(100% - 130px);
  transition: 0.3s ease-in-out;

  ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.open ? 1 : 0)};
    pointer-events: ${(props) => (props.open ? "all" : "none")};
  }
`;

const MobileNavWrapper = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s ease-in-out;
  transform: translateY(${(props) => (props.open ? 0 : 50)}px);
`;

const Navbar = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Navlinks = styled.div`
  gap: 25px;
  display: flex;

  ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const Navlink = styled.a`
  display: block;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue.medium};

  &::after {
    left: 0;
    width: 0;
    height: 1px;
    content: "";
    bottom: -4px;
    position: absolute;
    transition: width 150ms ease-out;
    background-color: ${(props) => props.theme.colors.blue.medium};
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

const Brand = styled.div`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;

const Action = styled.div`
  ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.mobile ? "block" : "none")};
  }
`;

const Menu = styled.button`
  border: none;
  outline: none;
  display: none;
  cursor: pointer;
  background: none;
  margin-left: auto;

  ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

const Button = styled.a`
  color: white;
  display: block;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 15px 24px 10px;
  text-transform: uppercase;
  transition: background-color 200ms ease-in-out;
  background-color: ${(props) => props.theme.colors.orange.dark};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue.dark};
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    margin-top: 60px;
  }
`;

const Socials = styled.div`
  gap: 25px;
  display: flex;
`;

const Social = styled.a`
  text-decoration: none;
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.orange.medium};
`;
