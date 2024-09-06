import { categoryPopular } from "@/utils/helps";
import Image from "next/image";

export function CategoriesPopular() {
    return (
        <div className="grid grid-cols-4">
            {
                categoryPopular.map(category => (

                    <div
                        key={category.title}
                        className="h-[400px] border border-gray-400 flex flex-col justify-center items-center gap-12"
                    >

                        <figure className="w-full h-1/2 relative">
                            <Image
                                className="w-full h-full object-contain absolute -bottom-9"
                                src={category.image}
                                width={600}
                                height={600}
                                alt={category.title} />

                            <div className=" bg-[#FEEFD2] w-4/6 mx-auto rounded-full aspect-square " />
                        </figure>

                        <p className="font-bold text-xl">{category.title}</p>
                    </div>

                ))
            }
        </div>
    )
}
