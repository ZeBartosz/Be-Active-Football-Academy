import React from "react";

import { useConfirmHook } from "../Hook/UseConfirmHook.jsx";
import ConfirmationCard from "./ConfirmationCard.jsx";

export default function ConfirmButton({
    id,
    routeName,
    routeParamKey,
    className,
    method,
    children,
    message,
}) {
    const { open, processing, openConfirm, confirm, cancel } = useConfirmHook(
        routeName,
        routeParamKey,
        method,
    );

    return (
        <>
            <button
                type="button"
                onClick={() => openConfirm(id)}
                className={className}
                disabled={processing}
            >
                {children}
            </button>

            {open && (
                <ConfirmationCard
                    message={message}
                    processing={processing}
                    onConfirm={confirm}
                    onCancel={cancel}
                />
            )}
        </>
    );
}
