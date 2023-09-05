import React, { ChangeEvent, MouseEvent } from "react";

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)} >Tìm kiếm</button>
    </div>
  );
};

export default Search;
