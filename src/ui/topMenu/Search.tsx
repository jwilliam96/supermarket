"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { ListSearch } from "./ListSearch";

export function Search({ className }: { className?: string }) {

    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathName = usePathname()

    const handleSearch = (term: string) => {

        const params = new URLSearchParams(searchParams)

        if (term) {
            params.set("query", term)
        } else {
            params.delete("query")
        }
        replace(`${pathName}?${params.toString()}`)
    }

    return (
        <div className={`relative ${className} group`}>
            <div className={`flex w-full bg-white rounded-full overflow-hidden p-[1px] mx-auto ${className}`}>
                <input
                    type="text"
                    className="grow bg-red-500 rounded-s-full outline-white pl-4 sm:pl-8 "
                    onChange={(e) => handleSearch(e.target.value)}
                    defaultValue={searchParams.get("query")?.toString()}
                />
                <CiSearch size={20} className="m-2 text-red-500 shrink-0" />
            </div>

            <div className="hidden group-focus-within:block">
                <ListSearch />
            </div>
        </div>
    )
}
