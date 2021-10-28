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
  QuoteCorrect,
  QuoteInput,
  QuotesPageContainer,
  QuotesCorrect,
} from "./styles";

import Toast from "../../components/Toast";
import { AiFillCaretLeft } from "react-icons/ai";
import { Quote } from "./types";

const QuotePage = () => {
  const [quotes] = useState<Quote[]>([
    {
      quote: "Nove décimos da nossa felicidade dependem da nossa saúde",
      author: "Arthur Schopenhauer, filósofo alemão",
      axisThematic: "SAÚDE",
    },
    {
      quote: "A violência cria mais problemas sociais do que resolve",
      author: "Martin Luther King,ativista político estadunidense",
      axisThematic: "SEGURANÇA/VIOLÊNCIA",
    },
    {
      quote:
        "Inteligência é a habilidade das espécies de viver em harmonia com o meio ambiente",
      author: "Paul Watson, cofundador do Greenpeace",
      axisThematic: "MEIO AMBIENTE",
    },
    {
      quote: "Sem cultura não haverá nenhuma saída para os homens",
      author: "Albert Einstein,cientista alemão",
      axisThematic: "ARTE E CULTURA",
    },
    {
      quote: "Os miseráveis não têm outro remédio a não ser a esperança",
      author: "William Shakespeare, dramaturgo inglês",
      axisThematic: "DESIGUALDADE SOCIAL/POBREZA",
    },
    {
      quote:
        "Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda",
      author: "Paulo Freire, professor e patrono da educação brasileira",
      axisThematic: "EDUCAÇÃO ",
    },
    {
      quote: "Preconceito é opinião sem conhecimento",
      author: "Voltaire, filósofo francês",
      axisThematic: "PRECONCEITO",
    },
    {
      quote:
        "Tornou-se chocantemente óbvio que a nossa tecnologia excedeu a nossa humanidade",
      author: "Albert Einstein, cientista alemão",
      axisThematic: "CIÊNCIA/TECNOLOGIA",
    },
    {
      quote:
        "A economia é uma virtude distributiva e consiste não em poupar, mas em escolher",
      author: "Edmund Burke, orador irlandês",
      axisThematic: "ECONOMIA E DESENVOLVIMENTO",
    },
    {
      quote: "Pior que não terminar uma viagem é nunca partir",
      author: "Amyr Klink, navegador e escritor brasileiro",
      axisThematic: "TURISMO",
    },
    {
      quote: "Não vivemos para comer, mas comemos para viver",
      author: "Sócrates, filósofo grego",
      axisThematic: "ALIMENTAÇÃO/NUTRIÇÃO",
    },
    {
      quote:
        "Toda política é a arte do possível. Contudo, até a arte tem sua ética",
      author: "Bismarck, chanceler alemão",
      axisThematic: "POLÍTICA",
    },
    {
      quote: "O homem fez da terra um inferno para os animais",
      author: "Arthur Schopenhauer, filósofo alemão",
      axisThematic: "ANIMAIS",
    },
    {
      quote:
        "Os meios de comunicação são ao mesmo tempo nossa salvação ou nossa morte",
      author: "David Bowie, músico britânico",
      axisThematic: "COMUNICAÇÃO E LINGUAGEM",
    },
    {
      quote:
        "A injustiça num lugar qualquer é uma ameaça à justiça em todo lugar",
      author: "Martin Luther King, ativista político estadunidense",
      axisThematic: "LEGISLAÇÃO",
    },
    {
      quote: "O esporte é uma guerra sem armas",
      author: "George Orwell",
      axisThematic: "ESPORTE",
    },
    {
      quote: "O trabalho é o alimento das almas nobres",
      author: "Sêneca, filósofo romano",
      axisThematic: "TRABALHO",
    },
    {
      quote:
        "O único lugar em que você deve cuidar da vida dos outros é no trânsito",
      author: "Cassal Machado Brum, policial e escritor brasileiro",
      axisThematic: "TRÂNSITO",
    },
  ]);
  const [currentQuote, setCurrentQuote] = useState<string>("");
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(
    Math.floor(Math.random() * quotes.length)
  );
  const [gotRight, setGotRight] = useState<boolean>(false);
  const [showTheCorrectQuote, setShowTheCorrectQuote] =
    useState<boolean>(false);
  const [usedQuotes, setUsedQuotes] = useState<number[]>([]);

  const history = useHistory();

  const verify = () => {
    let error = false;

    if (currentQuote === "") {
      return Toast("Digite a tese e o autor!", false);
    }

    const [quote, author] = currentQuote
      .toLocaleLowerCase()
      .replaceAll(" ", "")
      .split("/");

    if (!quote || !author) {
      return Toast("Digite a TESE / AUTOR", false);
    }

    if (
      quotes[currentQuoteIndex].quote
        .toLocaleLowerCase()
        .replaceAll(" ", "") !== quote
    ) {
      Toast("A tese está errada!", false);
      error = true;
    }

    if (
      quotes[currentQuoteIndex].author
        .toLocaleLowerCase()
        .replaceAll(" ", "") !== author
    ) {
      Toast("O autor está errado!", false);
      error = true;
    }

    if (!error) {
      setGotRight(true);

      const alredyIsUsed = usedQuotes.find(
        (quote) => quote === currentQuoteIndex
      );

      if (!alredyIsUsed) {
        setUsedQuotes([...usedQuotes, currentQuoteIndex]);
      }

      return Toast(
        "Você acertou a tese e o autor, passe para a próxima!",
        true
      );
    } else {
      return;
    }
  };

  const consult = () => {
    setShowTheCorrectQuote(!showTheCorrectQuote);
  };

  const next = () => {
    let newQuoteIndex = Math.floor(Math.random() * quotes.length);

    while (usedQuotes.find((quote) => quote === newQuoteIndex) !== undefined) {
      newQuoteIndex = Math.floor(Math.random() * quotes.length);
    }

    setCurrentQuote("");
    setGotRight(false);
    setShowTheCorrectQuote(false);
    setCurrentQuoteIndex(newQuoteIndex);
  };

  const reset = () => {
    setUsedQuotes([]);
    setCurrentQuote("");
    setGotRight(false);
    setShowTheCorrectQuote(false);
    setCurrentQuoteIndex(Math.floor(Math.random() * quotes.length));
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <QuotesPageContainer>
      <TitleContainer>
        <IconButton onClick={goBack}>
          <AiFillCaretLeft style={{ height: "1.5rem", width: "1.5rem" }} />
        </IconButton>
        <Title>
          Digite a tese do eixo temático abaixo, se não souber, consulte e tente
          novamente. OBS: Digite TESE / AUTOR.
        </Title>
      </TitleContainer>
      <HorizontalContainer onSubmit={(e) => e.preventDefault()}>
        <TextContainer>
          <Title>{quotes[currentQuoteIndex].axisThematic}</Title>
          <QuotesCorrect>{`Ja acertou ${usedQuotes.length} de ${quotes.length} de teses.`}</QuotesCorrect>
          <QuoteInput
            onChange={(e) => setCurrentQuote(e.target.value)}
            value={currentQuote}
          />
          <QuoteCorrect>
            {showTheCorrectQuote
              ? `${quotes[currentQuoteIndex].quote} / ${quotes[currentQuoteIndex].author}`
              : "Se não souber clique em consultar!"}
          </QuoteCorrect>
        </TextContainer>
        <ButtonsContainer>
          {gotRight && usedQuotes.length !== quotes.length ? (
            <Button onClick={next} type="submit">
              PRÓXIMA
            </Button>
          ) : (
            <Button onClick={verify} type="submit">
              VERIFICAR
            </Button>
          )}
          <Button onClick={consult}>CONSULTAR</Button>
          {usedQuotes.length > 0 && <Button onClick={reset}>RESETAR</Button>}
        </ButtonsContainer>
      </HorizontalContainer>
    </QuotesPageContainer>
  );
};

export default QuotePage;
