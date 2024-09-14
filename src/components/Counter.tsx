"use client"

import { useCounter } from "@/hook/useCounter"

export function Counter() {

    const { counter, handleIncrement, handleDecrement } = useCounter()


    return (
        <div className='flex justify-between text-xl my-4 items-center gap-2'>
            <button onClick={handleDecrement} className=' bg-gray-800 px-2.5 rounded-full text-white'>-</button>
            <span className='border px-7'>{counter}</span>
            <button onClick={handleIncrement} className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white'>+</button>
        </div>
    )
}
