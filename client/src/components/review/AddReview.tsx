import { useState} from "react";

type ReviewType = {
    title: string;
    artist: string;
    genre: string;
    review: string;
    rating: number;
};

export default function AddReview({ setAddReviewIsOpen }: { setAddReviewIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [review, setReview] = useState<ReviewType>({
        title: "",
        artist: "",
        genre: "",
        review: "",
        rating: 0,
    });

    function saveReview() {
            fetch("http://127.0.0.1:8000/song/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                <div className="flex justify-between items-center border-b pb-2">
                    <h3 className="text-xl font-semibold">Add a review</h3>
                    <button
                        onClick={() => setAddReviewIsOpen(false)}
                        className="text-gray-700 text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                <div className="mt-4">
                    <div className="mb-2">
                        <label htmlFor="title" className="text-gray-700">Title<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="title"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            onChange={(e) => setReview({ ...review, title: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="artist" className="text-gray-700">Artist<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="artist"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            onChange={(e) => setReview({ ...review, artist: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="genre" className="text-gray-700">Genre<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="genre"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            onChange={(e) => setReview({ ...review, genre: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="rating" className="text-gray-700">Rating<span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            min={0} max={10}
                            id="rating"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            onChange={(e) => setReview({ ...review, rating: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="review" className="text-gray-700">Review</label>
                        <textarea
                            id="review"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            onChange={(e) => setReview({ ...review, review: e.target.value })}
                        />
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => setAddReviewIsOpen(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                        Close
                    </button>
                    <button
                        onClick={() => saveReview()}
                        className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Confirm</button>
                </div>
            </div>
        </div>
    );
}