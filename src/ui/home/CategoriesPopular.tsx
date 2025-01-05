import { categoryPopular } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export function CategoriesPopular() {
    return (
        <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-4">
            {
                categoryPopular.map(({ image, title }) => (

                    <Link
                        href={`/categories/${title}`}
                        key={title}
                        className="min-w-[240px] max-w-[385px] w-full h-[400px] border border-gray-400 flex flex-col justify-center items-center gap-12"
                    >

                        <figure className="w-full h-1/2 relative">
                            <Image
                                className="w-full h-full object-contain absolute -bottom-9"
                                src={image}
                                width={600}
                                height={600}
                                alt={title} />

                            <div className=" bg-[#FEEFD2] w-4/6 mx-auto rounded-full aspect-square " />
                        </figure>

                        <p className="font-bold text-xl">{title}</p>
                    </Link>

                ))
            }
        </div>
    )
}
