import React, { SyntheticEvent } from "react";
import CardPortfolio from "../card-portfolio/CardPortfolio";
import { v4 } from "uuid";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <h3>
      My Portfolio
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} key={v4()} />;
          })}
      </ul>
    </h3>
  );
};

export default ListPortfolio;
