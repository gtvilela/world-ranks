import React, { useState } from "react";
import Link from "next/link";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import Proptypes from 'prop-types';
import { CountriesTableHeading, CountriesTableButton, HeadingFlag, Row, Arrow, Flag, Name, Population, Area, Gini } from "./StyledComponents";


const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <Arrow>
        <KeyboardArrowDownRounded color="inherit" />
      </Arrow>
    );
  } else {
    return (
      <Arrow>
        <KeyboardArrowUpRounded color="inherit" />
      </Arrow>
    );
  }
};
const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };
  return (
    <div>
      <CountriesTableHeading>
        <HeadingFlag className="heading_flag"></HeadingFlag>
        <CountriesTableButton
          className="heading_name"
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>
          {value === "name" && <SortArrow direction={direction} />}
        </CountriesTableButton>
        <CountriesTableButton
          className="heading_population"
          onClick={() => setValueAndDirection("population")}
        >
          <div>Population</div>
          {value === "population" && <SortArrow direction={direction} />}
        </CountriesTableButton>

        <CountriesTableButton
          className="heading_area"
          onClick={() => setValueAndDirection("name")}
        >
          <div>
            Area (km<sup style={{ fontSize: "0.5rem" }}>2</sup>)
          </div>
          {value === "area" && <SortArrow direction={direction} />}
        </CountriesTableButton>
        <CountriesTableButton
          className="heading_gini"
          onClick={() => setValueAndDirection("population")}
        >
          <div>Gini</div>
          {value === "gini" && <SortArrow direction={direction} />}
        </CountriesTableButton>
      </CountriesTableHeading>

      {orderedCountries.map((country) => (
        <Link href={`/country/${country.alpha3Code}`} key={country.name}>
          <Row>
            <Flag>
              <img src={country.flag} alt={country.name}></img>
            </Flag>
            <Name>{country.name}</Name>
            <Population>{country.population}</Population>
            <Area>{country.area || 0}</Area>
            <Gini>{country.gini || 0} %</Gini>
          </Row>
        </Link>
      ))}
    </div>
  );
};

CountriesTable.propTypes = {
  countries: Proptypes.array
} 

export default CountriesTable;
