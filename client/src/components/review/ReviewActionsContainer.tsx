import ReviewSearchBar from "./ReviewSearchBar";

export default function ReviewActionsContainer() {
    return (
        <section className="bg-white w-full rounded-lg flex flex-row p-1 gap-1 shadow-md">
            <ReviewSearchBar/>
            <div className="w-32 flex justify-end">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Add Review</button>
            </div>
        </section>
    );
}