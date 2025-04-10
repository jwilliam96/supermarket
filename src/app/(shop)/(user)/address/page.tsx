import { AddressForm } from "@/ui";

export default async function AddressPage() {

    return (
        <div className="max-w-[1000px] mx-auto px-4 mt-4 mb-10">
            <h2 className="text-5xl font-semibold">Dirección</h2>
            <span>Dirección de entrega</span>
            <AddressForm />
        </div>
    );
}