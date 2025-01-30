import React from "react";
interface LogoProps {
    version?: 'dark' | 'light';
    width: number;
    svg: string;
    logoRoute: string;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
