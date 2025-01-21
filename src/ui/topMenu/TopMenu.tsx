import { IconCorazonLleno } from "@/components/icons/Icons";
import { FaLocationDot } from "react-icons/fa6";
import { selectOption } from "@/utils/topMenu";
import { ButtonSignOut } from "@/components";
import logo from "/public/logo-completo.svg"
import { auth } from "@/auth-config";
import CartMenu from "./CartMenu";
import { Search } from "./Search";
import Image from "next/image";
import Link from "next/link";

export async function TopMenu() {

    const session = await auth()

    return (
        <header className=" text-white">

            {/* ATENCIÓN AL CLIENTE */}
            <div className="bg-red-800 py-5 px-4">
                <div className="flex justify-between items-center text-center text-sm ss:text-base max-w-[1600px] mx-auto">
                    <ul className="flex gap-4">
                        <li>Acerca de</li>
                        <li>Atención al Cliente</li>
                    </ul>

                    <p className="hidden lg:block">-20% en tu primer pedido. Suscríbete</p>

                    {/*  USER = NAME / IMAGE  */}
                    <div className="flex gap-4 items-center lg:ml-36">

                        {session?.user ? (
                            <>
                                <p > {session.user.name.toUpperCase()}</p>
                                <figure>
                                    <Image
                                        src={session.user.image ?? "https://i.pinimg.com/474x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg"}
                                        alt="foto de usuario"
                                        width={45}
                                        height={45}
                                        className="rounded-full"
                                    />
                                </figure>
                            </>
                        ) : (
                            <figure className="w-8 h-8 bg-black rounded-full"></figure>
                        )
                        }
                        {
                            session ? (
                                <ButtonSignOut />
                            ) : (

                                <Link href={"/auth/login"}>Entrar</Link>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* SEARCH, CART  */}
            <div className="bg-red-500 py-5">

                <div className="flex gap-6 justify-between items-center px-6 max-w-[1600px] mx-auto ">
                    {/* lOGO  */}
                    <Link href={"/"} ><Image src={logo} alt="logo" className="h-[70px] w-auto" priority /></Link>

                    {/* SEARCH  */}
                    <div className="hidden sm:block max-w-[450px] w-full ">
                        <Search />
                    </div>

                    {/* CART, FAVORITE */}
                    <div className="flex gap-4">
                        <FaLocationDot size={25} />
                        <Link href={"/favorite"}><IconCorazonLleno size={27} /></Link>
                        <CartMenu />
                    </div>
                </div>
                {/* SEARCH MOBILE  */}
                <div className="sm:hidden block mt-4 px-6 max-w-[450px] w-full mx-auto">
                    <Search />
                </div>
            </div>

            {/* LIST  */}
            <div className="hidden md:flex justify-center py-6 ">
                <div className="text-black lg:text-xl flex gap-8">
                    {
                        selectOption.map(option => (
                            <div key={option.title} className="group relative">
                                <Link href={`/categories/${option.title}`} className="hover:text-red-500 cursor-pointer px-4 text-center">{option.title}</Link>

                                {/* HOVER LISTA  */}
                                {
                                    option.menu && (
                                        <ul className="hidden group-hover:block absolute z-[60] rounded-lg bg-red-500 text-white w-[200px] p-4 space-y-2 ">
                                            {
                                                option.menu.map(list => (
                                                    <li key={list} className="cursor-pointer hover:underline capitalize">
                                                        <Link href={`/categories/${list}`}>{list}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}
