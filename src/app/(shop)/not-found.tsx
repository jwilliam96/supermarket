import Link from "next/link";

export default function NotFound() {
    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-8xl font-semibold text-red-500">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Página no encontrada</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Lo siento, no pudimos encontrar la página que estás buscando</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/" className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar al Inicio</Link>
                    <Link href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>
        </div>
    )
}
