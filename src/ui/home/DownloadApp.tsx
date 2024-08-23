import Image from "next/image";

export function DownloadApp() {
    return (
        <div className="relative my-16">

            {/* DESCRIPCIÓN Y CELULAR */}

            <div className="absolute left-[20%] inset-y-0 m-auto max-w-max z-50 flex">
                <div className="relative">
                    <Image className="absolute top-8 left-9  w-[300px] h-[500px] object-contain" src={"/home/section1Cel.png"} width={400} height={600} alt="un fondo de celular" />
                    <Image src={"/home/fondoCel.png"} width={370} height={600} alt="un fondo de celular" />
                </div>

                <div className="text-white w-[400px] flex flex-col justify-center">
                    <p className="text-2xl font-bold">Ahorra tiempo y dinero</p>
                    <h3 className="text-7xl font-bold my-6">Compra en el camino</h3>
                    <p className="text-xl">Tu compra semanal, en la puerta de tu casa en un clic</p>
                </div>

            </div>

            {/* FONDO IMAGEN  */}

            <figure className="relative">
                <div className="absolute inset-0 bg-[#00000052] z-30" />
                <Image
                    className="w-full h-[500px] object-cover object-top relative"
                    src={"/home/section1.png"} width={1600} height={400} alt="mujer con un celular" />
            </figure>


        </div>
    )
}
