import CardDetail from "../components/CardDetail/CardDetail";
import Head from "next/head";

const BASE_URL = "https://restcountries.com/v3.1";

export async function getStaticProps({ params }) {
  let { country } = params;
  country = country.replace(/-/g, " ");

  const response = await fetch(`${BASE_URL}/name/${country}`);
  const data = await response.json();

  const nativeName = Object.entries(data[0].name.nativeName).map(
    (item) => item[1].common
  );

  const currency = Object.entries(data[0].currencies).map(
    (item) => item[1].name
  );

  let relativeData = {
    name: data[0].name.common,
    nativeName: nativeName[0],
    flags: data[0].flags,
    population: data[0].population,
    region: data[0].region,
    subregion: data[0].subregion || "",
    capital: data[0].capital[0],
    currency: currency[0],
    tld: data[0].tld[0],
    borders: data[0].borders || [],
    languages: data[0].languages,
  };

  return {
    props: {
      data: relativeData,
    },
  };
}

export async function getStaticPaths() {
  const countries = await fetch(`${BASE_URL}/all`);
  const data = await countries.json();

  return {
    paths: data.map(({ name }) => {
      const country = name.common.toLowerCase().replace(/ /g, "-");
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
