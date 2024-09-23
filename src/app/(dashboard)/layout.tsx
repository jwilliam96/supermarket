import { Footer, TopMenu } from "@/ui";
import CartModal from "@/ui/topMenu/CartModal";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative">
            <CartModal />
            <TopMenu />
            {children}
            <Footer />
        </div>
    );
}