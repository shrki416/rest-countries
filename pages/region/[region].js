import { formatNumber, toLowerWithHyphen } from "../../utils";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Head from "next/head";
import { QUERIES } from "../../constants";
import React from "react";
import Select from "../../components/Select/Select";
import styled from "styled-components";

const BASE_URL = "https://restcountries.com/v3.1/region";

export async function getStaticProps({ params }) {
  const { region } = params;

  const ENDPOINT = `${BASE_URL}/${region}`;

  const response = await fetch(ENDPOINT);
  const data = await response.json();

  const isUnMember = data.filter((country) => country.unMember === true);

  const partialData = isUnMember.map(
    ({ name, flags, population, region, capital, flag }) => {
      return {
        id: flag,
        name: name.common,
        flags,
        population,
        region,
        capital: capital?.[0],
        flag,
      };
    }
  );

  return {
    props: {
      data: partialData,
    },
  };
}

export async function getStaticPaths() {
  const regions = ["africa", "america", "asia", "europe", "oceania"];

  return {
    paths: regions.map((region) => {
      return {
        params: {
          region,
        },
      };
    }),
    fallback: false,
  };
}

const Region = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Region</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Button href="/">&larr; Back</Button>

      {/* <Select /> */}

      <Main>
        {data.map((country) => {
          return <Card key={country.name} data={country} />;
        })}
      </Main>
    </div>
  );
};

const Main = styled.main`
  --min-column-width: min(320px, 100%);

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--min-column-width), 1fr)
    );
    grid-gap: 1rem;
    padding-inline: 5rem;
  }
`;

export default Region;
