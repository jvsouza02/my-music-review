import ReviewFilters from "../review/ReviewFilters";
import SongsContainer from "./SongsContainer";

export default function MainContainer() {
    return (
        <main className="w-4/6 mt-4 h-auto mx-auto flex flex-row gap-3">
            <ReviewFilters />
            <SongsContainer />
        </main>
    )
}