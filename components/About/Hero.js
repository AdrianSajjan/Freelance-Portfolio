import styled from "styled-components";
import Container from "styles/Container";

export default function Hero() {
  return (
    <Section>
      <Container>
        <Row>
          <Column className="hide-sm">
            <img src="/images/coffee-1.png" alt="cover" className="small" />
          </Column>
          <Column className="overlay">
            <div className="card">
              <h1 className="title">Sometimes, later becomes never, so do it now!</h1>
              <p className="subtitle">Confused whether a website or an app is what you really need for your business.</p>
              <p className="subtitle">Let's get down for a talk and all of your doubts and confusions will be clear.</p>
              <p className="subtitle">As a developer it will be my priority to help you whenever you are in doubt of anything.</p>
              <a href="/contact" className="action">
                Contact Me
              </a>
            </div>
          </Column>
          <Column className="cover">
            <img src="/images/tech-1.png" alt="cover" className="large" />
          </Column>
        </Row>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 100px 0 150px;
  background-color: ${(props) => props.theme.colors.orange.medium};

  ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 0 50px;
  }
`;

const Row = styled.div`
  gap: 150px;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.sm} {
    gap: 50px;
    flex-direction: column;
  }
`;

const Column = styled.div`
  &.hide-sm {
    transform: translateY(15%);
    ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }

  &.overlay {
    top: 10%;
    left: 10%;
    position: absolute;

    ${(props) => props.theme.breakpoints.sm} {
      top: unset;
      left: unset;
      position: relative;
    }
  }

  .card {
    display: flex;
    max-width: 70%;
    flex-direction: column;
    padding: 40px 60px 50px;
    background-color: white;
    box-shadow: 0 0 15px rgba(200, 200, 200, 0.1);

    ${(props) => props.theme.breakpoints.sm} {
      max-width: 100%;
      padding: 30px 40px 40px;
    }
  }

  .title {
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
    font-family: "Lora", serif;
    color: ${(props) => props.theme.colors.blue.dark};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 24px;
      line-height: 36px;
    }
  }

  .subtitle {
    font-size: 18px;
    margin-top: 20px;
    font-weight: lighter;
    color: ${(props) => props.theme.colors.blue.dark};

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 15px;
      margin-top: 10px;
    }
  }

  .action {
    color: white;
    margin-top: 35px;
    font-weight: 600;
    letter-spacing: 1px;
    align-self: flex-start;
    padding: 15px 25px 10px;
    text-transform: uppercase;
    text-decoration-line: none;
    transition: background-color 0.2s ease-in-out;
    background-color: ${(props) => props.theme.colors.orange.dark};

    &:hover {
      background-color: ${(props) => props.theme.colors.blue.dark};
    }

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 14px;
      text-align: center;
      align-self: stretch;
      padding: 12px 20px 8px;
    }
  }

  .small {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .large {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
