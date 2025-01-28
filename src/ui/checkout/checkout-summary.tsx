"use client"

import { currencyFormat } from "@/utils/currencyFormat"
import { cartStore, useAddress } from "@/store"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation"

export function CheckoutSummary() {

    const order = useAddress(state => state.address)
    const deleteCart = cartStore(state => state.deleteAllCart)
    const [account, setAccount] = useState({ subTotal: 0, total: 0, porcentaje: 0, items: 0 })
    const route = useRouter()

    useEffect(() => {
        const { subTotal, porcentaje, total, items } = cartStore.getState().getTotal()
        setAccount({ total, porcentaje, subTotal, items })
    }, [])

    const buys = () => {
        Swal.fire({
            title: "Compra exitosa!",
            icon: "success",
            draggable: true
        });
        deleteCart()
        setTimeout(() => {
            route.push("/")
        }, 500)

    }


    return (
        <div className="h-full bg-gray-200 rounded-md max-w-[450px] w-full mx-auto p-8 ">

            <h2 className="text-2xl font-bold">Dirección de entrega</h2>

            <ul className="my-6 font-bold">
                <li className="flex justify-between">Nombre : <span className="font-normal">{order?.name}</span></li>
                <li className="flex justify-between">Dirección :  <span className="font-normal">{order?.address}</span></li>
                <li className="flex justify-between">Cgo postal :  <span className="font-normal">{order?.postalCode}</span></li>
                <li className="flex justify-between">Ciudad :  <span className="font-normal">{order?.city}</span></li>
                <li className="flex justify-between">Tel:  <span className="font-normal">{order?.phone}</span></li>
            </ul>

            <h2 className="text-2xl font-bold">Resumen de Orden</h2>

            <ul className="mt-6 mb-8 font-bold">

                <li className="flex justify-between">No. Productos : <span className="font-normal ">{account.items}</span></li>
                <li className="flex justify-between">SubTotal : <span className="font-normal">{currencyFormat(account.subTotal)}</span></li>
                <li className="flex justify-between">Impuesto (15%) : <span className="font-normal">{currencyFormat(account.porcentaje)}</span></li>
            </ul>

            <div className="flex justify-between font-bold text-3xl">
                <h3 >Total</h3>
                <p className=" text-green-700">{currencyFormat(account.total)}</p>
            </div>

            <button
                onClick={buys}
                className="bg-red-500 text-center text-white px-4 py-2 mt-8 w-full hover:bg-red-700">
                Comprar
            </button>
        </div>
    )
}
