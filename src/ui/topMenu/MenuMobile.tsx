"use client"

import { IconMenu } from "@/components";
import { useMenuMobile } from "@/store";


export function MenuMobile() {

    const menuChange = useMenuMobile(state => state.changeMenuMobile)

    return (
        <div
            onClick={() => menuChange()}
            className="block md:hidden"
        >

            <IconMenu />
        </div>
    )
}
