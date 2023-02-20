---
layout: page
title: Proiecte
permalink: /proiecte/
published: false
---

> ### ️Prezentare generală
> Detalii despre evaluare:
> - <a href="https://profs.info.uaic.ro/~busaco/teach/courses/web/web-exam.html" target="_blank">Aspecte privind evaluarea activităţii </a>
> - <a href="https://profs.info.uaic.ro/~busaco/teach/courses/web/web-projects.html" target="_blank">Detalii despre proiectele practice </a> 
> - <a href="https://docs.google.com/document/d/1-kwayc6-iC5EqXXyk_laMbKxfNhz_wZPxkPNwUZPnsE/edit" target="_blank">Întrebări frecvente </a>
>
> <b style="color: #d14; font-weight:500;">Maxim 7 echipe per tema de proiect</b>, cu echipe compuse din 2–3 persoane din grupele conduse de același responsabil de laborator.
<blockquote class="slides">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9846o2ZHCQ4SxFs-yUOmsoKvQlAIWvFoHwWK2uHXGSGIX-Q/viewform?usp=sf_link" class="slides-link">Înscriere echipă</a>
</blockquote>

### 🎯 Criterii de evaluare saptamana 8
- Formularea + respectarea corespunzatoare a cerintelor proiectului
- HTML si CSS valide
  -  <a href="https://validator.w3.org/#validate_by_input" target="_blank">Validare HTML</a>
  -  <a href="https://jigsaw.w3.org/css-validator/#validate_by_input" target="_blank">Validare CSS</a>
- <a href="https://victorvlad19.github.io/web/css/design-responsiv/animatii-css/2022/03/01/laborator-3.html" target="_blank"> Design responsiv </a>
- <a href="https://w3c.github.io/scholarly-html/" target="_blank"> Document Scholarly HTML </a> corect
- Complexitatea designului ( minim 3 pagini simple de tip Login, About, Help vs complet )
- Lucrul in echipa (Metrici Github echipa)
- Bonus: <a href="https://victorvlad19.github.io/web/proiecte/recapitulare/design-si-interac%C5%A3iune-web/2022/03/08/laborator-4.html" target="_blank">preprocesare SASS et al., folosirea BEM et al., adnotari semantice cu schema.org </a>

### Categoria M (maxim 10 puncte)

<div class="card" markdown="1">

#### <span> <b>NuP</b> (Nuclear Power Plant Web Manager) </span>

Sa se realizeze un sistem Web pentru managementul centralelor nucleare: de la amplasarea optima a 
reactoarelor in functie de eficienta, sol, minimizarea riscurilor si alti factori pana la 
vizualizarea starii si monitorizarea in timp-real a fiecarei reactor si realizarea de 
statistici privind gradul de functionalitate, eficienta, pericol, pe baza proceselor atomo-nucleare, 
conditiile meteo si de uzura (de pilda, oprire temporara pentru reparatii – planificate sau nu). <br> <br>
Via un API REST/GraphQL propriu, se vor oferi atat informatii numerice, cat si vizualizari sugestive. 
Starea curenta a centralei nucleare va putea fi consultata si prin intermediul fluxurilor de date RSS. 
Orice situatie de exceptie va fi raportata imediat prin e-mail si via notificari direct in navigatorul Web.
Resurse suplimentare despre vizualizarea datelor: 
<a href="https://profs.info.uaic.ro/~busaco/teach/courses/cliw/web-film.html#week4">aici</a>

</div>

<div class="card" markdown="1">

#### <b>SimVi</b> (Similar Videos Retrieval)

