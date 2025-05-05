export default function ConfirmationCard({
    message,
    onConfirm,
    onCancel,
    processing,
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <div className="w-full max-w-md rounded-lg bg-white p-10 text-black shadow-lg">
                <p className="mb-4 text-center text-2xl">{message}</p>
                <div className="flex justify-center space-x-3 text-xl">
                    <button
                        onClick={onCancel}
                        className="py-2hover:bg-gray-300 rounded bg-gray-200 px-4"
                        disabled={processing}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        disabled={processing}
                    >
                        {processing ? "Deleting…" : "Confirm"}
                    </button>
                </div>
            </div>
        </div>
    );
}
