
import { RiLoginBoxLine } from "react-icons/ri"
import { ButtonSignOut } from "./ButtonSignOut"
import { auth } from "@/auth.config"
import Link from "next/link"


export async function ButtonAuth() {

    const session = await auth()

    return (
        <div>
            {
                session ? (
                    <ButtonSignOut />
                ) : (
                    <div className="flex items-center gap-3">
                        <RiLoginBoxLine size={30} />
                        <Link href={"/auth/login"} className="underline">Iniciar Sesión</Link>
                    </div>
                )
            }
        </div>
    )
}
