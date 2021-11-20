import { useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  ButtonsContainer,
  CauseCorrect,
  CauseInput,
  CausesPageContainer,
  HorizontalContainer,
  LastCauses,
  TextContainer,
  Title,
  LastCausesContainer,
  IconButton,
  TitleContainer,
} from "./styles";

import Toast from "../../components/Toast";
import { AiFillCaretLeft } from "react-icons/ai";

const CausePage = () => {
  const [causes] = useState<string[]>([
    "Ausência de políticas públicas",
    "Falta de preocupação das instituições de ensino",
    "Descaso do estado",
    "Falta de responsabilidade social",
    "Desigualdade social",
    "Ausência de leis",
    "Não aplicação das leis já existentes",
    "Ineficiência na fiscalização",
    "Falta de empatia social",
    "Baixo índice de conscientização da sociedade",
    "Negligência do poder público",
    "Baixo investimento do governo",
    "Desatenção das empresas sobre o problema abordado",
    "Despreocupação da família sobre o problema abordado",
    "Preconceito históricamente arraigado",
    "Pouca divulgação por parte da mídia",
    "Lenta mudança na mentalidade dos cidadãos",
  ]);
  const [actualCause, setActualCause] = useState<string>("");
  const [correctCauses, setCorrectCauses] = useState<string[]>([]);
  const [showTheResults, setShowTheResults] = useState<boolean>(false);

  const history = useHistory();

  const verify = () => {
    if (actualCause === "") {
      return Toast("Digite a causa para verificar se ela existe!", false);
    }

    const cause = causes.find(
      (cause) =>
        cause.toLocaleLowerCase().replaceAll(" ", "") ===
        actualCause?.toLowerCase().replaceAll(" ", "")
    );

    if (!cause) {
      return Toast("Essa causa não existe!", false);
    } else {
      const alreadyCertain = correctCauses.find(
        (correctCause) =>
          correctCause.toLocaleLowerCase() === actualCause?.toLowerCase()
      );

      if (alreadyCertain) {
        setActualCause("");
        return Toast(
          "Parabéns, essa causa existe!, mas você ja acertou.",
          true
        );
      } else {
        setActualCause("");
        setCorrectCauses([...correctCauses, cause]);
        return Toast("Parabéns, essa causa existe!", true);
      }
    }
  };

  const consult = () => {
    setShowTheResults(!showTheResults);
  };

  const reset = () => {
    setCorrectCauses([]);
    setShowTheResults(false);
    setActualCause("");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <CausesPageContainer>
      <TitleContainer>
        <IconButton onClick={goBack}>
          <AiFillCaretLeft style={{ height: "1.5rem", width: "1.5rem" }} />
        </IconButton>
        <Title>
          Digite uma causas existentes, se não lembrar de nenhuma consulte a
          lista.
        </Title>
      </TitleContainer>
      <HorizontalContainer onSubmit={(e) => e.preventDefault()}>
        <TextContainer>
          <CauseInput
            onChange={(e) => setActualCause(e.target.value)}
            value={actualCause}
          />
          <CauseCorrect>
            {showTheResults
              ? "Causas restantes"
              : `${correctCauses.length} causas corretas de ${causes.length}`}
          </CauseCorrect>
          <LastCausesContainer>
            {showTheResults
              ? causes.map((cause, index) => {
                  const ifAlreadyCertain = correctCauses.find(
                    (correctCause) => cause === correctCause
                  );

                  if (!ifAlreadyCertain) {
                    return <LastCauses key={index}>{cause}</LastCauses>;
                  }
                  return "";
                })
              : ""}
          </LastCausesContainer>
        </TextContainer>
        <ButtonsContainer>
          <Button onClick={verify} type="submit">
            VERIFICAR
          </Button>
          <Button onClick={consult}>CONSULTAR</Button>
          {correctCauses.length > 0 && <Button onClick={reset}>RESETAR</Button>}
        </ButtonsContainer>
      </HorizontalContainer>
    </CausesPageContainer>
  );
};

export default CausePage;
