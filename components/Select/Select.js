const Select = () => {
  const regions = [
    { key: "africa", name: "Africa" },
    { key: "america", name: "America" },
    { key: "asia", name: "Asia" },
    { key: "europe", name: "Europe" },
    { key: "oceania", name: "Oceania" },
  ];

  return (
    <select>
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
