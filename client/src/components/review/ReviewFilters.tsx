
export default function ReviewFilters() {
    return (
        <section className="w-1/4 h-auto bg-white rounded-lg p-1">
            <h2 className="text-lg text-zinc-500 text-center font-semibold">Filters</h2>
            <div className="flex flex-row gap-1 mt-3">
                    <h3 className="text-md text-zinc-500 font-semibold">Gênero:</h3>
                    <select name="genre" id="genre" className="w-2/4 h-full bg-gray-200 border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center hover:cursor-pointer">
                        <option value="">All</option>
                    </select>
                </div>
        </section>
    )
}