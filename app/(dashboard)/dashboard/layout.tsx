import Header from "@/components/header/index";
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="max-w-7xl mx-auto">
            <Header />
            {children}
        </main>
    );
}
