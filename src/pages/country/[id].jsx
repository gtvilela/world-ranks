import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Proptypes from "prop-types";
import {
  Container,
  OverviewName,
  FlagImg,
  OverviewLabel,
  OverviewNumber,
  OverviewPanel,
  OverviewRegion,
  ContainerLeft,
  ContainerRight,
  DetailsPanel,
  DetailsPanelHeading,
  DetailsPanelRow,
  DetailsPanelLabel,
  DetailsPanelBorders,
  DetailsPanelBordersLabel,
  DetailsPanelBordersContainer,
  DetailsPanelBordersCountry,
  DetailsPanelBordersCountryFlag
} from "./StyledComponent";

const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const country = await res.json();

  return country;
};

const Country = ({ country }) => {
  const [borders, setBorders] = useState([]);

  const getBorders = async () => {
    const borders = await Promise.all(
      country.borders.map((border) => getCountry(border))
    );

    setBorders(borders);
  };

  useEffect(() => {
    getBorders();
  }, []);

  return (
    <Layout title={country.name}>
      <Container>
        <ContainerLeft>
          <OverviewPanel>
            <FlagImg src={country.flag} alt={country.name}></FlagImg>

            <OverviewName>{country.name}</OverviewName>
            <OverviewRegion>{country.region}</OverviewRegion>

            <OverviewNumber>
              <div>
                <div>{country.population}</div>
                <OverviewLabel>Population</OverviewLabel>
              </div>
              <div>
                <div>{country.area}</div>
                <OverviewLabel>Area</OverviewLabel>
              </div>
            </OverviewNumber>
          </OverviewPanel>
        </ContainerLeft>
        <ContainerRight>
          <DetailsPanel>
            <DetailsPanelHeading>Details</DetailsPanelHeading>

            <DetailsPanelRow>
              <DetailsPanelLabel>Capital</DetailsPanelLabel>
              <div>{country.capital}</div>
            </DetailsPanelRow>

            <DetailsPanelRow>
              <DetailsPanelLabel>Subregion</DetailsPanelLabel>
              <div>{country.subregion}</div>
            </DetailsPanelRow>

            <DetailsPanelRow>
              <DetailsPanelLabel>Languages</DetailsPanelLabel>
              <div>{country.languages.map(({ name }) => name).join(", ")}</div>
            </DetailsPanelRow>

            <DetailsPanelRow>
              <DetailsPanelLabel>Currency</DetailsPanelLabel>
              <div>{country.currencies.map(({ name }) => name).join(", ")}</div>
            </DetailsPanelRow>

            <DetailsPanelRow>
              <DetailsPanelLabel>Native name</DetailsPanelLabel>
              <div>{country.nativeName}</div>
            </DetailsPanelRow>

            <DetailsPanelRow>
              <DetailsPanelLabel>Gini</DetailsPanelLabel>
              <div>{country.gini} %</div>
            </DetailsPanelRow>

            <DetailsPanelBorders>
              <DetailsPanelBordersLabel>
                Neighbouring Countries
              </DetailsPanelBordersLabel>

              <DetailsPanelBordersContainer>
                {borders.map(({ flag, name }) => (
                  <DetailsPanelBordersCountry
                    key={name}
                  >
                    <DetailsPanelBordersCountryFlag src={flag} alt={name}></DetailsPanelBordersCountryFlag>
                    <div>
                      {name}
                    </div>
                  </DetailsPanelBordersCountry>
                ))}
              </DetailsPanelBordersContainer>
            </DetailsPanelBorders>
          </DetailsPanel>
        </ContainerRight>
      </Container>
    </Layout>
  );
};

Country.propTypes = {
  country: Proptypes.object,
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const country = await getCountry(params.id);

  return {
    props: {
      country,
    },
  };
};
