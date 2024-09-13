import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {


    return (
        <footer className=" bg-red-500 text-white px-4 py-8 md:p-20">

            <div className="flex gap-6 flex-col items-center text-center md:flex-row md:items-start md:justify-between">

                <section className="flex flex-col">
                    <h1 className="text-4xl font-bold">Trébol</h1>
                    <h2 className="text-xl font-bold my-2">¿Necesitas ayuda?</h2>
                    <p className="my-2">Visita Atención al Cliente
                        <br />
                        para ayuda o llámanos al </p>
                    <span className="text-xl font-bold my-4">+52-1-33-12345678</span>
                    <div className="flex gap-4 grow items-center">
                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                        <FaTwitter size={25} />
                        <FaYoutube size={25} />
                    </div>
                </section>

                <div className="hidden lg:block">
                    <h3 className="mb-6 text-2xl font-bold" >Menú</h3>
                    <ul className="flex flex-col gap-2">
                        <li>Ofertas</li>
                        <li>Comida</li>
                        <li>Bebidas</li>
                        <li>Limpieza del hogar</li>
                        <li>Cuidado personal</li>
                        <li>Más vendidos</li>
                        <li>Mis pedidos</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-2xl font-bold" >Categorías</h3>
                    <ul className="flex flex-col gap-2">
                        <li>Vegetales</li>
                        <li>Panadería</li>
                        <li>Vino</li>
                        <li>Lácteos y huevo</li>
                        <li>Carne y aves</li>
                        <li>Bebidas sin alcohol</li>
                        <li>Productos de Limpieza</li>
                        <li>Cereales y botanas</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-2xl font-bold" >Info</h3>
                    <ul className="flex flex-col gap-2">
                        <li>FAQ</li>
                        <li>Acerca de</li>
                        <li>Atención al cliente</li>
                        <li>Ubicaciones</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-2xl font-bold" >Mi elección</h3>
                    <ul className="flex flex-col gap-2">
                        <li>Favoritos</li>
                        <li>Mis pedidos</li>
                    </ul>
                </div>
            </div>
            <div className="h-0.5 bg-white rounded-full my-14" />
        </footer>
    )
}
