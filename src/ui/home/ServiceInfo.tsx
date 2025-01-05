import { serviceInfo } from "@/utils";

export function ServiceInfo() {
    return (
        <article className="flex flex-col justify-center border-y-2 border-black/70 divide-black/70 divide-y-2 text-red-500
        md:grid md:grid-cols-2 md:divide-y-0 md:justify-items-center md:border-none
         lg:flex lg:flex-row lg:divide-x-[1px] lg:border-none lg:mt-14 mb-4">
            {
                serviceInfo.map(({ icon, description, title }) => (
                    <div className="flex px-10 gap-4 py-6" key={title}>
                        {icon}
                        <div className="text-black">
                            <h3 className="text-xl font-bold">{title}</h3>
                            <span>{description}</span>
                        </div>
                    </div>
                ))
            }
        </article>
    )
}
