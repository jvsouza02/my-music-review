
export default function SearchContainer() {
    return (
        <section className="bg-white mx-auto w-3/6 h-11 rounded-lg mt-3 shadow-md flex items-center p-2">
            <div className="flex w-6/12 gap-1">
                <div className="w-3/4">
                    <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-l py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text" type="text" placeholder="Search..." />
                </div>
                <div className="w-1/4">
                    <select name="genre" id="genre" className="w-full h-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-r text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center hover:cursor-pointer">
                        <option value="">All</option>
                    </select>
                </div>
            </div>
            <div className="flex w-6/12 justify-end">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Add Review</button>
            </div>
        </section>
    )
}