/* eslint-disable */

const meble = [
  {
    id: 1,
    name: 'Ohrensessel',
    price: 499,
    cat: 'EUR',
    src: "https://image.ibb.co/mQhyQv/krzeslo1.jpg",
    opis: 'KRZESŁO OLI\
Krzesło Oli tapicerowane ciemną ekoskórą będzie nie tylko funkcjonalnym meblem, ale również znaczącym elementem gustownej aranżacji każdej jadalni. Elegancka forma i solidna konstrukcja to niezaprzeczalne atuty tego krzesła. Wygodne siedzisko z pianką i sprężynami pozwala zasiąść przy stole w komfortowych warunkach. Uchwyt na szczycie oparcia ułatwia odsuwanie krzesła. '
  },
  {
    id: 2,
    name: 'Sessel Sofie',
    price: 249,
    cat: 'EUR',
    image: 'images/02.jpg',
    src: "https://image.ibb.co/de9ZyF/krzeslo2.jpg",
    opis: 'KRZESŁO CARE\
Krzesło Care tapicerowane jasną ekoskórą będzie nie tylko funkcjonalnym meblem, ale również znaczącym elementem gustownej aranżacji jadalni. Elegancka forma i solidna konstrukcja to niezaprzeczalne atuty tego krzesła. Nogi w kontrastowym kolorze wenge dodają mu jeszcze więcej stylu. Wygodne siedzisko z pianką i sprężynami pozwala zasiąść przy stole w komfortowych warunkach. Uchwyt na szczycie oparcia ułatwia odsuwanie krzesła.'
  },
  {
    id: 3,
    name: 'Schlsel Rovigo',
    price: 239,
    cat: 'meble ogrodowe',
    image: 'images/04.jpg',
    src: "https://image.ibb.co/iLH9Xa/krzeslo3.jpg",
    opis: 'KRZESŁO PRIMA\
Krzesło Prima to połączenie niebanalnej formy i nowoczesnych detali. Chromowany stelaż pięknie komponuje się z beżową ekoskórą. Charakterystyczne pikowania na siedzisku i oparciu stanowią przyjemny akcent. Solidne wykonanie i komfort siedzenia to niezaprzeczalne atuty prezentowanego krzesła. Doskonale sprawdzi się w minimalistycznych pomieszczeniach – w salonie lub jadalni.\
OPARCIE\
Charakterystyczna, ergonomiczna linia oparcia sprawia, że mebel doskonale się prezentuje i optymalnie podpiera plecy.'
  },
  {
    id: 4,
    name: 'Sessel Little',
    price: 119,
    cat: 'EUR',
    image: 'images/06.jpg',
    src: "https://image.ibb.co/cJPCkv/krzeslo4.jpg",
    opis: 'Proste krzesło Paola, którego oparcie i stelaż wykonano z litego drewna bukowego w czekoladowym wybarwieniu. Dzięki temu twoje wnętrze będzie prezentowało się gustownie. Miękkie tapicerowane siedzisko w wprowadza efekt kontrastu, który pozwoli ci uzyskać wyrazisty wystrój jadalni. Wysokie szczebelkowe oparcie dodaje lekkości i ułatwia podnoszenie mebla.'
  },
  {
    id: 5,
    name: 'Sessel Peacock',
    price: 599,
    cat: 'EUR',
    image: 'images/05.jpg',
    src: "https://image.ibb.co/fPNbCa/krzeslo5.jpg",
    opis: 'Tapicerowane krzesło Vievien z wysokim oparciem charakteryzuje się prostą i elegancką formą. Salon, ale także jadalnia to serce domu, dlatego warto wybrać najbardziej stylowe, ale i praktyczne rozwiązanie. Odpowiednio dobrane krzesła mają wpływ na klimat całej aranżacji. Drewniane krzesło Vievien ze względu na łagodną i harmonijną stylistykę doskonale nadaje się do eleganckich domowych wnętrz. Połączenie ciepłej, głębokiej barwy z wyrazistą strukturą drewna dodaje meblowi elegancji i nowoczesności.'
  },
  {
    id: 6,
    name: 'Sessel Anna',
    price: 149,
    cat: 'EUR',
    image: 'images/03.jpg',
    src: "https://image.ibb.co/hD9Osa/krzeslo6.jpg",
    opis: 'Krzesło Flos to kwintesencja nowoczesnej formy. Chromowana podstawa oraz piękna czarna ekoskóra idealnie pasują do minimalistycznych pomieszczeń. Uniwersalna kolorystyka sprawia, że krzesło świetnie komponuje się z innymi kolorami, co daje duże możliwości w kwestii komponowania własnych aranżacji. Walory wizualne łączą się z wygodą i solidnością wykonania krzesła. Idealny mebel do Twojej jadalni lub biura'
  },
  { id: 7,
    name: 'Josslyn',
    price: 499 ,
    cat: 'meble ogrodowe' ,
    src: "https://image.ibb.co/jYp1dF/krzeslo7.jpg",
    opis:'Drewniane krzesło tapicerowane w kolorze coffe będzie elegancką ozdobą każdego gustownego wnętrza. Kontrastowa nić na krawędziach podkreśla linię mebla. Krzesło w stonowanej, głębokiej kolorystyce będzie doskonałe do salonu lub jadalni.' 
  },
  {
    id: 8, 
    name: 'Sessel', 
    cat: 'krzeslo kuchnia', 
    price: 122, 
    stocked: '1',
    src: "https://image.ibb.co/caCbCa/krzeslo8.jpg",
    opis: 'Eleganckie krzesło tapicerowane wykonane z drewna kauczukowego tworzy harmonijne połączenie z jasnym miękkim siedziskiem obitym tkaniną. Solidne krzesło z poprzecznymi listewkami przy nogach, które sprawiają, że mebel jest stabilny. Delikatnie wyprofilowane oparcie zwiększa komfort użytkownika. Starannie wykończone dekoracyjne szczebelki ułatwią przesuwanie krzesła. Idealny mebel do jadalni lub salonu.'
   },
   {
     id: 9,
     name:'Rovigo', 
     cat:'krzeslo obrotowe', 
     price:244, 
     stocked:'1',
     src: "https://image.ibb.co/mrWEyF/krzeslo9.jpg",
     opis: "Klasyczne i bardzo eleganckie krzesło tapicerowane jasną tkaniną o ozdobnej górnej krawędzi oparcia w antycznym stylu i \
            drewnianym wykończeniu w kolorze czereśni. Naturalne piękno drewna, pozwala stworzyć wnętrze z klasą. \
            Głęboki ciepły kolor sprawi, że będziesz czuł się doskonale w swoim domu. Smukłe nogi i ryflowane \
            krawędzie boczne oparcia dodają meblowi elegancji i wytworności. Twój salon lub jadalnia mogą wyglądać dostojnie i stylowo.\
             Proponujemy solidny i stateczny mebel, który będzie ci służył przez wiele lat." 
  }
];


                    
export default meble;
