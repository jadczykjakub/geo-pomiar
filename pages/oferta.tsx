import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Features from 'views/HomePage/Features';

export default function PricingPage() {
  return (
    <Page title="Nasza ofera" description="Zapoznaj się z naszą ofertą">
      <Wrapper>
        <Features />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
