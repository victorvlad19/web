---
title: "Proiecte"
meta_title: ""
description: ""
draft: false
---

> ### ️Prezentare generală
> Detalii despre evaluare:
> - <a href="https://profs.info.uaic.ro/~andrei.panu/courses/web/web-exam.html" target="_blank">Aspecte privind evaluarea activităţii </a>
> - <a href="https://profs.info.uaic.ro/~andrei.panu/courses/web/web-projects.html" target="_blank">Detalii despre proiectele practice </a>
> - <a href="https://docs.google.com/document/d/1Gmnx1RRssG87u3EmarKP93LToxGH5KpM3XxTaMsSO3I/edit" target="_blank">Întrebări frecvente </a>
>
> <b>Maxim 8 echipe per tema de proiect</b>, cu echipe compuse din 2 persoane din grupele conduse de același responsabil de laborator.
>



<blockquote class="slides">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXD276_hTvVBhd5JpSDOUjo0Kgld4FRsk8cUdyOvpi8RQGcg/viewform" class="slides-link">Inscriere echipa</a>
    <span> | </span>
    <a href="https://docs.google.com/spreadsheets/d/13DSgykyj3bkE4gdSGoY6NJyvKhzXggcDOJcR9RFLK00/edit?usp=sharing" class="slides-link">Echipe inscrise</a>
</blockquote>




<div style={{marginTop: "30px"}}></div>

#### <span> <b >1. </b> <b>DeAd</b> (Detention Admin) </span>

Sa se dezvolte o aplicatie Web pentru gestiunea vizitelor de care beneficiaza persoanele
condamnate la executarea unei pedepse intr-un penitenciar sau intr-o casa de corectie.
Fiecarei vizite i se vor atasa informatii privind individul ori indivizii care efectueaza
vizita -- minimal, se vor considera: identitatea, fotografia, relatia cu condamnatul
(ruda, tutore legal, avocat, prieten), natura vizitei. 

De asemenea, vor fi consemnate: data realizarii intrevederii, natura si durata acesteia
(e.g., consultare privind recursul procesului, vizita amicala), posibile obiecte/date
furnizate condamnatului sau oferite de condamnat vizitatorului/vizitatorilor,
rezumatul discutiilor efectuate (daca nu e incalcata confidentialitatea),
starea de sanatate si de spirit a detinutului, martorul/martorii la intalnire etc.
Sistemul Web implementat va genera statistici -- documente HTML, CSV si JSON -- vizand
vizitele realizate per individ, perioada de timp, in functie de categoria pedepsei
savarsite sau alte criterii. Functionalitatile esentiale vor fi oferite si prin
intermediul unui API Web REST/GraphQL.

---

#### <span> <b>2. </b> <b>FrOW</b> (Fruits On The Web) </span>

Pe baza datelor privind imagini de legume + fructe, sa se realizeze un joc Web educativ
– cu scenariu, miza si conditii de victorie/infrangere stabilite de echipa –
destinat elevilor din clasele primare. Jocul in sine, nivelurile de dificultate si
stabilirea scorului, se vor implementa via un API REST/GraphQL.
Clasamentul celor mai buni jucatori va fi disponibil si ca flux RSS.

<b>Bonus:</b> se vor avea in vedere aspecte precum internationalizarea si accesibilitatea.

---

#### <span> <b>3. </b> <b>MaWA</b> (Make-up Web Assistant) </span>

Sa se realizeze o aplicatie Web ce ofera – pe baza unui API REST/GraphQL propriu –
sfaturi privitoare la realizarea machiajului in functie de varsta, ten, ocazie,
moment al zilei etc. Aceste sfaturi/recomandari vor fi realizate pe baza produselor
specifice (e.g., creme, fonduri de ten, rujuri, creioane dermatografe,...) oferite de
diverse companii. Se vor lua in consideratie preferintele utilizatorilor.
Se va genera, de asemenea, un clasament – disponibil in formatele HTML, RSS si PDF –
al celor mai populare produse pe categorii de varsta, gen, pozitie sociala, localitate
si altele.

---

#### <span> <b>4. </b> <b>Boo</b> (Book Reviewer) </span>

Se doreste crearea unei aplicatii Web care – pe baza unui API REST/GraphQL propriu –
permite specificarea progresului si exprimarea opiniilor/adnotarilor referitoare la
lecturile realizate de o persoana sau grup de persoane (e.g., o clasa de elevi, un club).
Sistemul va realiza managementul cartilor parcurse, inclusiv organizarea lor pe diverse
criterii: categorie, autor(i),
editura, an, editie, legaturi cu alte carti inrudite etc.

Se vor oferi statistici diverse ce pot fi exportate in formate deschise
(minimal, CSV si DocBook). Diversele anunturi (o persoana a recenzat o carte, a aparut
un alt volum de interes, modificarea clasamentului celor mai apreciate lucrari dintr-un
anumit domeniu etc.) vor fi expuse ca flux de stiri RSS.

Inspiratie: <a href="https://www.goodreads.com/" >Goodreads</a>.

---

#### <span> <b>5. </b> <b>SoRe</b> (Souvenir Web Recommender) </span>

Sa se implementeze o aplicatie Web destinata persoanelor care realizeaza voiajuri
incluzand mai multe regiuni/tari in vederea managementului si recomandarii	de suveniruri
pentru fiecare teritoriu vizitat (e.g., celor ce au trecut prin Australia li se poate
sugera achizitionarea unui bumerang). Recomandarile se pot realiza si in functie de
cultura si/sau de obiceiurile locale, de perioada desfasurarii vizitei (bunaoara, celor
care au tranzitat Romania in februarie–martie li se pot indica martisoare) si de
profilul persoanelor ce vor beneficia de suveniruri: familie, prieteni,
cunostinte, colegi de scoala/serviciu (din partea nepotului care tocmai s-a intors de la
Paris, 	bunica ar fi incantata sa primeasca un bibelou de portelan infatisand turnul
Eiffel, pe cand copilul celui mai bun prieten al acestuia ar prefera o jucarie
tehnologica prin preajma Palais de la découverte).

