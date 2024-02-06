import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2.5rem 1rem 2.5rem 1rem;
  border-width: 1px 0 0 0;

  @media (min-width: 850px) {
    padding-left: 4rem;
  }
`;

const Footer = () => {
  return <Wrapper>Footer</Wrapper>;
};

export default Footer;
