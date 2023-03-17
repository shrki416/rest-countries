import Button from "../Button/Button";
import styled from "styled-components";

function CardDetail({ data }) {
  const languages = Object.entries(data.languages).map(([key, value]) => (
    <span key={key}>{value}</span>
  ));

  return (
    <>
      <Button href="/">&larr; Back</Button>
      <Wrapper>
        <Flag src={data.flags.png} alt={data.flags.alt} />
        <Name>{data.name}</Name>

        <ContentWrapper>
          <DetailHeader>
            Native Name:
            <span> {data.nativeName}</span>
          </DetailHeader>
          <DetailHeader>
            Population:
            <span> {data.population}</span>
          </DetailHeader>
          <DetailHeader>
            Region:
            <span> {data.region}</span>
          </DetailHeader>
          <DetailHeader>
            Sub Region:
            <span> {data?.subregion}</span>
          </DetailHeader>
          <DetailHeader>
            Capital:
            <span> {data.capital}</span>
          </DetailHeader>
        </ContentWrapper>

        <ContentWrapper>
          <DetailHeader>
            Currency:
            <span> {data.currency}</span>
          </DetailHeader>
          <DetailHeader>
            Top Level Domain:
            <span> {data.tld}</span>
          </DetailHeader>
          <div>
            <DetailHeader>Languages: {languages}</DetailHeader>
          </div>
        </ContentWrapper>

        {data.borders.length > 0 && (
          <ContentWrapper>
            <BorderHeader>Borders Countries:</BorderHeader>
            <BorderContainer>
              {data.borders.map((border, index) => (
                <Border key={index}>{border}</Border>
              ))}
            </BorderContainer>
          </ContentWrapper>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 2.5rem 1.75rem;
  color: ${({ theme }) => theme.text};
`;

const ContentWrapper = styled.div`
  margin-bottom: 2rem;
`;

const DetailHeader = styled.p`
  padding-bottom: 1rem;
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
  font-weight: var(--fw-semi-bold);

  &:last-child {
    padding-bottom: 0;
  }

  span {
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

  margin-bottom: 1rem;
`;

const Border = styled(Button)`
  display: revert;
  margin: 0 10px 10px 0;
  cursor: pointer;
`;

const BorderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BorderHeader = styled.h2`
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  font-weight: var(--fw-regular);
  margin-bottom: 1rem;
`;

export default CardDetail;
