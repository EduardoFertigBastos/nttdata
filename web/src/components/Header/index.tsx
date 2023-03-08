import React from 'react';

import logo from "../../assets/bx-logo.svg";

import { Container } from './styles';

interface Props {

};

const Header: React.FC<Props> = () => (
  <Container>
    <p>
      NTT DATA | MOVIES
    </p>
  </Container>
);

export default Header;
