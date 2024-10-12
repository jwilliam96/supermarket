import { Address } from "@/ui";

export default function AddressPage() {
    return (
        <div className="max-w-[1000px] mx-auto px-4 my-8">
            <h2 className="text-3xl font-semibold">Dirección</h2>
            <span>Dirección de entrega</span>
            <Address />
        </div>
    );
}