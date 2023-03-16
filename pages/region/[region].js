import Button from "../../components/Button";
import Card from "../../components/Card";
import Head from "next/head";
import { QUERIES } from "../../constants";
import React from "react";
import { fetchCountriesByRegion } from "../../lib/fetchCountry";
import styled from "styled-components";

export async function getStaticProps({ params }) {
  const { region } = params;

  const data = await fetchCountriesByRegion(region);

  return {
    props: {
      data,
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
  const region = data[0].region;
  return (
    <div>
      <Head>
        <title>{region}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Button href="/">&larr; Back</Button>

      <Main>
        {data.map((country) => (
          <Card key={country.name} data={country} />
        ))}
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
