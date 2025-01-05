
export const metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
};
export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 flex items-center">
                {children}
            </div>
        </div>
    );
}