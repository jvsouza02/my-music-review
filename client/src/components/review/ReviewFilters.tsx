import { useState, useEffect, useContext } from "react";
import { GenreFilterContext } from "../ui/MainContainer";

export default function ReviewFilters() {
    const [genres, setGenres] = useState([]);
    const { setGenreFilter } = useContext(GenreFilterContext);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/songs/genres")
            .then((res) => res.json())
            .then((data) => setGenres(data));
    }, []);

    return (
        <section className="w-1/4 h-auto bg-white rounded-lg p-1 shadow-md">
            <h2 className="text-lg text-zinc-500 text-center font-semibold">Filters</h2>
            <div className="flex flex-row gap-1 mt-3">
                <h3 className="text-md text-zinc-500 font-semibold">Gênero:</h3>
                <select name="genre" id="genre" className="w-2/4 h-full text-sm bg-gray-100 border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center hover:cursor-pointer"
                    onChange={(e) => setGenreFilter(e.target.value)}>
                    <option value="">All</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}