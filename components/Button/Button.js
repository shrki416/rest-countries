import { QUERIES } from "../../constants";
import styled from "styled-components";

export default function Button({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
}

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.accent};
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  box-shadow: 0 0 7px 0 hsla(0, 0%, 0%, 0.1);
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-light);
  display: block;
  width: max-content;
  margin: 1.5rem 1rem 2.5rem;

  @media ${QUERIES.tabletAndUp} {
    margin-inline: 5rem;
  }
`;
