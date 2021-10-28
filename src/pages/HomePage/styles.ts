import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
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

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-direction: center;
  jusify-content: center;
  gap: 1.5rem;
  height: auto;
`;

export const Option = styled(Link)`
  width: 8rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
`;
