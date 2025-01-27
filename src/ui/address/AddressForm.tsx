"use client"

import { addressSchema } from "@/validations/address-Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GiCheckMark } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAddress } from "@/store";
import { useEffect } from "react";
import { z } from "zod";
import clsx from "clsx";

type AddressFormData = z.infer<typeof addressSchema>

export function AddressForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddressFormData>({ resolver: zodResolver(addressSchema) })
    const route = useRouter()

    const changeAddress = useAddress(state => state.toggleAddressState)
    const setAddress = useAddress(state => state.setAddress)
    const isAddress = useAddress(state => state.hasAddress)
    const address = useAddress(state => state.address)


    useEffect(() => {
        reset({ ...address })

    }, [address, reset])


    const submit = handleSubmit((data: AddressFormData) => {

        if (isAddress) {
            setAddress(data)
        } else {
            setAddress()
        }

        route.push("/checkout")
    })

    const handleAddress = () => {
        changeAddress()
    }

    return (
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-x-10 gap-y-5 mt-10 mb-20">

            <div className="grid gap-2">
                <label htmlFor="userName">Nombre
                    {errors.name && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="userName"
                    {...register("name", { required: true })}
                    className={clsx("px-6 bg-gray-300 py-2", errors.name && "outline-red-500 border border-red-500 rounded-md")}
                    type="text" />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            <div className="grid gap-2">
                <label htmlFor="lastName">Apellido
                    {errors.lastName && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="lastName"
                    {...register("lastName")}
                    className={clsx("px-6 bg-gray-300 py-2", errors.lastName && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />
                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
            </div>

            <div className="grid gap-2">
                <label htmlFor="country">País
                    {errors.country && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="country"
                    {...register("country", { required: true })}
                    className={clsx("px-6 bg-gray-300 py-2", errors.country && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />
                {errors.country && <span className="text-red-500">{errors.country.message}</span>}
            </div>

            <div className="grid gap-2">
                <label htmlFor="city">Ciudad
                    {errors.city && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="city"
                    {...register("city", { required: true })}
                    className={clsx("px-6 bg-gray-300 py-2", errors.city && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />
                {errors.city && <span className="text-red-500">{errors.city.message}</span>}
            </div>


            <div className="grid gap-2">
                <label htmlFor="address">Dirección
                    {errors.address && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="address"
                    {...register("address", { required: true })}
                    className={clsx("px-6 bg-gray-300 py-2", errors.address && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />
            </div>

            <div className="grid gap-2">
                <label htmlFor="postalCode">Código postal
                    {errors.postalCode && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="postalCode"
                    {...register("postalCode", { required: true })}
                    className={clsx("px-6 bg-gray-300 py-2", errors.postalCode && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />
                {errors.postalCode && <span className="text-red-500">{errors.postalCode.message}</span>}
            </div>

            <div className="grid gap-2">
                <label htmlFor="addressOptional">Dirección 2 (opcional)</label>
                <input
                    id="addressOptional"
                    {...register("addressOptional")}
                    className={clsx("px-6 bg-gray-300 py-2", errors.addressOptional && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />

            </div>

            <div className="grid gap-2">
                <label htmlFor="phone">Teléfono
                    {errors.phone && <span className="text-red-500 text-xl"> *</span>}
                </label>
                <input
                    id="phone"
                    {...register("phone", { required: true })}
                    className={clsx("px-6 bg-gray-300 py-2", errors.phone && "outline-red-500 border border-red-500 rounded-md")}
                    type="text"
                />
                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>

            <div>
                <div className=" flex gap-4 items-center">
                    <div
                        onClick={handleAddress}
                        className={
                            clsx("size-6 border border-gray-500 rounded-md flex items-center justify-center p-1 cursor-pointer",
                                isAddress && "border-red-500"
                            )

                        }
                    >
                        {
                            isAddress && (
                                <GiCheckMark className="text-red-500" />
                            )
                        }
                    </div>
                    <span>¿Recordar dirección?</span>
                </div>

                <button className="bg-red-500 w-full text-white px-4 py-2  mx-auto block my-8 hover:bg-red-700">Siguiente</button>
            </div>
        </form>
    )
}


