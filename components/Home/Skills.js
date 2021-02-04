import styled from "styled-components";
import Container from "styles/Container";

export default function Skills() {
  return (
    <Section>
      <Container>
        <Title>Preferred Techs</Title>
      </Container>
      <Wrapper>
        <Container>
          <Row>
            <Image src="/logos/mongodb.svg" alt="mongodb" maxHeight={140} maxWidth={140} />
            <Image src="/logos/react.svg" alt="react" maxHeight={40} maxWidth={40} />
            <Image src="/logos/next.svg" alt="next" maxHeight={40} maxWidth={40} />
            <Image src="/logos/expressjs.svg" alt="express" maxHeight={140} maxWidth={140} />
            <Image src="/logos/nodejs.svg" alt="node" maxHeight={40} maxWidth={40} />
            <Image src="/logos/redux.svg" alt="redux" maxHeight={40} maxWidth={40} />
          </Row>
        </Container>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  padding: 20px 0 0;
  background-color: ${(props) => props.theme.colors.orange.medium};
`;

const Wrapper = styled.div`
  padding: 30px 0;
  background-color: ${(props) => props.theme.colors.brown.medium};
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brown.medium};
`;

const Row = styled.div`
  row-gap: 50px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10%;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.breakpoints.xs} {
    justify-content: space-between;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: ${(props) => props.maxWidth}px;
  max-height: ${(props) => props.maxHeight}px;

  ${(props) => props.theme.breakpoints.sm} {
    max-width: ${(props) => props.maxWidth * 0.75}px;
    max-height: ${(props) => props.maxHeight * 0.75}px;
  }
`;
