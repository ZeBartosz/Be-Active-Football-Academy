import React, { useEffect, useState } from "react";

export default function Background({
    background = "/storage/assets/logo.png",
}) {
    const [bgURL, setBgURL] = useState(background);

    useEffect(() => {
        setBgURL(background || "/storage/assets/logo.png");
    }, [background]);

    return (
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bgURL}')` }}
        >
            <div className="absolute inset-0 bg-[rgba(10,76,173,0.95)]" />
        </div>
    );
}
