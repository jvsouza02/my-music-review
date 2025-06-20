import Song from "./Song";
import type { SongType } from "../../types/Song";
import { useState, useContext, useEffect } from "react";
import { GenreFilterContext, SearchContext } from "../ui/MainContainer";

export default function SongList() {
    const [songs, setSongs] = useState<SongType[]>([]);
    const { genreFilter } = useContext(GenreFilterContext);
    const { search } = useContext(SearchContext);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/songs?search=${search}&genre=${genreFilter}`, {method: "GET"})
            .then((res) => res.json())
            .then((data) => setSongs(data));
    }, [search, genreFilter]);

    return (
        <section className="bg-white flex flex-col w-full h-auto mx-auto rounded-lg shadow-md gap-2 p-2">
            {songs.map((song) => (
                <Song key={song.id_song} song={song} />
            ))}
        </section>
    );
}