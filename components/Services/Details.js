import Link from "next/link";
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
              <h2 className="lead">Don't look away!</h2>
              <h1 className="title">My skills can serve everyone equally.</h1>
              <p className="description">
                Whether, you are just starting your business or you already have a business, I can help you.
              </p>
              <p className="description">
                Your business can be small scale or large scale, I'll make sure all your digital needs are satisified.
              </p>
              <p className="description">
                It doesn't even have to be a business, if you are looking to make a web or a mobile app, for your personal needs,
                I have plans for that as well.
              </p>
            </div>
          </div>
        </Card>
        <Card color={theme.colors.brown.light} reverse>
          <div className="cover">
            <img src="/images/education-1.jpg" alt="Education" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h2 className="lead">Not just one!</h2>
              <h1 className="title">It's not just the app or website.</h1>
              <p className="description">
                When you work with me, it's not only the app or website that you will recieve, but a lot more:
              </p>
              <ul className="reasons">
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>Free maintainance till a minimum of 1 year.</span>
                </li>
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>Free updates within 60 days or more after getting the website.</span>
                </li>
                <li className="reason">
                  <CgChevronDoubleDown size={20} />
                  <span>My full attention if you are in doubt or confused about anything.</span>
                </li>
              </ul>
              <p className="description mt-3">Check out all of my plans below.</p>
            </div>
          </div>
        </Card>
        <Prices>
          <Price>
            <h2 className="title">Basic</h2>
            <h3 className="price">$1500 onwards</h3>
            <p className="description">Recommended if you are just starting out or have a small business.</p>
            <p className="description">Features:</p>
            <ul className="features">
              <li className="feature">
                <IoCheckmark size={20} />
                <span>Upto 10 screens/pages/services.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Free maintainance upto 1 year.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Free updates within 60 days.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Upto 3 revisions.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>+2 extra services if needed.</span>
              </li>
            </ul>
            <Link href="/contact#basic">
              <a className="action">Request Quote</a>
            </Link>
          </Price>
          <Price highlighted>
            <h2 className="title">Business</h2>
            <h3 className="price">$2500 onwards</h3>
            <p className="description">Recommended for a moderate business or to expand current business.</p>
            <p className="description">Features:</p>
            <ul className="features">
              <li className="feature">
                <IoCheckmark size={20} />
                <span>Upto 15 screens/pages/services.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Free maintainance upto 2 year.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Free updates within 120 days.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Upto 6 revisions.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>+3 extra services if needed.</span>
              </li>
            </ul>
            <Link href="/contact#business">
              <a className="action">Request Quote</a>
            </Link>
          </Price>
          <Price>
            <h2 className="title">Premium</h2>
            <h3 className="price">$3500 onwards</h3>
            <p className="description">Recommended if you are looking to build an online business empire.</p>
            <p className="description">Features:</p>
            <ul className="features">
              <li className="feature">
                <IoCheckmark size={20} />
                <span>Upto 20 screens/pages/services.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Free maintainance upto 3 year.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Free updates within 180 days.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>Upto 9 revisions.</span>
              </li>
              <li className="feature">
                <IoCheckmark size={18} />
                <span>+6 extra services if needed.</span>
              </li>
            </ul>
            <Link href="/contact#premium">
              <a className="action">Request Quote</a>
            </Link>
          </Price>
        </Prices>
        <Card color={theme.colors.orange.light}>
          <div className="cover">
            <img src="/profile/me-2.jpg" alt="Adrian" className="image" />
          </div>
          <div className="body">
            <div className="inner">
              <h2 className="lead">Hold On!</h2>
              <h1 className="title">Feeling like the plans are too expensive?</h1>
              <p className="description">
                If you are just starting your business or need something for personal use, you might be unsure whether you are
                willing to shell out a lot of money. Let's be honest, financial constraints can affect the best of us.
              </p>
              <p className="description">
                I hate when people go empty handed! If you feel that you have been left out, please feel free to reach out to me.
                I am sure, we can work together for a solution.
              </p>
              <Link href="/contact#others">
                <a className="action">
                  <span>Contact Me</span>
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

  .lead {
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

  .mt-3 {
    margin-top: 30px;
  }
`;

const Prices = styled.div`
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 150px;
`;

const Price = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  min-width: 280px;
  flex-direction: column;
  padding: 35px 35px 40px;
  transform: scale(${(props) => (props.highlighted ? 1.05 : 1)});
  background-color: ${(props) => (props.highlighted ? props.theme.colors.gray.medium : props.theme.colors.gray.light)};

  .title {
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.5px;
    font-family: "Lora", serif;
    color: ${(props) => props.theme.colors.blue.dark};
    font-weight: ${(props) => (props.highlighted ? 600 : 500)};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 25px;
      line-height: 32px;
    }
  }

  .price {
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 15px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.gray.dark};
    font-weight: ${(props) => (props.highlighted ? 700 : 600)};
  }

  .description {
    font-size: 16px;
    margin-top: 15px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.blue.dark};
    font-weight: ${(props) => (props.highlighted ? 400 : 300)};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 14px;
      margin-top: 12px;
      line-height: 20px;
    }
  }

  .features {
    list-style: none;
    margin-top: 5px;

    ${(props) => props.theme.breakpoints.sm} {
      margin-top: 12px;
    }
  }

  .feature {
    gap: 12px;
    display: flex;
    font-size: 16px;
    margin-top: 16px;
    color: ${(props) => props.theme.colors.blue.dark};
    font-weight: ${(props) => (props.highlighted ? 400 : 300)};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 14px;
      margin-top: 12px;
      line-height: 20px;
    }

    & > svg {
      flex-shrink: 0;
    }
  }

  .action {
    color: white;
    font-size: 14px;
    margin-top: 35px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1px;
    padding: 12px 20px 8px;
    text-transform: uppercase;
    text-decoration-line: none;
    transition: background-color 0.2s ease-in-out;
    background-color: ${(props) => props.theme.colors.orange.dark};

    &:hover {
      background-color: ${(props) => props.theme.colors.blue.dark};
    }
  }
`;
