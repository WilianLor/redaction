import styled from "styled-components";

export const RepertoiresPageContainer = styled.div`
  padding: 6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const HorizontalContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const RepertoireInput = styled.input`
  font-size: 1rem;
  font-weight: 500;
  heigth: 7rem;
  width: 30rem;
  padding: 0.5rem;
`;

export const RepertoiresCorrect = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  width: 30rem;
`;

export const RepertoireCorrect = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  width: 30rem;
  height: 5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;
