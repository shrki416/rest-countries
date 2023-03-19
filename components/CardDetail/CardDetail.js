import { BREAKPOINTS, QUERIES } from "../../constants";
import { useCallback, useEffect, useState } from "react";

import Button from "../Button/Button";
import styled from "styled-components";
import { toLowerWithHyphen } from "../../utils";
import { useRouter } from "next/navigation";

function CardDetail({ data }) {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const isDesktop = width >= BREAKPOINTS.tabletMin;
  const src = isDesktop ? data.flags.svg : data.flags.png;

  const router = useRouter();

  function handleClick(e) {
    let border = e.target.textContent.toLowerCase();
    border = toLowerWithHyphen(border);
    router.push(`/country/${border}`);
  }

  return (
    <>
      <Button href="/">&larr; Back</Button>
      <Wrapper>
        <Flag src={src} alt={data.flags.alt} />
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
            <DetailHeader>
              Languages:
              <span>
                {" "}
                {data.languages && data.languages.length >= 1
                  ? data.languages.join(", ")
                  : data.languages}
              </span>
            </DetailHeader>
          </div>
        </ContentWrapper>

        {data.borders.length > 0 && (
          <BorderWrapper>
            <BorderHeader>Borders Countries:</BorderHeader>
            <BorderContainer>
              {data.borders.map((border, index) => (
                <Border key={index} onClick={(e) => handleClick(e)}>
                  {border}
                </Border>
              ))}
            </BorderContainer>
          </BorderWrapper>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 2.5rem 1.75rem;
  color: ${({ theme }) => theme.text};

  @media ${QUERIES.tabletAndUp} {
    margin-inline: 5rem;
    padding: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
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

  @media ${QUERIES.tabletAndUp} {
    width: ${560 / 16}rem;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-row: 1 / span 3;
    grid-column: 1 / span 2;
    margin: 0;
    align-self: center;
  }
`;

const Name = styled.h1`
  font-size: ${22 / 16}rem;
  line-height: ${30 / 16}rem;
  font-weight: var(--fw-extra-bold);

  margin-bottom: 1rem;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 3 / span 2;
    align-self: center;
  }
`;

const BorderWrapper = styled(ContentWrapper)`
  @media ${QUERIES.laptopAndUp} {
    grid-column: 3 / span 2;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Border = styled(Button)`
  display: revert;
  margin: 0 10px 10px 0;
  cursor: pointer;

  @media ${QUERIES.laptopAndUp} {
    margin: 0;
  }
`;

const BorderContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const BorderHeader = styled.h2`
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  font-weight: var(--fw-regular);
  margin-bottom: 1rem;

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 0;
  }
`;

export default CardDetail;