Lista suvenirurilor recomandate va fi disponibila in formatele HTML, CSV, JSON si XML.
De asemenea, via un serviciu cartografic public se vor figura pe harta puncte de interes
de unde se pot achizitiona suveniruri. Functionalitatile esentiale se vor oferi si de
catre un API propriu REST sau GraphQL.

---

#### <span> <b>6. </b> <b>PoST</b> (Poem Smart Translator) </span>

Sa se realizeze o aplicatie Web de traducere de poeme comentate de mai multi utilizatori.
Se va putea furniza traducerea unui (fragment dintr-un) anumit poem intr-o limba in alta,
impreuna cu comentariile aferente. Sistemul va oferi suport pentru efectuarea adnotarilor
pentru fiecare poem in parte, cu posibilitatea exportului pe o platforma sociala, precum
<a href="https://www.tumblr.com/docs/en/api/v2" >Tumblr</a> sau
<a href="https://developer.wordpress.org/rest-api/">WordPress</a>, pe baza API-urilor publice disponibile.
Se vor oferi statistici de interes privind activitatile desfasurate (e.g., cel mai activ
traducator, cele mai comentate poezii,...). Noile traduceri disponibile vor fi expuse
via un flux de stiri RSS. Functionalitatile esentiale se vor oferi si de catre un API
propriu dezvoltat conform stilului arhitectural REST sau GraphQL.

---

#### <span> <b>7. </b> <b>HeMa</b> (Herbal Web Manager) </span>

Sa se implementeze o aplicatie Web de tip ierbar digital, oferind suport pentru
organizarea colectiilor reprezentarilor grafice ale plantelor presate si atributelor
aferente. Pe baza facilitatilor de cautare multi-criteriala, se vor genera, recomanda
si partaja albume tematice – e.g., plante medicinale, flori din zona montana si altele.
Pentru fotografiii de interes a se considera API-uri publice precum
<a href="https://unsplash.com/developers"> Unsplash </a>.
Se vor genera statistici diverse disponibile in formate deschise – minimal, CSV si PDF.
Se va crea, de asemenea, un clasament al celor mai populare plante colectate, disponibil
si ca flux de date RSS.

---

#### <span> <b>8. </b> <b>FePA</b> (Feral Presence Adviser) </span>

Se doreste implementarea unui sistem bazat pe servicii Web de raportare a
animalelor (i.e. rinocerilor, pterodactililor) fara stapan "activand" intr-o
anumita arie de interes (e.g., oras, cartier, zona rezidentiala, campus studentesc, gradina)
cu posibilitatea includerii unei/unor fotografii, descrieri, tag-uri, diverse aspecte
aditionale -- de exemplu, semnalarea parasirii adapostului, pericolul de turbare ori
manifestarea unui comportament violent etc. Aplicatia Web va realiza statistici
referitoare la situatia animalelor (pe zile/zone, daca au fost infiate/dresate/eutanasiate, grad de pericol, specii si, eventual, altele)
in formate precum HTML, CSV si PDF. Fiecare nou raport introdus va fi disponibil
si ca flux de stiri RSS.

<b>Bonus:</b> Generarea de minim 3 vizualizari concludente.
Citeste mai multe <a href="https://profs.info.uaic.ro/~busaco/teach/courses/hci/presentations/hci08-DataVisualization.pdf" >aici </a>

---

#### <span> <b>9. </b> <b>RoT</b> (Romanian Traffic Signs Tutor) </span>

Sa se dezvolte o aplicatie Web care pe baza unui API Web REST/GraphQL ofera suport
pentru invatarea semnelor rutiere si a regulilor de circulatie din tara noastra si
altele europene. Pentru fiecare (categorie de) semne, se vor pune la dispozitie informatii
precum semnificatia, tipul, regulamentele in vigoare, relatii cu alte semne de interes,
sfaturi practice, contextul de utilizare, plus sugestii privind comportamentul
soferului/pietonului. Via strategii ludice (e.g., gamification), solutia realizata va
monitoriza progresul inregistrat de fiecare utilizator in procesul de invatare, eventual
structurata pe niveluri de dificultate. Se va genera, de asemenea, un clasament al celor
mai sarguinciosi utilizatori, disponibil si ca flux de date RSS.

<b>Resurse:</b> <a href="https://www.codrutier.ro/">Codul rutier din Romania</a> + <a href="https://www.wikiwand.com/en/Comparison_of_European_road_signs">Comparison of European road signs</a>.

<b>Bonus:</b> recurgerea la servicii externe precum <a href="https://alternativeto.net/software/waze/">Waze si alternativele</a>.

---

#### <span> <b>10. </b> <b>DeWR</b> (Device Web Recommender) </span>

Pe baza unui API REST ori GraphQL propriu, realizati o aplicatie Web – de dorit,
disponibila ca extensie de navigator Web – care recomanda utilizatorilor autentificati
sau nu diverse dispozitive electronice (telefoane, tablete, ceasuri, drone,...)
in functie de pret ori alte caracteristici – e.g., model similar, facilitati, culoare,
autonomie etc. Datele analizate vor fi preluate din surse multiple (fluxuri de stiri,
API-uri disponibile, via scraping) oferite de situri de profil ce vor putea fi precizate
de utilizator. Statisticile celor mai populare produse si recomandarile generate vor fi
disponibile si sub forma de fluxuri de stiri RSS. Bonus: partajarea pe minim o retea
sociala a datelor recomandate.