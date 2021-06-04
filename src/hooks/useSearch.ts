import * as React from "react";

type ReturnType<T, InputElement> = {
  onChange: (e: React.ChangeEvent<InputElement>) => void;
  search: string;
  filtered: T[];
};

/**
 * search through an array with the provided key
 * @param key the key you want to search through the array
 * @param items the array you want to use to search
 * @example
 *
 * ```
 * interface MyThing {
 *  name: string;
 *  age: string;
 * }
 *
 * const SearchComponent = () => {
 *  const { onChange, search, filtered } = useSearch<MyThing>("name", myDataArr);
 *
 *
 * return <div>
 *   <input value={search} onChange={onChange} className="search-value" />
 *
 *   <div className="my-results">
 *    {filtered.map((item) => (<p>{item.name}</p>))}
 *   </div>
 *  </div>
 * }
 * ```
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export function useSearch<T = object, InputElement extends HTMLElement = HTMLInputElement>(
  key: keyof T,
  items: T[],
): ReturnType<T, InputElement> {
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState<T[]>(items);

  React.useEffect(() => {
    setFiltered(items);
  }, [items]);

  function onChange(e: React.ChangeEvent<InputElement>) {
    const value = (e.target as any).value;
    setSearch(value);

    if (value.length <= 0) {
      setFiltered(items);
    } else {
      setFiltered(
        items.filter((v) =>
          (v[key] as unknown as string).toString().toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }
  }

  return {
    onChange,
    search,
    filtered,
  };
}
