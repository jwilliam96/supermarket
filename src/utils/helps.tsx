

import { BiSupport } from "react-icons/bi";
import { BsBasket2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";


interface ServiceInfo {
    icon: JSX.Element
    title: string
    description: string
}

interface CategoryPopular {
    title: string
    image: string
}

export const serviceInfo: ServiceInfo[] = [
    {
        icon: <CiDeliveryTruck size={50} />,
        title: "Entrega gratis",
        description: "A tu puerta"
    },
    {
        icon: <BsBasket2 size={50} />,
        title: "Entrega local",
        description: "Busca las ubicaciones"
    },
    {
        icon: <BiSupport size={50} />,
        title: "A tu disposición",
        description: "Asistencia online 24/7"
    },
    {
        icon: <MdPhoneIphone size={50} />,
        title: "Pide en el camino",
        description: "Descarga la app"
    },
]

export const categoryPopular: CategoryPopular[] = [
    {
        title: "Vegetales",
        image: "/home/populares/vegetales.png"
    },
    {
        title: "Panadería",
        image: "/home/populares/panaderia.png"
    },
    {
        title: "Vinos",
        image: "/home/populares/vinos.png"
    },
    {
        title: "Lácteos y huevos",
        image: "/home/populares/lacteos_huevos.png"
    },
    {
        title: "Carnes y aves",
        image: "/home/populares/carnes.png"
    },
    {
        title: "Bebidas sin alcohol",
        image: "/home/populares/bebidas.png"
    },
    {
        title: "Productos de limpieza",
        image: "/home/populares/limpieza.png"
    },
    {
        title: "Cereales y botanas",
        image: "/home/populares/cereales.png"
    },
]

export const imagesHeader = [{ img: "/home/img1.png", description: "pan" }, { img: "/home/img2.png", description: "cafe" }, { img: "/home/img3.png", description: "oso de peluche" }]

export const politicInfo = [
    { title: "Información del producto", description: "Detalle del producto. Lugar ideal para agregar más información sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento. También es un buen espacio para explicar lo especial que es tu producto y sus beneficios. A los compradores les gusta saber lo que van a recibir antes de comprarlo, así que proporciona toda la información posible para que puedan comprar con seguridad y confianza." },
    { title: "Política de devolución y reembolso", description: "Política de devolución y reembolso. Lugar ideal para explicar a tus clientes qué hacer si no están satisfechos con su compra. Tener una política de reembolso o cambio clara es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad." },
    { title: "Información de envío", description: "Política de envío. Lugar ideal para agregar más información sobre tus métodos de envío, empaquetado y costos. Brindar información clara sobre tu política de envío es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad." }
]