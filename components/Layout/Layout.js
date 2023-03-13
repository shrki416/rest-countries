import Header from "../Header/Header";
// import Search from "../Search/Search";
// import Select from "../Select/Select";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <Search />
      <Select /> */}
      {children}
    </>
  );
}
