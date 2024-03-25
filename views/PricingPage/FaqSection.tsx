import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Często zadawane pytania</SectionTitle>
      <Accordion title="Czy istnieje możliwość wyznaczenia innego miejsca spotkania niż w siedzibie firmy GEO-POMIAR WALASEK?">
        Tak, jak najbardziej, oferujemy dojazd na miejsce wyznaczone przez Klienta i wykonanie bezpłatnej wyceny prac geodezyjnych.
      </Accordion>
      <Accordion title="W jakich przypadkach potrzebne Ci będą usługi geodety?">
        <ul>
          <li>Planujesz ustalić rzeczywisty przebieg granic swojej nieruchomości</li>
          <li>
            Planujesz podzielić działkę. Geodeta będzie niezbędny do sporządzenia mapy z projektem podziału nieruchomości oraz wyznaczenia
            zatwierdzonego podziału w terenie
          </li>
          <li>
            Planujesz budowę lub przebudowę budynku na swojej działce. Geodeta sporządzi mapę do celów projektowych, następnie wytyczy
            budynek wraz z przyłączami zgodnie z projektem zagospodarowania terenu, finalnie dokona inwentaryzacji powykonawczej obiektów
          </li>
          <li>
            Planujesz uzbroić swoją działkę lub przebudować istniejące przyłącza sieci uzbrojenia terenu. Geodeta wykonA geodezyjną
            inwentaryzację powykonawczą nowych przyłączy
          </li>
        </ul>
      </Accordion>
      <Accordion title="Otrzymałem zawiadomienie, o ustaleniu granic/wznowieniu znaków granicznych/ wyznaczeniu punktów granicznych. Co takie zawiadomienie oznacza?">
        Zawiadomienie, które Pan/Pani otrzymał oznacza, iż granice Pana/Pani działki będą ustalane w terenie. O czynnościach podjętych w
        celu ustalenia przebiegu granic działek ewidencyjnych wykonawca zawiadamia wszystkich właścicieli oraz użytkowników wieczystych tych
        działek, a także osoby władające tymi działkami na zasadach samoistnego posiadania. Zawiadomienie o czynnościach podjętych w celu
        ustalenia przebiegu granic działek ewidencyjnych zawiera następujące informacje:
        <ul>
          <li>dzień, godzinę i miejsce rozpoczęcia czynności</li>
          <li>
            oznaczenia i ewentualne dane adresowe działek ewidencyjnych, których będą dotyczyć czynności, a także numery ksiąg wieczystych,
            jeżeli księgi takie są prowadzone dla tych działek
          </li>
          <li>
            pouczenie o konieczności posiadania dokumentu umożliwiającego ustalenie tożsamości osoby deklarującej swój udział w tych
            czynnościach oraz o tym, że udział ustaleniu leży w interesie podmiotu i że nieusprawiedliwione niestawiennictwo nie będzie
            stanowić przeszkody do ich przeprowadzenia
          </li>
        </ul>
      </Accordion>
      <Accordion title="Na jakich etapach budowy potrzebujesz geodety?">
        Bez udziału geodety nie można ani rozpocząć, ani zakończyć budowy. Przed wykonaniem czynności związanych z budową domu bardzo ważne
        jest uregulowanie stanu prawnego nieruchomości. Następnie trzeba sporządzić mapę do celów projektowych, na podstawie tego dokumentu
        powstaje projekt zagospodarowania terenu. Następnym krokiem jest wytyczenie położenia projektowanego obiektu w terenie. W trakcie
        trwania budowy geodeta często prowadzi pomiary kontrolne, mające na celu sprawdzenie zgodności powstającego budynku z projektem. Po
        wybudowaniu obiektu geodeta wykonuje pomiar powykonawczy, kontroluje jeszcze raz zgodność powstałej inwestycji z projektem oraz
        sporządza mapę z inwentaryzacji. Podsumowując geodeta pełni bardzo istotną funkcję podczas większości etapów budowy domu
        jednorodzinnego.
      </Accordion>
      <Accordion title="Gdzie szukać informacji o minimalnej powierzchni działki budowlanej">
        Informacji o minimalnej powierzchni działki budowlanej trzeba szukać w miejscowym planie zagospodarowania przestrzennego (MPZP)
        sporządzonym dla danego terenu.
      </Accordion>
      <Accordion title="Czym jest mapa do celów projektowych?">
        Mapa do celów projektowych jest to opracowanie kartograficzne, wykonane z wykorzystaniem wyników pomiarów geodezyjnych i materiałów
        państwowego zasobu geodezyjnego i kartograficznego, zawierające elementy stanowiące treść mapy zasadniczej, a także informacje
        niezbędne do sporządzenia dokumentacji projektowej. Mapa ta jest bazą dla sporządzenia przez projektanta Projektu Zagospodarowania
        Działki lub Terenu, czyli wskazania położenia budynku, dojść i dojazdów, miejsc postojowych, terenów zielonych, miejsc segregacji
        odpadów i innych urządzeń niezbędnych do prawidłowego funkcjonowania budynku
      </Accordion>{' '}
      <Accordion title="Jak długo ważna jest mapa do celów projektowych?">
        Mapa do celów projektowych jest aktualna do czasu, aż nie zmieni się nic na obszarze, który mapa obejmuje
      </Accordion>{' '}
      <Accordion title="Co jest potrzebne do wytyczenia budynku?">
        Tyczenie odbywa się w oparciu o opracowany projekt zagospodarowania działki, terenu oraz inne dokumenty zawarte w projekcie
        architektoniczno-budowlanym takie jak np. rysunki rzutów fundamentów lub parteru
      </Accordion>{' '}
      <Accordion title="Dlaczego mapa do celów projektowych powinna być aktualna i zgodna z sytuacją w terenie?">
        Mapa do celów projektowych jest szczególnym rodzajem mapy, który rozpoczyna proces inwestycyjny. Jej aktualność jest rzeczą
        podstawową i gwarantuje, iż przyszła inwestycja nie będzie kolidowała z istniejącą sytuacją terenową.
      </Accordion>{' '}
      <Accordion title="W jakiej odległości od granicy działki mogę wybudować budynek?">
        Budynek na działce budowlanej należy sytuować w odległości od granicy tej działki nie mniejszej niż:
        <ul>
          <li>4 m w przypadku budynku zwróconego ścianą z oknami lub drzwiami w stronę granicy</li>
          <li>3 m w przypadku budynku zwróconego ścianą bez okien i drzwi w stronę granicy</li>
        </ul>
        Ponadto, sytuowanie budynku, w niektórych przypadkach dopuszcza się w odległości 1,5 m od granicy lub bezpośrednio przy tej granicy,
        jeżeli plan miejscowy przewiduje taką możliwość.
      </Accordion>{' '}
      <Accordion title="W jakiej odległości od granicy działki mogą być położony taras, balkon?">
        Odległość od granicy działki budowlanej nie może być mniejsza niż:
        <ul>
          <li>
            1,5 m do okapu lub gzymsu zwróconego w stronę tej granicy, a także do balkonu, daszku nad wejściem, galerii, tarasu, schodów
            zewnętrznych, rampy lub pochylni – z wyjątkiem pochylni przeznaczonych dla osób niepełnosprawnych
          </li>
          <li>4 m do okna umieszczonego w dachu zwróconego w stronę tej granicy</li>
        </ul>
      </Accordion>{' '}
      <Accordion title="Chcę zlokalizować swój przyszły budynek w odległości 4 metrów od granicy (w przypadku ściany z oknami) oraz 3 metrów (w przypadku ściany bez okien). Czy ma to wpływa na zleconą mapę do celów projektowych?">
        Tak, lokalizacja budynku w minimalnych dopuszczalnych odległościach od granicy działki sąsiedniej, obliguje geodetę do sporządzenia
        mapy do celów projektowych, po wcześniejszej analizie dokumentów dotyczących przebiegu granic działki oraz położenia punktów
        granicznych i ewentualnego przeprowadzenia ustaleń granic działek ewidencyjnych.
      </Accordion>{' '}
      <Accordion title="Kiedy wykonuje się geodezyjną inwentaryzację powykonawczą?">
        Geodezyjną inwentaryzację powykonawczą wykonuje się po zakończeniu budowy poszczególnych obiektów budowlanych. Celem geodezyjnej
        inwentaryzacji powykonawczej jest zebranie aktualnych danych o przestrzennym rozmieszczeniu usytuowania budynków oraz elementów
        zagospodarowania działki, takich jak wjazdy, parkingi
      </Accordion>{' '}
      <Accordion title="Kiedy należy zinwentaryzować przyłącze?">
        Pomiar położenia na gruncie wykonanych przyłączy podziemnych powinien zostać zrealizowany przed ich zasypaniem.
      </Accordion>{' '}
      <Accordion title="Gdzie znajdują się Księgi Wieczyste?">
        Papierowe księgi wieczyste znajdziemy w Wydziale Ksiąg Wieczystych Sądu Rejonowego odpowiedniego dla lokalizacji nieruchomości.
        Obecnie treść księgi wieczystej można sprawdzić także na stronie ekw.ms.gov.pl. Tutaj wyszukasz księgę, jeśli znasz jej numer.
      </Accordion>{' '}
      <Accordion title="Co to jest Decyzja o Warunkach Zabudowy i Zagospodarowania Terenu?">
        Jeżeli na danym terenie nie ma uchwalonego Miejscowego Planu Zagospodarowania Przestrzennego, to właśnie decyzja o Warunkach
        Zabudowy i Zagospodarowania Terenu reguluje zmiany w sposobie zagospodarowania działki. Decyzja zawiera informacje m. in. o
        dopuszczalnej liczbie kondygnacji, wysokości budynku, powierzchni jego zabudowy czy umiejscowieniu na działce. Podsumowując taki
        dokument określa zasady, w oparciu o które można budować w danej lokalizacji
      </Accordion>{' '}
      <Accordion title="Co to jest postanowienie opiniujące wstępny projekt podziału nieruchomości?">
        Jest to dokument wydany przez Urząd Gminy, na wniosek właściciela bądź użytkownika wieczystego działki, zezwalający bądź odmawiający
        realizacji podziału nieruchomości. Urząd Gminy analizuje przedstawioną dokumentację i wydaje opinię o zgodności proponowanego
        podziału z Miejscowym Planem Zagospodarowania Przestrzennego.
      </Accordion>{' '}
      <Accordion title="Jak dowiedzieć się jakie są granice danej nieruchomości?">
        Jeśli nie wiesz gdzie przebiegają granicę Twojej działki zadzwoń. W oparciu o dokumentację udostępnioną z Ośrodka Dokumentacji
        Geodezyjnej i kartograficznej przeprowadzimy stosowne pomiary i zlokalizujemy położenie punktów granicznych.
      </Accordion>{' '}
      <Accordion title="Co to jest mapa do celów prawnych?">
        Mapy do celów prawnych to specjalistyczne opracowania kartograficzne, wykonane przez geodetę uprawnionego z zakresu 2, które
        przedstawiają przebieg granic nieruchomości, potrzebne dane z ksiąg wieczystych oraz z ewidencji gruntów i budynków. Najczęściej
        sporządza się mapy do spraw o ustanowienie drogi koniecznej, zasiedzenie, ustanowienie służebności przesyłu lub do spraw
        o zniesienie współwłasności.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  padding: 20px;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
