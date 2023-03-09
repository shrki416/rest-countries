import Button from "../Button/Button";
import styled from "styled-components";

function CardDetail({ data }) {
  const languages = Object.entries(data.languages).map(([key, value]) => (
    <span key={key}>{value}</span>
  ));

  return (
    <Wrapper>
      <Button href="/">&larr; Back</Button>

      <Flag src={data.flags.png} alt={data.flags.alt} />
      <Name>{data.name}</Name>

      <ContentWrapper>
        <p>
          Native Name:
          <span> {data.nativeName}</span>
        </p>
        <p>
          Population:
          <span> {data.population}</span>
        </p>
        <p>
          Region:
          <span> {data.region}</span>
        </p>
        <p>
          Sub Region:
          <span> {data?.subregion}</span>
        </p>
        <p>
          Capital:
          <span> {data.capital}</span>
        </p>
      </ContentWrapper>

      <ContentWrapper>
        <p>
          Currency:
          <span> {data.currency}</span>
        </p>
        <p>
          Top Level Domain:
          <span> {data.tld}</span>
        </p>
        <div>
          <p>Languages: {languages}</p>
        </div>
        {data.borders.length > 0 &&
          data.borders.map((border, index) => (
            <Button key={index}>{border}</Button>
          ))}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2.5rem 1.75rem;
`;

const ContentWrapper = styled.div`
  margin-bottom: 2rem;

  p {
    padding-bottom: 1rem;
    font-size: ${14 / 16}rem;
    line-height: ${16 / 16}rem;
    font-weight: var(--fw-semi-bold);
  }

  p:last-child {
    padding-bottom: 0;
  }

  p span {
    font-weight: var(--fw-light);
  }
`;

const Flag = styled.img`
  margin: 40px 0 44px;
  border-radius: 5px;
`;

const Name = styled.h1`
  font-size: ${22 / 16}rem;
  line-height: ${30 / 16}rem;
  font-weight: var(--fw-extra-bold);
  color: var(--blue-700);
  margin-bottom: 1rem;
`;

export default CardDetail;
