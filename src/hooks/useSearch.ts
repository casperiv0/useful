import * as React from "react";

type ReturnType<T> = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  filtered: T[];
};

/**
 * Search through an array with the provided key
 * @param key the key you want to search through the array
 * @param items the array you want to use to search
 */
export function useSearch<T = object>(key: keyof T, items: T[]): ReturnType<T> {
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState<T[]>(items);

  React.useEffect(() => {
    setFiltered(items);
  }, [items]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    if (value.length <= 0) {
      setFiltered(items);
    } else {
      setFiltered(
        items.filter((v) =>
          ((v[key] as unknown) as string).toString().toLowerCase().includes(value.toLowerCase()),
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
