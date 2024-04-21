import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';

export default function Delivery() {
  return (
    <Wrapper>
      <CustomOverTitle>Udana współpraca </CustomOverTitle>
      <SectionTitle>Zapewniamy bezpłatną wycenę oraz dojazd</SectionTitle>
    </Wrapper>
  );
}

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
  text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 15rem;
  padding: 20px;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
