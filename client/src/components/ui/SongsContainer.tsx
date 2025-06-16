import ReviewActionsContainer from "../review/ReviewActionsContainer";
import SongList from "../songs/SongList";

export default function SongsContainer() {
    return (
        <main className="w-full h-auto mx-auto flex flex-col gap-3">
            <ReviewActionsContainer />
            <SongList />
        </main>
    )
}