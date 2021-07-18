import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #e7e5e5;
  padding: 1.25rem;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;

export const Link = styled.a`
  color: #68e1fd;
  cursor: pointer;
  padding-left: 0.25rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledParagraph>
        Made with <span style={{ color: '#68e1fd' }}>♥ </span>by
        <Link href="https://github.com/maknetaRo" target="_blank">
          Magdalena Rosłaniec
        </Link>
      </StyledParagraph>
    </StyledFooter>
  );
};

export default Footer;
