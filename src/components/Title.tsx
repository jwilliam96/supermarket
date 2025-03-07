import { fontTitle } from "@/ui"

interface Props {
    text: string
}

export function Title({ text }: Props) {
    return (
        <h3 className={`text-4xl font-semibold py-16 pl-3 ${fontTitle.className}`}>
            {text}
        </h3>
    )
}
