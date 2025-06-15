export default function Header({ children }: { children: string }) {
    return (
        <header className="bg-white mx-auto w-4/6 h-16 flex justify-center items-center shadow-md rounded-b-md">
            <h1 className="text-3xl text-zinc-500">{children}</h1>
        </header>
    )
}