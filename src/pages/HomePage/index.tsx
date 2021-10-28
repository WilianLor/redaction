import { HomePageContainer, Option, OptionsContainer, Title } from "./styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>
        Este site é utilizada para treinar fundamentos de redação, selecione uma
        das opções abaixo:
      </Title>
      <OptionsContainer>
        <Option to="/causes">POSSÍVEIS CAUSAS</Option>
        <Option to="/quotes">TESES DE INTRODUÇÃO</Option>
        <Option to="/repertoire">REPERTÓRIOS DE ARGUMENTAÇÃO</Option>
      </OptionsContainer>
    </HomePageContainer>
  );
};

export default HomePage;
