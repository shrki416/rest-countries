const ENDPOINT = `https://restcountries.com/v3.1`;

import { formatNumber } from "../utils";

export async function fetchCountries() {
  const response = await fetch(`${ENDPOINT}/independent?status=true`);
  const data = await response.json();

  return data.map(({ name, flags, population, region, capital }) => {
    population = formatNumber(population);
    return {
      name: name.common,
      flags,
      population,
      region,
      capital: capital[0],
    };
  });
}

export async function fetchCountry(country) {
  const ENDPOINT = `https://restcountries.com/v3.1`;
  try {
    const response = await fetch(`${ENDPOINT}/name/${country}?fullText=true`);
    const json = await response.json();

    const countryDetails = json[0];
    const { flags, region, capital, tld, subregion } = countryDetails;

    const population = formatNumber(countryDetails.population);
    const nativeName = getNativeName(countryDetails);
    const currency = getCurrency(countryDetails);
    const languages = getLanguages(countryDetails.languages);

    const borders = countryDetails.borders
      ? await getBorderNames(countryDetails.borders)
      : [];

    let data = {
      // ...countryDetails,
      name: countryDetails.name.common,
      nativeName: nativeName[0],
      flags,
      population,
      region,
      subregion,
      capital,
      currency,
      tld,
      borders,
      languages,
    };

    return data;
  } catch (error) {
    console.error(`Error fetching country data for ${country}`, error);
    throw new Error(`Unable to fetch country data for ${country}`);
  }
}

export async function fetchCountriesByRegion(region) {
  const response = await fetch(`${ENDPOINT}/region/${region}`);
  const data = await response.json();

  const isIndependent = data.filter((country) => country.independent === true);

  const partialData = isIndependent.map(
    ({ name, flags, population, region, capital }) => {
      population = formatNumber(population);
      return {
        name: name.common,
        flags,
        population,
        region,
        capital: capital?.[0],
      };
    }
  );

  return partialData;
}

function getCurrency(countryDetails) {
  return Object.entries(countryDetails.currencies).map((item) => item[1].name);
}

function getNativeName(countryDetails) {
  return Object.entries(countryDetails.name.nativeName).map(
    (item) => item[1].common
  );
}

function getLanguages(languages) {
  return Object.values(languages).map((language) => language);
}

async function getBorderNames(borders) {
  const codes = borders.join(",");
  const response = await fetch(`${ENDPOINT}/alpha?codes=${codes}`);
  const data = await response.json();

  return data.map((country) => country.name.common);
}
