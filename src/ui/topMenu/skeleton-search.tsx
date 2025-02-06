
export function SkeletonSearch() {

    return (
        <>
            {
                Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="flex items-center px-4 py-8 border-b">
                        {/* IMAGEN */}
                        <div className="size-12 bg-gray-400 animate-pulse shrink-0" />
                        <div className="px-4 grow">
                            {/* TITULO */}
                            <div className="w-[250px] h-4 bg-gray-400 animate-pulse rounded-full mb-2" />
                        </div>

                    </div>
                ))
            }
        </>
    )
}
