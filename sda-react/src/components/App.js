import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Header";
import { Home } from "./Home";
import { Products } from "./Products";
import { Product } from "./Product";
import { About } from "./About";
import { Redirect } from "./Redirect";
import { NoPage } from "./NoPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/products/:productId" element={<Product />} />
        {/* <Route path="/products/:productId/:subproduct" element={<Product />} /> */}

        <Route path="/about" element={<About />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

/*
uzduoties etapai
1 sukurti keleta 'dumb' peidzu, kurie rauterio nenaudos, bet bus headers su neveikainciais linkais ir puslapiai, kurie bus veliau naudojami routais

2 apimti aplikacija su routeriu

3 naudojant Routes ir Route padaryti kad peidzai atsivaizduotu tik atitinkamais routais (patestuoti keiciant urlus browsery)

4 sukurti veikaincius linkus su Link komponentais headery

5 naudojant react routerio paramus sukurti specialu puslapi, kuris naudotu ji (pvz userio id) useParams + :id pvz

6 sukurti redirect puslapi, kuris redirectins i home peidza ir console logins, kad buvo uzkrautas

7 prie kurio nors paprasto  patho puslapio prideti query paramus ir atvaizduoti, jeigu jie naudojami useSearchParams naudoti

8 sukurti not found puslapi kuris atsivaizduotu jei neteisignas urlas nurodytas
*/
