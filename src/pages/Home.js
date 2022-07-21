import React from "react";
import CardGames from "../comp/CardGames";

export default function Home() {
  return (
    <div>
      <h1 className="m-5 p-2 bg-dark rounded text-center w-auto"> Welcome to IGDb website</h1>
      <CardGames />
    </div>
  );
}
