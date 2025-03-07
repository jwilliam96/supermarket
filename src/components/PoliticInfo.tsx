"use client"; // para que sea un componente del lado del cliente

import { politicInfo } from "@/utils";
import { useState } from "react";


export default function PoliticInfo() {

    const [isOpenToggle, setIsOpenToggle] = useState(politicInfo[0].title);

    const toggleInfo = (data: string) => {
        if (isOpenToggle === data) {
            setIsOpenToggle("")
        } else {
            setIsOpenToggle(data);
        }
    };

    return (

        <>
            {
                politicInfo.map(info => (
                    <div className="p-4" key={info.title}>
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleInfo(info.title)}>
                            <h2 className="text-lg font-semibold">{info.title}</h2>
                            <button className="text-2xl font-bold">
                                {isOpenToggle === info.title ? '-' : '+'}
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenToggle === info.title ? ' max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="mt-2 p-4 bg-gray-100 rounded-md">
                                <p>
                                    {info.description}
                                </p>
                            </div>
                        </div>
                        <div className="h-[1px] mt-6 bg-black rounded-full" />
                    </div>
                ))
            }
        </>

    );
}
