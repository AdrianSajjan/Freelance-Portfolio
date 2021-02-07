import styled from "styled-components";
import Container from "styles/Container";

export default function ContactForm() {
  return (
    <Section>
      <Container>
        <Title>Get in touch with me.</Title>
        <Subtitle>
          Fill out this form below or email me at this address :
          <a href="mailto:adriansajjan2001@gmail.com">adriansajjan2001@gmail.com</a>
        </Subtitle>
        <Form>
          <Field>
            <Label required>Full Name</Label>
            <Input />
            <Helper></Helper>
          </Field>
          <Field>
            <Label required>Email</Label>
            <Input />
            <Helper></Helper>
          </Field>
          <Field>
            <Label required>Subject</Label>
            <Input />
            <Helper></Helper>
          </Field>
          <Field>
            <Label required>Message</Label>
            <TextArea rows={6} />
            <Helper></Helper>
          </Field>
          <Submit>Send</Submit>
        </Form>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  font-family: "Lora", sans-serif;
  color: ${(props) => props.theme.colors.blue.dark};
`;

const Subtitle = styled.p`
  margin: 0 auto;
  margin-top: 40px;
  font-weight: 400;
  max-width: ${(props) => props.theme.devices.xs}px;
  color: ${(props) => props.theme.colors.blue.dark};

  a {
    margin-left: 8px;
    color: ${(props) => props.theme.colors.blue.dark};
  }
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  max-width: ${(props) => props.theme.devices.xs}px;
`;

const Field = styled.div`
  gap: 8px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;

  &:first-child {
    margin-top: 0;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blue.dark};

  &::after {
    content: "*";
    margin-left: 3px;
    display: ${(props) => (props.required ? "inline" : "none")};
  }
`;

const Input = styled.input`
  outline: none;
  font-size: 16px;
  font-weight: 300;
  padding: 10px 12px;
  background: #fbfbfb;
  border: 1px solid ${(props) => props.theme.colors.gray.dark};
`;

const TextArea = styled.textarea`
  outline: none;
  font-size: 16px;
  font-weight: 300;
  padding: 10px 12px;
  background: #fbfbfb;
  border: 1px solid ${(props) => props.theme.colors.gray.dark};
`;

const Helper = styled.span``;

const Submit = styled.button`
  color: white;
  border: none;
  outline: none;
  font-size: 14px;
  margin-top: 35px;
  font-weight: 400;
  letter-spacing: 2px;
  align-self: flex-start;
  padding: 15px 25px 12px;
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
`;
