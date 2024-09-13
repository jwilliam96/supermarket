import { CiSearch } from "react-icons/ci";


export function Search({ className }: { className?: string }) {
    return (
        <div className={`flex w-full bg-white rounded-full overflow-hidden p-[1px] mx-auto ${className}`}>
            <input type="text" className="grow bg-red-500 rounded-s-full outline-white pl-2 sm:pl-8" />
            <CiSearch size={20} className="m-2 text-red-500 shrink-0" />
        </div>
    )
}
