import React, { SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../card/Card";
import { CompanySearch } from "../../company";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <h1>Không có kết quả</h1>
      )}
    </>
  );
};

export default CardList;
