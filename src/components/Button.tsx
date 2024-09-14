import clsx from "clsx"

interface Props {
    text: string
    className?: string
}

export function Button({ text, className }: Props) {
    return (
        <button className={clsx("bg-red-500 text-white px-4 py-2 rounded-full mx-auto block my-8 hover:bg-red-700", className && className)}>{text}</button>
    )
}
