import ReviewFilters from "../review/ReviewFilters";
import SongsContainer from "./SongsContainer";
import { createContext, useState } from "react";

interface SearchContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface GenreFilterContextType {
  genreFilter: string;
  setGenreFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({search: "", setSearch: () => {}});
export const GenreFilterContext = createContext<GenreFilterContextType>({genreFilter: "", setGenreFilter: () => {}});

export default function MainContainer() {
    const [search, setSearch] = useState<string>("");
    const [genreFilter, setGenreFilter] = useState<string>("");

    return (
        <main className="w-5/6 mt-4 h-auto mx-auto flex flex-row gap-3">
            <SearchContext.Provider value={{ search, setSearch }}>
                <GenreFilterContext.Provider value={{ genreFilter, setGenreFilter }}>
                    <ReviewFilters />
                    <SongsContainer />
                </GenreFilterContext.Provider>
            </SearchContext.Provider>
        </main>
    )
}