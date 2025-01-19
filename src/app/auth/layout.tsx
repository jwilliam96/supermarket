import { auth } from "@/auth-config";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
};
export default async function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex items-center justify-center min-h-screen">
            {children}
        </div>
    );
}