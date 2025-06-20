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
        <section className="w-1/6 h-screen bg-white rounded-lg p-1 shadow-md">
            <h2 className="text-lg text-zinc-500 text-center font-semibold">Filters</h2>
            <div className="flex w-full flex-row gap-1 mt-3">
                <div className="w-3/12">
                    <h3 className="text-md text-zinc-500 font-semibold">Genres:</h3>
                </div>
                <div className="w-9/12">
                    <select
                        name="genre"
                        id="genre"
                        className="w-full bg-gray-100 border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center hover:cursor-pointer truncate"
                        onChange={(e) => setGenreFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </section>
    )
}