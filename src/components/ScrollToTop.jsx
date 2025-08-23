import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:text-secondary active:text-secondary transition"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
