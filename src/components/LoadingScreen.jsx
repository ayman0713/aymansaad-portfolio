import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [showGradient, setShowGradient] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const fullText = "<Ayman Saad />";

    useEffect(() => {
        const gradientTimeout = setTimeout(() => {
            setShowGradient(true);
        }, 1000);

        const contentTimeout = setTimeout(() => {
            setShowContent(true);
        }, 1700);

        return () => {
            clearTimeout(gradientTimeout);
            clearTimeout(contentTimeout);
        };
    }, []);

    useEffect(() => {
        if (!showContent) return;

        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [showContent, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 text-gray-100 flex flex-col items-center justify-center transition-colors duration-700 ${
                showGradient
                    ? "bg-gradient-to-b from-black via-[#0f172a] to-[#054059]"
                    : "bg-black"
            }`}
        >
            {showContent && (
                <>
                    <div className="mb-4 -mt-25 text-4xl font-mono font-bold">
                        {text} <span className="animate-blink ml-1"></span>
                    </div>

                    <div className="w-[200px] h-[5px] bg-gray-800 rounded relative overflow-hidden">
                        <div className="w-[40%] h-full bg-cyan-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
                    </div>
                </>
            )}
        </div>
    );
};
