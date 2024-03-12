import React from 'react';

import { Container } from './styles';

const Linkedin = 'https://www.linkedin.com/in/roger-fernandez22/';

function Credits() {
  return (
    <Container>
      <p>
        Desenvolvido por{' '}
        <a href={Linkedin} target="blank">
          Roger Fernandes
        </a>
      </p>
    </Container>
  );
}

export default Credits;
