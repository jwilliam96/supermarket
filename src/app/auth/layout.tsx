import { redirect } from "next/navigation";
import { auth } from "@/auth.config";

export const metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
};
export default async function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const session = await auth()
    if (session) {
        redirect("/")
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            {children}
        </div>
    );
}