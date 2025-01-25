
export function CheckoutSummary() {
    return (
        <div className="h-full bg-gray-200 rounded-md max-w-[450px] w-full mx-auto p-8">

            <h2 className="text-2xl font-bold">Dirección de entrega</h2>

            <ul className="my-6">
                <li>Nombre: </li>
                <li>Dirección:</li>
                <li>Cgo postal:</li>
                <li>Ciudad:</li>
                <li>Tel:</li>
            </ul>

            <h2 className="text-2xl font-bold">Resumen de Orden</h2>

            <ul className="mt-6 mb-8">

                <li>No. Productos</li>
                <li>SubTotal</li>
                <li>Impuesto (15%)</li>
                <li></li>
            </ul>

            <p className="text-3xl font-bold ">Total</p>
        </div>
    )
}
