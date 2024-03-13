import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import SectionTitle from 'components/SectionTitle';

const FEATURES1 = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Podziały nieruchomości',
    description:
      'Jeśli rozważasz podział swojej nieruchomości na mniejsze działki, nasza firma zapewni Ci profesjonalne wsparcie na każdym etapie tego procesu. Możesz mieć pewność, że podział zostanie przeprowadzony szybko, zgodnie z obowiązującymi przepisami i z najwyższą dokładnością.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Rozgraniczenia nieruchomości',
    description:
      'Postępowanie to wykonujemy jeśli wyniknie spór co do położenia ustalanej granicy. W szczególności w sytuacji, w której różne źródła, takie jak mapy ewidencyjne lub dokumenty zawarte w księgach wieczystych, wskazują sprzeczny przebieg granicy między nieruchomościami. Postępowanie rozgraniczeniowe ma na celu ustalenie na nowo przebiegu granicy.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Ustalenie przebiegu granic działek ewidencyjnych, wznowienie znaków granicznych, wyznaczenie punktów granicznych',
    description:
      'Warto znać granicę swojej nieruchomości, wiedza ta jest niezbędna przy wykonywaniu wszelkich inwestycji (stawianie płotów, altan, budowa domu czy budynku gospodarczego). Jeśli chcesz uniknąć w przyszłości sporów granicznych zadzwoń, przeanalizujemy wszelką dokumentację geodezyjną, dokładnie określimy położenie punktów granicznych i oznaczymy je w terenie.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Badanie stanu prawnego nieruchomości',
    description:
      'Ustalimy dla Ciebie czy dana nieruchomość posiada założoną księgę wieczystą lub zbiór innych dokumentów. W przypadku ich braku zbadamy czy istnieją inne materiały określające prawo własności np: akty własności ziemi, akty notarialne kupna-sprzedaży, decyzje administracyjne prawomocne postanowienia sądowe. W razie potrzeby sporządzimy protokół badania księgi wieczystej.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: ' Przygotowanie dokumentacji do celów prawnych',
    description:
      'Sporządzimy dla ciebie dokumentację do celów prawnych niezbędną przy wykonywaniu czynności prawnych związanych z użytkowaniem wieczystym, użytkowaniem, uwłaszczeniem, zasiedzeniem, wywłaszczeniem, służebnością gruntową itp.',
  },
];

const FEATURES2 = [
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Mapy do celów projektowych.',
    description:
      'Dla naszych klientów (inwestorów, architektów i inżynierów) wykonujemy mapy do celów projektowych, które uwzględniają specyficzne wymogi danego przedsięwzięcia. Opracowanie dostarcza informacji o ukształtowaniu terenu, lokalizacji istniejących obiektów, sieci infrastruktury oraz innych elementów istotnych dla planowania i projektowania',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Niwelacje terenu',
    description:
      'Wykonamy dla Ciebie pomiary wysokościowe, polegające na wyznaczeniu różnicy wysokości pomiędzy punktami terenowymi względem poziomu odniesienia. Obliczymy objętość mas ziemnych.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Tyczenie budynków, przyłączy oraz sieci uzbrojenia terenu',
    description:
      'Tyczenie to zespół czynności pomiarowych (geodezyjnych) mających na celu wskazanie w terenie lub na realizowanym obiekcie punktów o założonym położeniu w układzie odniesienia oraz oznaczenie tych punktów w sposób tymczasowy lub trwały.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Inne pomiary sytuacyjno-wysokościowe',
    description: '',
  },
];

const FEATURES3 = [
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Inwentaryzacje budynków, przyłączy, sieci uzbrojenia terenu oraz innych obiektów budowlanych',
    description:
      'Sporządzimy dla Ciebie niezbędną dokumentację geodezyjną potrzebną do zakończenia procesu budowlanego. Podczas prac wykonamy pomiary sytuacyjnowysokościowe, dzięki którym zbierzemy dokładne dane o przestrzennym rozmieszczeniu elementów zagospodarowania terenu objętego zamierzeniem budowlanym i sporządzimy dokumentację geodezyjną zawierającą wyniki tych pomiarów, w tym mapę z inwentaryzacji powykonawczej obiektu budowlanego. Dzięki tym dokumentom możliwe będzie naniesienie na mapę zasadniczą nowo wybudowanych obiektów',
  },
];

export default function Features() {
  return (
    <CustomContainer>
      <Wrapper>
        <CustomSectionTitle>Prace związane z regulacją stanu prawnego nieruchomości</CustomSectionTitle>
        <CustomAutofitGrid>
          {FEATURES1.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>

      <Wrapper>
        <CustomSectionTitle>Prace związanie z obsługą procesu budowlanego</CustomSectionTitle>
        <CustomAutofitGrid>
          {FEATURES2.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
      <Wrapper>
        <CustomSectionTitle>Prace inwentaryzacyjne i powykonawcze</CustomSectionTitle>
        <CustomAutofitGrid>
          {FEATURES3.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </CustomContainer>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 5rem;
`;

const CustomSectionTitle = styled(SectionTitle)`
  font-size: 3.2rem;
`;

const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
