import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 1100px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  font-size: 0.75rem;
`;

export const ThemeSwitcher = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;

  color: var(--text-secondary);
  margin-left: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`