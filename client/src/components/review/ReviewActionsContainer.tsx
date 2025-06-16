import ReviewSearchBar from "./ReviewSearchBar";

export default function ReviewActionsContainer() {
    return (
        <section className="bg-white w-full rounded-lg flex flex-row p-1 gap-1">
            <div className="w-1/3"></div>
            <ReviewSearchBar/>
            <div className="w-1/3 flex justify-end">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Add Review</button>
            </div>
        </section>
    );
}