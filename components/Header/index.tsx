import React from "react";

const Header = () => {
    return (
        <header className="h-20">
            <div className="flex items-center justify-between">
                <div className="LOGO">
                    <h3 className="text-secondary-foreground font-medium">
                        Automate
                    </h3>
                </div>
                <div className="flex gap-3 flex-row"></div>
            </div>
        </header>
    );
};

export default Header;
