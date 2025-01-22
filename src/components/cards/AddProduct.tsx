"use client"

import { IconCorazon, IconCorazonLleno } from "../icons/Icons";
import { cartStore, useFavoriteState } from "@/store";
import { useCounter } from "@/hook/useCounter";
import { Product } from "@/interface";

export function AddProduct({ product }: { product: Product }) {

    const { counter, handleIncrement, handleDecrement } = useCounter()
    const addCart = cartStore(state => state.addCart)
    const changeCart = cartStore(state => state.changeCart)

    const favorites = useFavoriteState((state) => state.favorites)
    const isFavorite = favorites.find(p => p.id === product.id)
    const changeFavorite = useFavoriteState(state => state.isFavorite)


    const handlerCart = (data: Product) => {
        addCart(data, counter)
        changeCart()
    }

    const handleFavorite = () => {
        changeFavorite(product)
    }

    return (
        <>

            {/* COUNTER / FAVORITE  */}
            <div className=" mt-4">
                <h3>Cantidad :</h3>
                <div className="flex justify-between items-center">

                    {/* COUNTER  */}
                    <div className='flex justify-between w-[200px] text-xl my-4 items-center gap-2'>
                        <button onClick={handleDecrement} className=' bg-gray-800 px-2.5 rounded-full text-white'>-</button>
                        <span className='border px-7'>{counter}</span>
                        <button onClick={handleIncrement} className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white'>+</button>
                    </div>

                    {/* FAVORITE MOBILE  */}
                    <div onClick={handleFavorite}
                        className=" size-12 border border-red-500 rounded-full flex justify-center items-center shrink-0 text-red-500 cursor-pointer md:hidden">
                        {
                            isFavorite
                                ?
                                (<IconCorazonLleno />)
                                :
                                (<IconCorazon />)

                        }
                    </div>
                </div>
            </div>

            <div className="md:flex items-center gap-8">

                {/* AGREGAR AL CARRITO  */}
                <button
                    className="bg-red-500  w-full text-white px-4 py-2 rounded-full  my-8 hover:bg-red-700"
                    onClick={() => handlerCart(product)}>
                    Agregar al Carrito
                </button>

                {/*   FAVORITE DESKTOP*/}

                <div onClick={handleFavorite}
                    className="size-12 border border-red-500 rounded-full hidden  md:flex justify-center items-center shrink-0 text-red-500 cursor-pointer">
                    {
                        isFavorite
                            ?
                            (<IconCorazonLleno />)
                            :
                            (<IconCorazon />)

                    }
                </div>
            </div>
        </>
    )
}
