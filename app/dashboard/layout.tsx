import React from 'react';
import SideNav from "../ui/sidenav";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </section>
    );
};

export default Layout;