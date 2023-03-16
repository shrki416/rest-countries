const ENDPOINT = `https://restcountries.com/v3.1`;

export async function fetchCountries() {
  const response = await fetch(`${ENDPOINT}/independent?status=true`);
  const data = await response.json();

  return data.map(({ name, flags, population, region, capital }) => {
    return {
      name: name.common,
      flags,
      population,
      region,
      capital: capital?.[0],
    };
  });
}

export async function fetchCountry(country) {
  const response = await fetch(`${ENDPOINT}/name/${country}`);
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

  return relativeData;
}

export async function fetchCountriesByRegion(region) {
  const response = await fetch(`${ENDPOINT}/region/${region}`);
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

  return partialData;
}
