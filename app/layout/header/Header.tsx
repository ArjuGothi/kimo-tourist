'use client';
import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
    const [dimensions, setDimensions] = React.useState(2)

    React.useEffect(() => {
        function handleResize() {
            if (dimensions !== window.innerWidth) {
                setDimensions(window.innerWidth);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    if (dimensions === 2) {
        return ''
    }
    return dimensions <= 768 ? <MobileHeader /> : <DesktopHeader />;
}