import { useContext } from "react";
import { SearchContext } from "../ui/MainContainer";

export default function ReviewSearchBar() {
    const {search, setSearch} = useContext(SearchContext);

    return (
        <div className="w-full">
            <input className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text" type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
}