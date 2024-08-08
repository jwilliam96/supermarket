
interface Props {
    text: string
}

export function Button({ text }: Props) {
    return (
        <button className="bg-red-500 text-white px-4 py-2 rounded-full mx-auto block my-8 hover:bg-red-700">{text}</button>
    )
}
