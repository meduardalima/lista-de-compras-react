"use client";

import { useState } from "react";

export default function Lista() {
  const [add, setAdd] = useState(0);

  return (
    <>
      <h1>
        Adicione um item{" "}
        <button
          onClick={() => {
            setAdd(add + 1);
          }}
        >
          Adicionar
        </button>
      </h1>

      <h2>Quantidade de Itens da Lista: {add}</h2>
      <button
        onClick={() => {
          setAdd(add - 1);
        }}
      >
        remover
      </button>
    </>
  );
}
