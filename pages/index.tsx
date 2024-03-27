import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import FaqSection from 'views/PricingPage/FaqSection';
import CustomBoldText from 'components/CustomBoldText';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          {/* <BasicSection imageUrl="/demo-illustration-1.svg" title="Tereny, na których Działamy" overTitle="Zakres Pracy Geodezyjnej">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p>
          </BasicSection> */}

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

          {/* <FeaturesGallery /> */}
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
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
