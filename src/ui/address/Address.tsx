import { Button } from "@/components";

export function Address() {
    return (
        <form className="grid grid-cols-2 my-12">


            <div>
                <div className="grid gap-2">
                    <label htmlFor="userName">Nombre</label>
                    <input type="text" />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="address">Dirección</label>
                    <input type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="postal">Código postal</label>
                    <input type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="country">País</label>
                    <input type="text" />
                </div>

                <label htmlFor="checkbox"><input type="checkbox" />¿Recordar dirección? </label>

                <Button text="Siguiente" className="w-full rounded-none" />

            </div>

            <div>
                <div className="grid gap-2">
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" />
                </div>


                <div className="grid gap-2">
                    <label htmlFor="addressOptional">Dirección 2 (opcional)</label>
                    <input type="text" />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="city">Ciudad</label>
                    <input type="text" />
                </div>


                <div className="grid gap-2">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" />
                </div>

            </div>



        </form>
    )
}


