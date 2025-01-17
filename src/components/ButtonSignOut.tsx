"use client"

import { logout } from "@/actions"


export function ButtonSignOut() {

    return (
        <p onClick={() => logout()} className="cursor-pointer">
            Cerrar
        </p>
    )
}
