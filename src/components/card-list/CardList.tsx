import React from "react";
import Card from "../card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResult={result} />
          );
        })
      ) : (
        <h1>Không có kết quả</h1>
      )}
    </>
  );
};

export default CardList;
