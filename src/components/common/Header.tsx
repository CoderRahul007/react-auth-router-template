import React from "react";

interface HeaderProps {  
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <header>
            <h1>Header</h1>
            {/* Navigation links can go here */}
        </header>
    );
}
 
export default Header;