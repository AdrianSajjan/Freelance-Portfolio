import theme from "constants/theme";
import styled from "styled-components";
import Container from "styles/Container";
import { IoCheckmark } from "react-icons/io5";
import { CgChevronDoubleDown } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

export default function Details() {
  return (
    <Section>
      <Container>
        <Card color={theme.colors.gray.light}>
          <div className="cover">
            <img src="/profile/me-2.jpg" alt="Adrian" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h1 className="title">Hi, I am Adrian Sajjan</h1>
              <p className="description">I am a Full Stack developer from West Bengal, India.</p>
              <p className="description">
                Apart from web apps, I am also skilled in UI/UX Design and Cross Platform Mobile app development.
              </p>
              <p className="description">Some of my skills are:</p>
              <ul className="reasons">
                <li className="reason">
                  <IoCheckmark size={20} />
                  <span>Responsive Web Design and Development</span>
                </li>
                <li className="reason">
                  <IoCheckmark size={20} />
                  <span>REST API and GraphQL</span>
                </li>
                <li className="reason">
                  <IoCheckmark size={20} />
                  <span>Miminalism and UI/UX and Creative Vision</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card color={theme.colors.brown.light} reverse>
          <div className="cover">
            <img src="/images/education-1.jpg" alt="Education" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h1 className="title">Learn about my educational qualification and past experiences</h1>
              <ul className="reasons mt-0">
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>Passed 10th standard with a CGPA of 9.6 and 12th standard with a percentage of 90.2.</span>
                </li>
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>
                    Currently a CSE student at Haldia Institute of Technology, West Bengal. Graduation date is 2023, with a degree
                    in Bachelor of Technology.
                  </span>
                </li>
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>
                    Served as an Intern in Mavoix Solutions and created high fidelity web apps for internal use from August 2020
                    to October 2020.
                  </span>
                </li>
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>
                    Currently working on part time basis in Mavoix Solution, and part of several projects, both internal and
                    external.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card color={theme.colors.orange.light}>
          <div className="cover">
            <img src="/profile/me-1.jpg" alt="Adrian" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h1 className="title">A little bit about my personal life.</h1>
              <p className="description">
                Apart from development, I am a huge football lover. I have been an Arsenal Fan all my life and I don't miss
                watching many matches. My inspiration comes from Thierry Henry and the invincible Arsenal team of 2003-2004.
              </p>
              <p className="description">
                I am a cinephile and an Office US fan. My genre of choice is Dark-Comedy and Crime-Drama and also Rom-Coms. My
                favourite films are No Country For Old Men, There Will Be Blood and Notting Hill. My favourite series are The
                Wire, Office US and Attack On Titans.
              </p>
              <p className="description">
                My music taste mostly revolves around rock and I like listening to John Denver, The Scripts and Kodaline.
              </p>
              <a href="/services" className="action">
                <span>Work with Me</span>
                <FaArrowRight />
              </a>
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
    max-width: 400px;
    max-height: 400px;
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

  .mt-0 {
    margin-top: 0;
  }
`;
