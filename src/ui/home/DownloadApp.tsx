import Image from "next/image";
import imageDownloader from "/public/home/downloader.webp"

export function DownloadApp() {
    return (
        <div className="relative my-16 h-[500px]">

            {/* DESCRIPCIÓN Y CELULAR */}

            <div className="absolute xl:left-[10%] 2xl:left-[20%] inset-y-0 m-auto z-50 flex">

                <div className="relative hidden md:block">
                    <Image className="absolute top-9 left-11 w-[300px] h-[500px] object-contain"
                        src={"/home/section1Cel.png"}
                        width={400}
                        height={600}
                        alt="un fondo de celular" />
                    <Image
                        className="w-auto h-auto"
                        src={"/home/fondoCel.png"}
                        width={370}
                        height={600}
                        alt="un fondo de celular" />
                </div>

                <div className="text-white px-6 md:px-0 ss:w-[450px] md:w-[400px] flex flex-col justify-center">
                    <p className="text-xl sm:text-2xl font-bold">Ahorra tiempo y dinero</p>
                    <h3 className="text-5xl sm:text-7xl font-bold my-6">Compra en el camino</h3>
                    <p className="text-xl">Tu compra semanal, en la puerta de tu casa en un clic</p>

                    <figure className="mt-4">
                        <Image src={imageDownloader} alt="logo" />
                    </figure>
                </div>

            </div>

            {/* FONDO IMAGEN  */}
            <div className="absolute inset-0 bg-[#00000052] z-30" />
            <Image
                className="w-full h-[500px] object-cover object-top relative"
                src={"/home/section1.png"}
                fill
                sizes="100vw"
                alt="mujer con un celular" />


        </div>
    )
}
