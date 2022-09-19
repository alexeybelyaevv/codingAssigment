import { useEffect, useState } from "react";

const performSearch = async (query: string, setSearch: any) => {
  const data = await fetch(
    `https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`
  ).then((response) => response.json());
  setSearch(data.data);
};

export default function Search() {
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [text, setText] = useState<string>("");

  const searchOnChange = (eventText: string) => {
    performSearch(eventText, setSearchResults);
    setText(eventText);
  };

  useEffect(() => {
    performSearch("", setSearchResults);
  }, []);

  console.log(searchResults);

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">
        Search for:
      </label>
      <input
        value={text}
        onChange={(e) => {
          searchOnChange(e.target.value);
        }}
        id="searchQuery"
        type="text"
        className="border"
      />
      <ul>
        {searchResults?.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
