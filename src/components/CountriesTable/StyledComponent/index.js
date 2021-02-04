import styled from "styled-components";

export const CountriesTableHeading = styled.div`
  display: flex;
`;

export const CountriesTableButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 20px;

  &.heading_name,
  &.heading_population,
  &.heading_area,
  &.heading_gini {
    flex: 4;
    color: var(--text-secondary);
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.heading_name {
    justify-content: flex-start;
  }

  @media(max-width: 720px) {
    
    &.heading_area, &.heading_gini {
    display: none;

    }
  }
`;

export const HeadingFlag = styled.div.attrs({ className: "heading_flag" })`
  flex: 1;
  margin-right: 16px;

  @media(max-width: 720px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;

  text-align: center;

  background-color: var(--background-color-light);
  border-radius: 8px;
  margin-bottom: 16px;

  box-shadow: var(--box-shadow);
  font-weight: 500;

  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const Name = styled.div`
  flex: 4;
  text-align: left;
`;

export const Population = styled.div`
  flex: 4;
`;

export const Area = styled.div`
  flex: 4;

  @media(max-width: 720px) {
    display: none;
  }
`;

export const Gini = styled.div`
  flex: 4;

  @media(max-width: 720px) {
    display: none;
  }
`;

export const Flag = styled.div`
  flex: 1;
  margin-right: 16px;

  img {
    width: 100%;
    border-radius: 2px;
  }

  @media(max-width: 720px) {
    display: none;
  }
  
`;
export const Arrow = styled.div`
  color: var(--primary-color);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 2px;
`;
