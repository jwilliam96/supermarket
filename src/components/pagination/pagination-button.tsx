import clsx from "clsx"
import Link from "next/link"

interface Props {
    totalPages: number
    currentPage: number
    url: string
}


export function PaginationButton({ currentPage, totalPages, url }: Props) {


    return (
        <div className="flex justify-center px-4 py-3 my-12">

            <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <Link href={`/categories/${url}/?page=${currentPage - 1}`}
                        className={clsx("relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0", currentPage === 1 && "pointer-events-none text-gray-400 ")}>
                        <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    {
                        Array.from({ length: totalPages }).map((_, i) => (

                            <Link
                                key={i}
                                href={`/categories/${url}/?page=${i + 1}`}
                                aria-current="page"
                                className={clsx("relative inline-flex items-center px-6 py-2 text-xl font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0", currentPage === (i + 1) ? "bg-red-500 text-white hover:bg-red-700" : "hover:bg-red-200 hover:text-black ")}>
                                {i + 1}
                            </Link>

                        ))
                    }
                    <Link href={`/categories/${url}/?page=${currentPage + 1}`}
                        className={clsx("relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                            currentPage === totalPages && "pointer-events-none text-gray-400 "
                        )}>
                        <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </div>

    )
}
