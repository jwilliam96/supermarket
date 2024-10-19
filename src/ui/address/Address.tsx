import { Button } from "@/components";

export function Address() {
    return (
        <form className="grid grid-cols-2 gap-10 mt-10 mb-20">
            <div className="space-y-3">
                <div className="grid gap-2">
                    <label htmlFor="userName">Nombre</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="address">Dirección</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="postalCode">Código postal</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="country">País</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>

                <div className="py-4 flex gap-4 items-center">
                    <div className="size-5 border border-gray-500 rounded-md"></div>
                    <span>¿Recordar dirección?</span>
                </div>

                <Button text="Siguiente" className="w-full rounded-none" />

            </div>

            <div className="space-y-3">
                <div className="grid gap-2">
                    <label htmlFor="lastName">Apellido</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>


                <div className="grid gap-2">
                    <label htmlFor="addressOptional">Dirección 2 (opcional)</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="city">Ciudad</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>


                <div className="grid gap-2">
                    <label htmlFor="phone">Teléfono</label>
                    <input className="px-6 bg-gray-300 py-2" type="text" />
                </div>
            </div>
        </form>
    )
}


