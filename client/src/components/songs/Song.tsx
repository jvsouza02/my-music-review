import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import type { SongType } from "../../types/Song";

function AddStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if ((rating / 2) >= i) {
            stars.push(<FaStar key={i} className="text-yellow-500"/>);
        } else if ((rating / 2 ) < i && Math.floor(rating / 2) == i - 1) {
            stars.push(<FaRegStarHalfStroke key={i} className="text-yellow-500"/>);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500"/>);
        }
    }
    return stars;
}

export default function Song({ song }: { song: SongType }) {

    return (
        <div className="flex flex-row gap-1 w-full h-11 bg-gray-100 p-1 items-center hover:bg-gray-200">
            <div className="w-11/12 flex flex-row gap-2">
                <div className="border-l-2 border-gray-300 flex gap-1 items-center pl-2 w-3/12 truncate"><b>{song.title}</b> - <b>{song.artist}</b></div>
                <div className="border-l-2 border-gray-300 flex gap-1 items-center pl-2 w-3/12 truncate"><b>Genre: </b>{song.genre}</div>
                <div className="border-l-2 border-gray-300 flex gap-1 items-center pl-2 w-2/12 truncate"><b>Rating:</b><em>{song.rating.toPrecision(2)}</em>{AddStars(song.rating)}</div>
                {song.review && <div className="border-l-2 border-gray-300 flex gap-1 items-center pl-2 truncate w-3/12"><b>Review:</b>{song.review}</div>}
            </div>
            <div className="w-1/12 flex justify-end gap-2">
                <button className="text-gray-700 text-xl leading-none hover:text-blue-500"><FaRegEdit /></button>
                <button className="text-gray-700 text-2xl leading-none hover:text-red-500"><MdDeleteForever /></button>
            </div>
        </div>
    )
}