"use client"

import { RiLogoutBoxLine } from "react-icons/ri"
import { logout } from "@/actions"


export function ButtonSignOut() {


    return (
        <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => logout()}
        >
            <RiLogoutBoxLine size={30} />
            <p className="underline underline-offset-2">Cerrar Sesión</p>
        </div>
    )
}
