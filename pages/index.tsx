import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Hero from 'views/HomePage/Hero';
import CustomBoldText from 'components/CustomBoldText';
import Delivery from 'components/Delivery';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="Firma geodezycjna Geo-Pomiar Walasek"
          content="Firma geodezyjna, powiat Włoszczowski, usługi geodezyjne, pomiary terenowe, mapa geodezyjna, doradztwo geodezyjne"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/images/road.png" title="Powiaty, na których działamy" overTitle="Zakres Pracy Geodezyjnej">
            <p>Zasięg naszych prac obejmuje powiaty:</p>
            <ul>
              <li>Włoszczowski</li>
              <li>Jędrzejowski</li>
              <li>Kielecki</li>
              <li>Częstochowski</li>
              <li>Zawierciański</li>
              <li>Myszkowski</li>
              <li>Miechowski</li>
              <li>Olkuski</li>
              <li>Radomszczański</li>
            </ul>
            <p>Większe prace wykonujemy na terenie całej Polski</p>
          </BasicSection>
          <BasicSection imageUrl="/images/tomunia.png" title="mgr inż. Tomasz Walasek" overTitle="Geodeta uprawniony" reversed>
            <div>
              Przedsiębiorstwem kieruje geodeta uprawniony{' '}
              <CustomBoldText>
                mgr inż. Tomasz Walasek, absolwent Akademii Górniczo Hutniczej w Krakowie oraz Politechniki Świętokrzyskiej
              </CustomBoldText>
              . Doświadczenie zdobywał w największych firmach geodezyjnych w kraju i udokumentował je zdobywając uprawnienia geodezyjne z
              zakresu 1 oraz 2
              <ul>
                <li>„Geodezyjne pomiary sytuacyjno-wysokościowe, realizacyjne i inwentaryzacyjne”</li>
                <li>„Rozgraniczanie i podziały nieruchomości (gruntów) oraz sporządzanie dokumentacji do celów prawnych”</li>
              </ul>
              Posiada również wiedzę z zakresu obsługi baz danych, potwierdzoną ukończeniem studiów podyplomowych na AGH w Krakowie.
            </div>
          </BasicSection>
          <BasicSection
            imageUrl="/images/shake.png"
            title="Firma, której możesz zaufać "
            overTitle="Zaangażowanie, precyzja, doświadczenie"
          >
            <div>
              Nasze projekty wykonujemy z pełnym zaangażowaniem, zwracając szczególną uwagę na indywidualne potrzeby klientów{' '}
              <CustomBoldText>Oferujemy atrakcyjne ceny i szybką realizację zleceń.</CustomBoldText> <p>Zapewniamy: </p>
            </div>
            <ul>
              <li>Bezpłatną wycene</li>
              <li>Dojazd do klienta</li>
              <li>Doradztwo techniczne</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>

        <DarkerBackgroundContainer>
          <Cta />
          <Delivery />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
