import { serviceInfo } from "@/utils/helps";

export function ServiceInfo() {
    return (
        <div className="flex text-red-500 divide-x-[1px] justify-center divide-black my-14">
            {
                serviceInfo.map(character => (
                    <div className="flex px-10 gap-4 " key={character.title}>
                        {character.icon}
                        <div className="text-black">
                            <h3 className="text-xl font-bold">{character.title}</h3>
                            <span>{character.description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
