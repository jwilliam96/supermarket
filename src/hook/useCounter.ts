import { useState } from "react"


export const useCounter = () => {
    const [counter, setCounter] = useState<number>(1)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return { counter, handleIncrement, handleDecrement }
}