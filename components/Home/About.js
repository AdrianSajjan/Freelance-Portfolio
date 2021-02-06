import Link from "next/link";
import theme from "constants/theme";
import styled from "styled-components";
import Container from "styles/Container";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <Section>
      <Container>
        <Card color={theme.colors.brown.light}>
          <div className="cover">
            <img src="/images/tech-2.png" alt="" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h1 className="title">Already have a website but it is not converting clients?</h1>
              <p className="description">
                When building a website for your business, then goal of the business should be clear to the audience.
              </p>
              <p className="description">Some factors that can cause less than desired conversion :</p>
              <ul className="reasons">
                <li className="reason">
                  <IoClose size={20} />
                  <span>No clear goal or aim mentioned in the website</span>
                </li>
                <li className="reason">
                  <IoClose size={20} />
                  <span>Unintuitive UI or Bad UX is often the fault in landing pages.</span>
                </li>
                <li className="reason">
                  <IoClose size={20} />
                  <span>People don’t trust the services outlined by the website.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card color={theme.colors.gray.light} reverse>
          <div className="cover">
            <img src="/images/fix-1.png" alt="" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h1 className="title">Let’s solve it together.</h1>
              <p className="description">Let’s get together and solve the problems that you are facing.</p>
              <p className="description">
                My skills are not limited to Web Design, but also Web App Development, Cross Platform Mobile App Development and
                E-Commerce Development.
              </p>
              <p className="description">Find out how we can work together.</p>
              <Link href="/services" passHref>
                <a className="action">
                  <span>See Packages</span>
                  <FaArrowRight />
                </a>
              </Link>
            </div>
          </div>
        </Card>
        <Card color={theme.colors.orange.light}>
          <div className="cover">
            <img src="/profile/me-2.jpg" alt="" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h2 className="name">Hi, I'm Adrian Sajjan</h2>
              <h1 className="title">I help businesses by creating awesome Web and Mobile apps and Landing pages</h1>
              <p className="description">
                I am a Full Stack and Cross Platform Mobile app developer. I am skilled in latest technologies like React, React
                Native, Node JS etc.
              </p>
              <p className="description">
                I am a sucker for minimalism and I like creating minimalistic and powerful designs for web and mobile platform.
              </p>
              <Link href="/about" passHref>
                <a className="action">
                  <span>Learn More About Me</span>
                  <FaArrowRight />
                </a>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-top: 150px;
  padding-bottom: 120px;

  ${(props) => props.theme.breakpoints.sm} {
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;

const Card = styled.div`
  gap: 60px;
  display: flex;
  padding: 60px 0;
  position: relative;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  ${(props) => props.theme.breakpoints.sm} {
    gap: 40px;
    padding: 40px 0;
    flex-direction: column;
  }

  &:not(:first-child) {
    margin-top: 150px;

    ${(props) => props.theme.breakpoints.sm} {
      margin-top: 80px;
    }
  }

  &::after {
    top: 0;
    width: 85%;
    content: "";
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.color};
    left: ${(props) => (props.reverse ? 0 : "unset")};
    right: ${(props) => (props.reverse ? "unset" : 0)};

    ${(props) => props.theme.breakpoints.sm} {
      top: 10%;
      width: 100%;
      height: 90%;
    }
  }

  .cover {
    flex: 0.75;
    z-index: 1;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${(props) => props.theme.breakpoints.sm} {
      width: 85%;
      height: 85%;
      margin: 0 auto;
      display: block;
    }
  }

  .body {
    flex: 1.25;
    z-index: 1;
    display: flex;
    position: relative;
    flex-direction: column;

    ${(props) => props.theme.breakpoints.sm} {
      width: 85%;
    }
  }

  .inner {
    display: flex;
    max-width: 85%;
    flex-direction: column;
    align-items: flex-start;
    margin-left: ${(props) => (props.reverse ? "auto" : 0)};

    ${(props) => props.theme.breakpoints.sm} {
      max-width: 100%;
    }
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.gray.dark};
  }

  .title {
    font-size: 28px;
    font-weight: 500;
    line-height: 42px;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
    font-family: "Lora", serif;
    color: ${(props) => props.theme.colors.blue.dark};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 22px;
      line-height: 32px;
    }
  }

  .description {
    font-size: 18px;
    margin-top: 15px;
    font-weight: 300;
    line-height: 28px;
    color: ${(props) => props.theme.colors.blue.dark};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
      margin-top: 12px;
      line-height: 25px;
    }
  }

  .reasons {
    list-style: none;
    margin-top: 15px;

    ${(props) => props.theme.breakpoints.sm} {
      margin-top: 12px;
    }
  }

  .reason {
    gap: 12px;
    display: flex;
    font-size: 18px;
    margin-top: 16px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.blue.dark};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
      margin-top: 12px;
      line-height: 25px;
    }

    & > svg {
      flex-shrink: 0;
    }
  }

  .action {
    gap: 10px;
    color: white;
    display: flex;
    font-size: 15px;
    margin-top: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
    align-self: flex-start;
    padding: 15px 25px 10px;
    text-transform: uppercase;
    text-decoration-line: none;
    transition: background-color 0.2s ease-in-out;
    background-color: ${(props) => props.theme.colors.orange.dark};

    &:hover {
      background-color: ${(props) => props.theme.colors.blue.dark};
    }
  }
`;
