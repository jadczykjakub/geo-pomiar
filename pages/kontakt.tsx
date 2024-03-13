import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import InformationSection from 'views/ContactPage/InformationSection';
import OverTitle from 'components/OverTitle';

export default function ContactPage() {
  return (
    <Page title="Kontakt" description="">
      <ContactContainer>
        <Wrapper>
          <h3>Email</h3>
          <p>
            <span>Email:</span> support@myawesomesaas.com
          </p>
        </Wrapper>
        <Wrapper>
          <h3>Telefon</h3>
          <p>
            <span>Email:</span> support@myawesomesaas.com
          </p>
        </Wrapper>
        <Wrapper>
          <h3>Adres</h3>
          <p>
            <span>Adres:</span> Dąbie 4, 29-145 Secemin
          </p>
        </Wrapper>
      </ContactContainer>
      <PersonContainer>
        <Wrapper>
          <OverTitle>Geodeta Uprawniony</OverTitle>
          <h3>mgr inż. Tomasz Walasek</h3>
          <div>Tutaj zdjęcie</div>
        </Wrapper>
      </PersonContainer>
      <ContactContainer>
        <Wrapper>
          <p>USŁUGI GEODEZYJNO-KARTOGRAFICZNE GEO-POMIAR WALASEK</p>
          <p>
            <span>NIP:</span> 121 121 121 1
          </p>
        </Wrapper>
      </ContactContainer>
    </Page>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
    margin-bottom: 1rem;
  }
`;

const PersonContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
