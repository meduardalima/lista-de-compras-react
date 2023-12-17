"use client";
import Lista from "./componentes/lista";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  //passo 2- criar um estado que vai receber um array vazio e uma função que vai preencher esse array vazio com os dados da api
  const [character, setCharacter] = useState([]); //nessa função será colocado os dados da api dentro de um array
  //Realizando uma requisição http usando o método get() -> pegar
  axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    //console.log(response.data); pega todos os dados da api, agora quero trata-los
    // console.log(response.data.results);ou
    const respostaApi = response.data.results;
    //console.log(respostaApi); passo 2 ->
    setCharacter(respostaApi); //
  });

  return (
    <>
      <main>
        <Lista />
        {character.map((personagem: any) => {
          return (
            //renderizar os dados de um apai dentro de um atag html
            <ul key={personagem.id}>
              <li>{personagem.name}</li>
              <li>{personagem.species}</li>
              <li>{personagem.status}</li>
              <li>{personagem.origin.main}</li>
            </ul>
          );
        })}
      </main>
    </>
  );
}
