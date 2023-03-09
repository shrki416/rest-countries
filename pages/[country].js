import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

function Country() {
  const router = useRouter();
  const { country } = router.query;
  return (
    <div>
      <Head>
        <title>{country}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <h1>
          <span>Country:</span> {country}
        </h1>
        <Link href="/">&larr; Back</Link>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
  padding: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--blue-700);
`;

export default Country;
