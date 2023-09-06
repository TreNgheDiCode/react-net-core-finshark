import React from "react";
import CardPortfolio from "../card-portfolio/CardPortfolio";
import { v4 } from "uuid";

interface Props {
  portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <h3>
      My Portfolio
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return <CardPortfolio portfolioValue={portfolioValue} key={v4()} />;
          })}
      </ul>
    </h3>
  );
};

export default ListPortfolio;
