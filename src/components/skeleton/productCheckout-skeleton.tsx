
export function SkeletonProductCheckout() {
    return (
        <div className="flex items-center px-4 py-8 border-b">
            {/* IMAGEN */}
            <div className="size-20 bg-gray-400 animate-pulse shrink-0" />
            <div className="px-4 grow">
                {/* TITULO */}
                <div className="w-[250px] h-4 bg-gray-400 animate-pulse rounded-full mb-2" />
                {/* DESCRIPCIÓN  */}
                <div className="w-[80px] h-4 bg-gray-400 animate-pulse rounded-full" />
            </div>

        </div>
    )
}
