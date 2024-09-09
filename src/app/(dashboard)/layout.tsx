import { Footer, TopMenu } from "@/ui";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <TopMenu />
            {children}
            <Footer />
        </div>
    );
}