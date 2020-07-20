import Container from "../components/container";

export interface MauroProps {}

const Mauro: React.SFC<MauroProps> = () => {
  return (
    <Container>
      ¿Buscas soluciones informáticas? Que esperas para contactarme?: - LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/mauro-freire-018588a/" target="blank">Click ACA</a>
    </Container>
  );
};

export default Mauro;
