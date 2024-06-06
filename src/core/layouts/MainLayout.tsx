import Header from "../partials/header/Header";
import Sidebar from "../partials/sidebar/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen sm:pl-64 w-full">
        <Header />
        {children}
      </main>
    </>
  );
}
