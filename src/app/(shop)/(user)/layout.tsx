import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function Layout({
    children
}: {
    children: React.ReactNode;
}) {

    const session = await auth()

    if (!session) {
        redirect("/auth/login")
    }
    return (
        <div>
            {children}
        </div>
    );
}