import { useForm } from "@inertiajs/react";

export default function CreateResponsibility({ event, staff }) {
    const { data, setData, post, processing, errors } = useForm({
        event_id: event.id,
        staff_id: "",
        description: "",
    });

    function handleResponsibilityCreation(e) {
        e.preventDefault();
        post(route("responsibility.store", { event: event.id }));
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <div className="relative inset-10 w-full max-w-md rounded-lg border p-8 shadow-md">
                <h1 className="form-title">Create Responsibility</h1>
                <form onSubmit={handleResponsibilityCreation}>
                    {/* Staff/Coach Select */}
                    <div className="form-group">
                        <label htmlFor="staff_id">Team Member</label>
                        <select
                            id="staff_id"
                            name="staff_id"
                            value={data.staff_id}
                            onChange={(e) =>
                                setData("staff_id", e.target.value)
                            }
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        >
                            <option value="">-- choose someone --</option>
                            {staff.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.user.first_name} {p.user.last_name} (
                                    {p.role})
                                </option>
                            ))}
                        </select>
                        {errors.staff_id && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.staff_id}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        />
                        {errors.description && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    <button
                        className="form-button"
                        type="submit"
                        disabled={processing}
                    >
                        {processing ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}
