import { useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  ButtonsContainer,
  HorizontalContainer,
  TextContainer,
  Title,
  IconButton,
  TitleContainer,
  RepertoireCorrect,
  RepertoireInput,
  RepertoiresPageContainer,
  RepertoiresCorrect,
} from "./styles";

import Toast from "../../components/Toast";
import { AiFillCaretLeft } from "react-icons/ai";
import { Repertoire } from "./types";

const RepertoirePage = () => {
  const [repertoires] = useState<Repertoire[]>([
    {
      repertoire: "A política é a doutrina do possível",
      author: "Bismarck, chanceler alemão",
      cause: "Ausência de Políticas Públicas",
    },
    {
      repertoire: "As escolas nos ensinam tudo, menos a viver",
      author: "Allan Kardec, educador e autor francês",
      cause: "Falta de Preocupação das Instituições de Ensino",
    },
    {
      repertoire:
        "É no desprezo dos pequenos deveres que se faz a aprendizagem das grandes faltas",
      author: "Suzane Necker, escritora suíça",
      cause: "Descaso do Estado",
    },
    {
      repertoire:
        "É uma falta de responsabilidade esperar que alguém faça as coisas por nós",
      author: "John Lennon, músico e ativista britânico",
      cause: "Falta de responsabilidade social",
    },
    {
      repertoire:
        "É muito difícil vencer a injustiça secular, que dilacera o Brasil em dois países distintos: o país dos privilegiados e o país dos despossuídos",
      author: "Ariano Suassuna, escritor brasileiro",
      cause: "Desigualdade social",
    },
    {
      repertoire: "Onde não há lei, não há liberdade",
      author: "John Locke, filósofo inglês",
      cause: "Ausência de leis",
    },
    {
      repertoire: "Aquilo que não puderes controlar, não ordenes",
      author: "Sócrates, filósofo grego",
      cause: "Ineficiência na fiscalização",
    },
    {
      repertoire: "As leis inúteis debilitam as necessárias",
      author: "Barão de Montesquieu",
      cause: "Ineficiência na aplicação de leis já existentes",
    },
    {
      repertoire: "O verdadeiro amor acontece por empatia",
      author: "Arnaldo Jabor, jornalista brasileiro",
      cause: "Falta de empatia social",
    },
    {
      repertoire: "A conscientização é a estrutura das virtudes",
      author: "Francis Bacon, filósofo e político inglês",
      cause: "Baixo índice de conscientização da sociedade",
    },
    {
      repertoire:
        "Não somos responsáveis apenas pelo que fazemos, mas também pelo que deixamos de fazer",
      author: "JeanMolière, dramaturgo francês",
      cause: "Negligência do Poder Público",
    },
    {
      repertoire: "Responsabilidade social é o principal papel das empresas",
      author: "Peter Drucker, escritor e professor universitário austríaco",
      cause: "Desatenção das empresas sobre o problema abordado",
    },
    {
      repertoire: "É mais fácil desintegrar um átomo que um preconceito",
      author: "Albert Einstein, cientista alemão",
      cause: "Preconceito historicamente arraigado",
    },
    {
      repertoire: "O progresso é impossível sem mudança",
      author: "George Bernand Shaw, escritor e jornalista irlandês",
      cause: "Lenta mudança de mentalidade dos cidadãos",
    },
    {
      repertoire: "O Brasil tem de voltar a investir para crescer",
      author: "Marcos Lisboa, economista brasileiro",
      cause: "Baixo investimento do governo",
    },
    {
      repertoire:
        "O que você pode fazer para promover a paz mundial? Vá para casa e ame sua família",
      author: "Madre Teresa de Calcutá, freira e prêmio Nobel da Paz",
      cause: "Despreocupação dos pais sobre o problema abordado",
    },
  ]);
  const [currentRepertoire, setCurrentRepertoire] = useState<string>("");
  const [currentRepertoireIndex, setCurrentRepertoireIndex] = useState<number>(
    Math.floor(Math.random() * repertoires.length)
  );
  const [gotRight, setGotRight] = useState<boolean>(false);
  const [showTheCorrectRepertoire, setShowTheCorrectRepertoire] =
    useState<boolean>(false);
  const [usedRepertoires, setUsedRepertoires] = useState<number[]>([]);

  const history = useHistory();

  const verify = () => {
    let error = false;

    if (currentRepertoire === "") {
      return Toast("Digite o repertório e o autor!", false);
    }

    const [repertoire, author] = currentRepertoire
      .toLocaleLowerCase()
      .replaceAll(" ", "")
      .split("/");

    if (!repertoire || !author) {
      return Toast("Digite o REPERTÓRIO / AUTOR", false);
    }

    if (
      repertoires[currentRepertoireIndex].repertoire
        .toLocaleLowerCase()
        .replaceAll(" ", "") !== repertoire
    ) {
      Toast("O repertório está errado!", false);
      error = true;
    }

    if (
      repertoires[currentRepertoireIndex].author
        .toLocaleLowerCase()
        .replaceAll(" ", "") !== author
    ) {
      Toast("O autor está errado!", false);
      error = true;
    }

    if (!error) {
      setGotRight(true);

      const alredyIsUsed = usedRepertoires.find(
        (repertoire) => repertoire === currentRepertoireIndex
      );

      if (!alredyIsUsed) {
        setUsedRepertoires([...usedRepertoires, currentRepertoireIndex]);
      }

      return Toast(
        "Você acertou o repertório e o autor, passe para a próxima!",
        true
      );
    } else {
      return;
    }
  };

  const consult = () => {
    setShowTheCorrectRepertoire(!showTheCorrectRepertoire);
  };

  const next = () => {
    let newRepertoireIndex = Math.floor(Math.random() * repertoires.length);

    while (
      usedRepertoires.find(
        (repertoire) => repertoire === newRepertoireIndex
      ) !== undefined
    ) {
      newRepertoireIndex = Math.floor(Math.random() * repertoires.length);
    }

    setCurrentRepertoire("");
    setGotRight(false);
    setShowTheCorrectRepertoire(false);
    setCurrentRepertoireIndex(newRepertoireIndex);
  };

  const reset = () => {
    setUsedRepertoires([]);
    setCurrentRepertoire("");
    setGotRight(false);
    setShowTheCorrectRepertoire(false);
    setCurrentRepertoireIndex(Math.floor(Math.random() * repertoires.length));
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <RepertoiresPageContainer>
      <TitleContainer>
        <IconButton onClick={goBack}>
          <AiFillCaretLeft style={{ height: "1.5rem", width: "1.5rem" }} />
        </IconButton>
        <Title>
          Digite o repertório da causa temático abaixo, se não souber, consulte
          e tente novamente. OBS: Digite REPERTÓRIO / AUTOR.
        </Title>
      </TitleContainer>
      <HorizontalContainer onSubmit={(e) => e.preventDefault()}>
        <TextContainer>
          <Title>{repertoires[currentRepertoireIndex].cause}</Title>
          <RepertoiresCorrect>{`Ja acertou ${usedRepertoires.length} de ${repertoires.length} de repertórios.`}</RepertoiresCorrect>
          <RepertoireInput
            onChange={(e) => setCurrentRepertoire(e.target.value)}
            value={currentRepertoire}
          />
          <RepertoireCorrect>
            {showTheCorrectRepertoire
              ? `${repertoires[currentRepertoireIndex].repertoire} / ${repertoires[currentRepertoireIndex].author}`
              : "Se não souber clique em consultar!"}
          </RepertoireCorrect>
        </TextContainer>
        <ButtonsContainer>
          {gotRight && usedRepertoires.length !== repertoires.length ? (
            <Button onClick={next} type="submit">
              PRÓXIMA
            </Button>
          ) : (
            <Button onClick={verify} type="submit">
              VERIFICAR
            </Button>
          )}
          <Button onClick={consult}>CONSULTAR</Button>
          {usedRepertoires.length > 0 && (
            <Button onClick={reset}>RESETAR</Button>
          )}
        </ButtonsContainer>
      </HorizontalContainer>
    </RepertoiresPageContainer>
  );
};

export default RepertoirePage;
