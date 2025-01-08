
import clsx from "clsx"
import Link from "next/link"

interface Props {
    text: string
    className?: string,
    href: string
}

export function LinkButton({ text, className, href = "#" }: Props) {

    return (
        <div className="flex justify-center">
            <Link
                href={href}
                className={clsx("bg-red-500 inline-block text-center text-white px-4 py-2 rounded-full my-8 hover:bg-red-700", className)}
            >
                {text}
            </Link>
        </div>
    )
}
