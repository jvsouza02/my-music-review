import type { SongType } from "../../types/Song";

export default function Song({ song }: { song: SongType }) {
    return (
        <div className="flex flex-row gap-1 w-full h-11 bg-gray-100 rounded-lg p-1 items-center hover:bg-gray-200">
            <div className="w-11/12 flex flex-row gap-2">
                <div><b>{song.title}</b> - <b>{song.artist}</b></div>
                <div className="border-l-2 border-gray-300 flex gap-1 items-center pl-2"><b>Genre: </b>{song.genre}</div>
                <div className="border-l-2 border-gray-300 flex gap-1 items-center pl-2"><b>Rating: </b>{song.rating}</div>
            </div>
            <div className="w-1/12 flex">

            </div>
        </div>
    )
}