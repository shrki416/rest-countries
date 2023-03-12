import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/router";

const Select = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const router = useRouter();

  const regions = [
    { key: "africa", name: "Africa" },
    { key: "america", name: "America" },
    { key: "asia", name: "Asia" },
    { key: "europe", name: "Europe" },
    { key: "oceania", name: "Oceania" },
  ];

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
