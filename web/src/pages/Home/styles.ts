import { Button as ButtonUI5, Input as InputUI5 } from '@ui5/webcomponents-react'; 
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 0 170px;
  background-color: var(--black);
`;

export const Form = styled.form`
  max-width: 850px;
  margin: 40px auto;
  padding: 30px 50px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: var(--black-two);
`;

export const Apresentation = styled.div`
  margin-bottom: 50px;
`;

export const InputTitle = styled(InputUI5)`
  width: 100%;
  max-width: 468px;
  height: 40px;
  color: white;
  background-color: #494949;
`;

export const Button = styled(ButtonUI5)`
  background-color: #f0f0f0;
  margin: 0 4px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #3b3b3b;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const Title = styled.h3`
  height: 17px;
  font-family: Roboto;
  margin-bottom: 16px;
  font-weight: 500;
  color: #f0f0f0;
`;

export const Description = styled.small`
  height: 17px;
  font-family: Roboto;
  font-weight: 500;
  color: #e1e1e1;
`;
