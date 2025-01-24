import { auth } from "@/auth.config";
import { AddressForm } from "@/ui";
import { redirect } from "next/navigation";

export default async function AddressPage() {

    const session = await auth()

    if (!session) {
        redirect("/auth/login")
    }

    return (
        <div className="max-w-[1000px] mx-auto px-4 mt-4 mb-10">
            <h2 className="text-5xl font-semibold">Dirección</h2>
            <span>Dirección de entrega</span>
            <AddressForm />
        </div>
    );
}