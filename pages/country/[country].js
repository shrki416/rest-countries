import CardDetail from "../../components/CardDetail/CardDetail";
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

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    borders,
    languages,
  } = data[0];

  let relativeData = {
    name: name.common,
    nativeName: nativeName[0],
    flags,
    population: population,
    region,
    subregion: subregion || "",
    capital: capital[0],
    currency: currency[0],
    tld: tld[0],
    borders: borders || [],
    languages: languages,
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
