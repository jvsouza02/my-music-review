export default function Header({ children }: { children: string }) {
    return (
        <header className="bg-gray-600 mx-auto w-5/6 h-16 flex justify-center items-center shadow-md rounded-b-md">
            <h1 className="text-3xl text-white">{children}</h1>
        </header>
    );
}