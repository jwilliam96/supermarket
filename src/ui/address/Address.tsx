import { Button } from "@/components";

export function Address() {
    return (
        <form className="grid grid-cols-2 gap-10 my-12">


            <div className="space-y-3">
                <div className="grid gap-2">
                    <label htmlFor="userName">Nombre</label>
                    <input className="bg-gray-400" type="text" />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="address">Dirección</label>
                    <input className="bg-gray-400" type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="postal">Código postal</label>
                    <input className="bg-gray-400" type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="country">País</label>
                    <input className="bg-gray-400" type="text" />
                </div>

                <label htmlFor="checkbox" className="block mt-10"><input className="bg-gray-400" type="checkbox" />¿Recordar dirección? </label>

                <Button text="Siguiente" className="w-full rounded-none" />

            </div>

            <div className="space-y-3">
                <div className="grid gap-2">
                    <label htmlFor="lastName">Apellido</label>
                    <input className="bg-gray-400" type="text" />
                </div>


                <div className="grid gap-2">
                    <label htmlFor="addressOptional">Dirección 2 (opcional)</label>
                    <input className="bg-gray-400" type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="city">Ciudad</label>
                    <input className="bg-gray-400" type="text" />
                </div>


                <div className="grid gap-2">
                    <label htmlFor="phone">Teléfono</label>
                    <input className="bg-gray-400" type="text" />
                </div>

            </div>



        </form>
    )
}


