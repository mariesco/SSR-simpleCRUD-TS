import Container from "../components/container";

export interface MartinProps {}

const Martin: React.SFC<MartinProps> = () => {
  return (
    <Container>
      Testeando SSR CRUD con Next, Typescript, y más tools...
      <br />
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/mart%C3%ADn-riesco-180654168/"
        target="blank"
      >
        Click ACA
      </a>
    </Container>
  );
};

export default Martin;
