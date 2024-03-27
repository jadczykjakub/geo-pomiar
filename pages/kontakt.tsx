import styled from 'styled-components';
import NextImage from 'next/image';
import Page from 'components/Page';
import { media } from 'utils/media';
import OverTitle from 'components/OverTitle';
import Link from 'components/Link';

export default function ContactPage() {
  return (
    <Page title="Kontakt" description="">
      <ContactContainer>
        <Wrapper>
          <NextImage src={'/svg/email.svg'} width={40} height={40} alt={'email icon'} />
          <h3>Email</h3>
          <Link
            href="mailto:geopomiarwalasek@gmail.com
"
          >
            geopomiarwalasek@gmail.com
          </Link>
        </Wrapper>
        <Wrapper>
          <NextImage src={'/svg/phone.svg'} width={40} height={40} alt={'phone icon'} />

          <h3>Telefon</h3>
          <Link href="tel:790875337">790 875 337</Link>
        </Wrapper>
        <Wrapper>
          <NextImage src={'/svg/address.svg'} width={40} height={40} alt={'address icon'} />

          <h3>Adres</h3>
          <Link href="/" target="_blank">
            Dąbie 4, 29-145 Secemin
          </Link>
        </Wrapper>
      </ContactContainer>
      <PersonContainer>
        <Wrapper>
          <OverTitle>Geodeta Uprawniony</OverTitle>
          <h3>mgr inż. Tomasz Walasek</h3>
          <NextImage src="/images/tomunia.png" width={321} height={231} alt="tomunia" objectFit="contain" />
        </Wrapper>
      </PersonContainer>
      <ContactContainer>
        <Wrapper>
          <p>USŁUGI GEODEZYJNO-KARTOGRAFICZNE GEO-POMIAR WALASEK</p>
          <p>{/* <span>NIP:</span> 121 121 121 1 */}</p>
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

  a,
  p {
    font-size: 1.6rem;
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
    margin-bottom: 1rem;
  }
`;

const PersonContainer = styled.div`
  display: flex;
  margin-top: 8rem;

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
