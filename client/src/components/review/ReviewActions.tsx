import ReviewSearchBar from "./ReviewSearchBar";
import AddReview from "./AddReview";
import { useState } from "react";

export default function ReviewActions() {
    const [addReviewIsOpen, setAddReviewIsOpen] = useState(false);

    return (
        <section className="bg-white w-full rounded-lg flex flex-row p-1 gap-1 shadow-md">
            <ReviewSearchBar />
            <div className="w-32 flex justify-end">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => setAddReviewIsOpen(true)}>Add Review</button>
            </div>

            {addReviewIsOpen && (<AddReview setAddReviewIsOpen={setAddReviewIsOpen} />)}

        </section>
    );
}