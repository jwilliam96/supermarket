import { Footer, TopMenu } from "@/ui";
import CartModal from "@/ui/topMenu/CartModal";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col min-h-screen">
            <CartModal />
            <TopMenu />
            <div className="grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}