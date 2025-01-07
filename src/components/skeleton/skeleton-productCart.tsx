import { IconDelete } from "../icons/Icons";

export function SkeletonProductCart() {
    return (
        <div className="flex items-center px-4 py-8 border-b">
            {/* IMAGEN */}
            <div className="size-20 bg-gray-400 animate-pulse" />
            <div className="px-4 grow">
                {/* TITULO */}
                <div className="w-[250px] h-4 bg-gray-400 animate-pulse rounded-full mb-2" />
                {/* DESCRIPCIÓN  */}
                <div className="w-[150px] h-4 bg-gray-400 animate-pulse rounded-full" />

                {/* CONTADOR */}
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-[26px] h-[26px] rounded-full bg-gray-400 animate-pulse" />
                    <div className="w-[60px] h-6 bg-gray-400 animate-pulse" />
                    <div className="w-[26px] h-[26px] rounded-full bg-gray-400 animate-pulse" />
                </div>
            </div>

            {/* ELIMINAR  */}
            <div>
                <IconDelete className="text-gray-400 animate-pulse" />
            </div>
        </div>
    )
}
