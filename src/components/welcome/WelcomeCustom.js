import React, { useEffect, useState } from "react";
import './WelcomeStyles.css';

export const WelcomeCustom = ({ onHide }) => {
    const [scrollY, setScrollY] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const newY = window.scrollY;

            if (!hasScrolled) {
                setScrollY(newY);
                if (newY > 200) {
                    setHasScrolled(true);
                    if (onHide) {
                        onHide();
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled, onHide]);

    if (hasScrolled) return null;

    const opacity = Math.max(1 - scrollY / 200, 0);
    const scale = 1 + (scrollY / 200) * 3;

    return (
        <div
            className="welcomesign"
            style={{
                opacity: opacity,
                transform: `scale(${scale})`,
                pointerEvents: opacity === 0 ? 'none' : 'auto',
            }}
        >
            <h1>PORTFOLIO.</h1>
            <div className="tutorial">
                <h2>Przewiń w dół aby zacząć.</h2>
            </div>
        </div>
    );
};


