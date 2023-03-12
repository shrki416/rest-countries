import { useEffect, useState } from "react";

import useSWR from "swr";

const Select = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = [
    { key: "africa", name: "Africa" },
    { key: "america", name: "America" },
    { key: "asia", name: "Asia" },
    { key: "europe", name: "Europe" },
    { key: "oceania", name: "Oceania" },
  ];

  // async function getCountriesInRegion() {
  const ENDPOINT = `https://restcountries.com/v3.1/region/${selectedRegion}`;

  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);
  console.log({ data, error, isLoading });
  // }

  // useEffect(() => {
  //   getCountriesInRegion();
  // }, [selectedRegion]);

  return (
    <select onChange={(e) => setSelectedRegion(e.target.value)}>
      <option value="all">Filter by Region</option>
      {regions.map((region) => (
        <option key={region.key} value={region.name}>
          {region.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
