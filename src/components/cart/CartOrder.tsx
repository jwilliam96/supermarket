"use client"

import { currencyFormat } from "@/utils/currencyFormat"
import { cartStore } from "@/store/cart-store"
import { useEffect, useState } from "react"
import { LinkButton } from "../LinkButton"

export function CartOrder() {

    const cartProducts = cartStore(state => state.cartState)

    const [account, setAccount] = useState({ subTotal: 0, total: 0, porcentaje: 0 })

    useEffect(() => {
        const { subTotal, porcentaje, total } = cartStore.getState().getTotal()
        setAccount({ total, porcentaje, subTotal })
    }, [cartProducts])

    return (
        <div className="shadow-lg border rounded-xl p-4 sticky top-4 right-0  ">
            <h3 className="text-3xl">Resumen de productos</h3>

            <div className="my-6 grid grid-cols-2 gap-2 text-xl" >
                <span>No. Productos</span>
                <span className="text-right">{cartProducts.length} Productos</span>

                <span>Subtotal</span>
                <span className="text-right">{currencyFormat(account.subTotal)}</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">{currencyFormat(account.porcentaje)}</span>

            </div>

            <div className="flex justify-between">
                <span className="text-3xl font-semibold">Total</span><span className="text-4xl font-bold text-green-600">{currencyFormat(account.total)}</span>
            </div>

            <LinkButton text="Comprar" className="w-full text-xl rounded-none mb-3" href="/address" />
        </div>
    )
}
