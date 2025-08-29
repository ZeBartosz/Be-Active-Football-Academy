import { useState } from "react";
import { useForm } from "@inertiajs/react";

export function useConfirmHook(routeName, routeParamKey, method) {
    const form = useForm();
    const { processing } = form;

    const [open, setOpen] = useState(false);
    const [targetId, setTargetId] = useState(null);

    function openConfirm(id) {
        setTargetId(id);
        setOpen(true);
    }

    function cancel() {
        setOpen(false);
        setTargetId(null);
    }

    function confirm(e) {
        e.preventDefault();

        form[method](
            route(routeName, { [routeParamKey]: targetId }),
            {},
            { preserveScroll: true },
        );

        setOpen(false);
        setTargetId(null);
    }

    return {
        open,
        processing,
        openConfirm,
        confirm,
        cancel,
    };
}