Pe baza unui API REST sau GraphQL, sa se implementeze o aplicatie Web capabila sa detecteze 
similaritatea dintre continuturi video disponibile pe platformele 
<br> Instagram <https://developers.facebook.com/docs/instagram-api>,
<br> YouTube <https://developers.google.com/youtube/v3>,
<br> Vimeo <https://developer.vimeo.com/api/guides/start>.
<br> <br> Pentru calculul similaritatii, se vor considera (meta-)date precum titlul, descrierea, lungimea, autorul, termenii de continut (tag-urile), comentariile utilizatorilor si altele. Aplicatia va oferi suport pentru cautare multi-criteriala si va sugera videoclip-uri de interes in functie de preferinte si starea de spirit (mood), localizarea geografica, moment de timp, factori demografici, anturaj. Aceste recomandari vor fi disponibile si prin intermediul unui flux de stiri RSS.

</div>

### Categoria B (maxim 7 puncte)

<div class="card" markdown="1">

#### <b>ViR</b> (Video Review Manager)

Se doreste crearea unei aplicatii Web care permite specificarea adnotarilor 
textuale si a meta-datelor, plus exprimarea opiniilor vizand video-clipurile realizate 
de o persoana sau grup de persoane. Sistemul va realiza managementul productiilor video, 
inclusiv organizarea lor pe diverse criterii: categorie, an al realizarii, legaturi cu 
alte filme inrudite, protagonisti etc. Se vor oferi statistici textuale si grafice exportate 
in formate deschise – minimal, CSV si SVG, respectiv.  <br><br>
Diversele anunturi (o persoana a comentat un video-clip, a aparut o alta lista de filme de interes, 
modificarea clasamentului celor mai apreciate filmulete ale lunii etc.) vor fi expuse ca flux de stiri RSS.
Listele de filme preferate vor fi importate/exportate (d)in formate precum JSON si XML. <br>
<b>Bonus:</b> recurgerea la un serviciu online (DailyMotion, Vimeo).   

</div>

<div class="card" markdown="1">

#### <b>PerM</b> (Perfume Web Manager)

Sa se conceapa o aplicatie Web de management al resurselor dintr-o parfumerie care ofera 
utilizatorilor diverse (tipuri de) parfumuri, in functie de profilul unei persoane si 
vizand o anumita ocazie, un anotimp etc. Fiecarui produs i se vor atasa proprietati specifice, 
inclusiv ingrediente, pret, comentarii, tag-uri asociate, relatii cu alte parfumuri inrudite.
<br><br>
De asemenea, se va simula expedierea parfumurilor achizitionate la o adresa stabilita, eventual 
in regim de cadou. Administratorul sistemului va avea posibilitatea sa consulte 
rapoarte -- generate in formatele HTML, JSON si PDF -- privind stocurile existente 
si situatia vanzarilor in functie de categoria de parfumuri, profilul utilizatorilor,
o anumita perioada de timp etc.

</div>

<div class="card" markdown="1">

#### <b>FoSA</b> (Footwear Smart Assistant)

Unele persoane pot intampina dificultati in alegerea incaltamintei potrivite 
pentru anumite ocazii: interviu de angajare, spectacol, campionat de sumo etc. 
Este necesara o aplicatie Web ce permite alegerea pieselor de incaltaminte, 
oferindu-se si diverse recomandari conform sezonului, cromaticii, marcii preferate, 
tendintelor modei, caracteristicilor speciale si/sau stilului vestimentar adoptat de 
persoana respectiva -- de exemplu, tinuta sportiva, pentru birou si altele.
<br><br>
Se vor prezenta informatii referitoare la achizitionarea unor produse de 
interes (e.g., sugestii de genul "se apropie primavara, pentru plimbari 
nocturne ar fi utile niste cizme pictate" sau "pentru ceremonii dansante e 
indicat sa porti pantofi cu toc de inox; asorteaza-i cu o toga argintie"). 
Fiecare sugestie oferita utilizatorului va fi expediata si prin posta electronica, 
suplimentar putand fi partajata pe o retea sociala si votata 
(i.e. apreciata cu 1, 2,..., 5 "stele" sau calificative), astfel incat sa 
poata fi propusa si altor persoane avand preferinte similare. 
Statisticile generate vor adopta formatele HTML, CSV si XML.  <br>
<b>Bonus:</b> preluarea de pe situri Web existente a datelor despre incaltaminte.


</div>