import { BiSupport } from "react-icons/bi";
import { BsBasket2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";

interface ServiceInfo {
    icon: JSX.Element
    title: string
    description: string
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