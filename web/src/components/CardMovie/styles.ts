import { Button as ButtonUI5 } from '@ui5/webcomponents-react'; 
import styled from 'styled-components';

export const Container = styled.section`
  max-width: 850px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: var(--black-two);
  display: flex;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const Information = styled.div`
  width: 100%;

`;

export const Poster = styled.div`
  width: 40%;
  margin-left: 5px;

  @media (max-width: 800px) {
    justify-content: center;
    display: flex;
    margin: 30px auto 0 auto;
  }
`;

export const Title = styled.h4`
  font-size: 22px;
  color: #f0f0f0;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #e2e2e2;
  
  margin-bottom: 30px;
`;

export const Actor = styled.p`
  color: #e2e2e2;

  span {
    color: #f8f8f8;
    margin-right: 10px;
    font-weight: 700;
  }
`;

export const Review = styled.div`
  margin-top: 20px;

  span {
    color: #f8f8f8;
    margin-right: 10px;
    font-weight: 700;
  }
`;


export const FavoriteButton = styled(ButtonUI5)`
  background-color: #f0f0f0;
  margin-top: 30px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #3b3b3b;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #e1e1e1;

    svg {
      color: red;
    }
  }

`;

