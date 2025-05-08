import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { usePage } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";

export default function FlashCard() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }, [flash?.success]);

    return <ToastContainer toastClassName="!bg-primary !text-white " />;
}
