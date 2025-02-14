"use client"

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { ButtonSignOut, IconMenu } from "@/components";
import { RiLoginBoxLine } from "react-icons/ri";
import { selectOption } from "@/utils/topMenu";
import { useRouter } from "next/navigation";
import { useMenuMobile } from "@/store";
import { useState } from "react";
import Link from "next/link";


export function MenuMobile({ session }: { session: boolean }) {

    const router = useRouter()
    const menuChange = useMenuMobile(state => state.changeMenuMobile)
    const isMenu = useMenuMobile(state => state.menuMobile)

    const [isOpenToggle, setIsOpenToggle] = useState(selectOption[0].title);

    const toggleSubcategories = (data: string) => {
        if (isOpenToggle === data) {
            setIsOpenToggle("")
        } else {
            setIsOpenToggle(data);
        }
    };

    const newUrl = (url: string) => {
        router.push(url)
        menuChange()
    }

    return (
        <div className="block md:hidden">

            {/* ICON MENU  */}
            <div
                onClick={() => menuChange()}
                className="block md:hidden"
            >

                <IconMenu />
            </div>

            <div>
                {/* FONDO NEGRO  */}
                <div
                    className={`fixed backdrop-filter backdrop-blur-sm bg-black/70 inset-0  z-[70] cursor-pointer ${!isMenu && "hidden"}`}
                    onClick={() => menuChange()}
                />

                {/* CONTAINER MENU */}
                <div className={`fixed flex flex-col z-[80] bg-red-500 max-w-[300px] w-full right-0 top-0 bottom-0 transition-all duration-700 ${!isMenu && "translate-x-full"}`}>

                    {/* CERRAR MODAL  */}
                    <div className="py-7  text-white text-2xl font-semibold relative border-b-2">
                        <IoIosArrowForward size={35} className="absolute left-10 cursor-pointer" onClick={() => menuChange()} />
                        <h2 className=" text-center">Menu</h2>
                    </div>

                    <div className="px-8 pt-4 pb-8 flex flex-col h-full">

                        <div className=" grow">

                            {/* CATEGORÍAS  */}
                            {
                                selectOption.filter(category => category.title.toLowerCase() !== "mis pedidos").map((category) => (

                                    <div key={category.title}>
                                        <div className="flex items-center gap-3 mb-3">

                                            <h2
                                                onClick={() => newUrl(`/categories/${category.title}`)}
                                                className="underline underline-offset-4"
                                            >
                                                {category.title}
                                            </h2>
                                            {
                                                category.menu && (
                                                    <div onClick={() => toggleSubcategories(category.title)}>
                                                        {
                                                            isOpenToggle === category.title ? (
                                                                <IoIosArrowDown size={25} />
                                                            ) :
                                                                (
                                                                    <IoIosArrowForward size={25} />
                                                                )
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>

                                        {/* SUB CATEGORÍAS  */}
                                        <div className={`overflow-hidden bg-red-700 rounded-lg mb-2 transition-all duration-500 ease-in-out ${isOpenToggle === category.title ? ' max-h-96 opacity-100 ' : 'max-h-0 opacity-0'}`}>

                                            <ul className="list-disc list-inside px-2 space-y-1">
                                                {
                                                    category?.menu?.map((subcategory) => (
                                                        <li key={subcategory} onClick={() => newUrl(`/categories/${subcategory}`)}>
                                                            {subcategory}
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            session ? (
                                <ButtonSignOut />
                            ) : (
                                <div className="flex gap-3 items-center">
                                    <RiLoginBoxLine size={30} />
                                    <Link href={"/auth/login"} className="underline underline-offset-2">Iniciar Sesión</Link>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
