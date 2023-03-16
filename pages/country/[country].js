import { fetchCountries, fetchCountry } from "../../lib/fetchCountry";

import CardDetail from "../../components/CardDetail/CardDetail";
import Head from "next/head";

export async function getStaticProps({ params }) {
  let { country } = params;
  country = country.replace(/-/g, " ");

  const data = await fetchCountry(country);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchCountries();

  return {
    paths: data.map(({ name }) => {
      const country = name.toLowerCase().replace(/ /g, "-");
      return {
        params: {
          country,
        },
      };
    }),
    fallback: false,
  };
}

function Country({ data }) {
  return (
    <div>
      <Head>
        <title>{data.name}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <CardDetail data={data} />
    </div>
  );
}

export default Country;
