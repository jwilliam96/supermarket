
export function CartOrder() {
    return (
        <div className=" border rounded-xl p-4">
            <h3 className="text-2xl">Resumen de orden</h3>

            <div className="my-6 grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">5 Productos</span>

                <span>Subtotal</span>
                <span className="text-right">$ 400</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">$ 500</span>

            </div>

            <div className="flex justify-between">
                <span>Total</span><span></span>
            </div>

        </div>
    )
}
