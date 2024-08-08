import Image from "next/image";

export function SpecialOffersOne() {
    return (
        <div className="grid grid-cols-3 gap-10 my-20">

            {/* VINO  */}

            <figure className="col-span-2 relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-[20%]">
                    <div className="h-32 w-32 rounded-full absolute -top-16 right-0 bg-red-500 flex flex-col justify-center items-center text-white rotate-12 text-2xl font-bold" >
                        <p>oferta</p>
                        <span>limitada</span>
                    </div>

                    <p className="font-bold text-xl">¡Es la hola del vino!</p>
                    <p className="text-5xl font-bold my-4">Gran oferta en </p>
                    <h3 className="text-7xl font-bold">Vinos selectos</h3>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full my-8 hover:bg-red-700">Comprar ahora</button>
                </div>
                <Image
                    className="w-full object-cover "
                    src={"/home/vino.png"}
                    width={800}
                    height={300}
                    alt="botella de vino" />
            </figure>

            {/* ESPONJA  */}

            <figure className="relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                    <p className="text-xl font-bold">Oferta de la semana</p>
                    <h3 className="text-9xl font-bold">-40%</h3>
                    <p className="text-3xl font-bold">Productos de limpieza</p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full my-8 hover:bg-red-700">Comprar ahora</button>
                </div>
                <Image
                    className="h-full object-cover"
                    src={"/home/esponja.png"}
                    width={800}
                    height={300}
                    alt="botella de vino" />
            </figure>
        </div>
    )
}
