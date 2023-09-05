import { ChangeEvent, MouseEvent, useState } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';

function App() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(e);
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList />
    </div>
  );
}

export default App;
