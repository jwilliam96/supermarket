import Image from "next/image";

interface CardImagesProductsProps {
    src: string;
    alt: string;
}

export async function CardImagesProducts({ alt, src }: CardImagesProductsProps) {


    return (
        <figure>
            <Image
                width={300}
                height={300}
                src={src}
                alt={alt}
            />
        </figure>
    )
}
