import ReviewActions from "../review/ReviewActions";
import SongList from "../songs/SongList";

export default function SongsContainer() {
    return (
        <main className="w-full h-auto mx-auto flex flex-col gap-3">
            <ReviewActions />
            <SongList />
        </main>
    )
}