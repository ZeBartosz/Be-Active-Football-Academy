import { useForm } from "@inertiajs/react";

type Contact = {
    id: number;
    description?: string | null;
    email: string;
    number: string;
    address_line1: string;
    address_line2?: string | null;
};

export default function EditContactInfo({ contact }: { contact: Contact }) {
    const { data, setData, put, processing, errors } = useForm({
        description: contact?.description || "",
        email: contact?.email || "",
        number: contact?.number || "",
        address_line1: contact?.address_line1 || "",
        address_line2: contact?.address_line2 || "",
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(route("contact-info.update", { contactInfo: contact.id }), {
            preserveScroll: true,
        });
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <div className="relative inset-10 w-full max-w-md rounded-lg border p-8 shadow-md">
                <h1 className="form-title">Update Contact Info</h1>
                <form onSubmit={handleSubmit}>
                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <p className="form-error">{errors.description}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email}</p>
                        )}
                    </div>

                    {/* Number */}
                    <div className="form-group">
                        <label htmlFor="number">Number:</label>
                        <input
                            id="number"
                            type="text"
                            name="number"
                            value={data.number}
                            onChange={(e) => setData("number", e.target.value)}
                        />
                        {errors.number && (
                            <p className="form-error">{errors.number}</p>
                        )}
                    </div>

                    {/* Address Line 1 */}
                    <div className="form-group">
                        <label htmlFor="address_line1">Address line 1:</label>
                        <input
                            id="address_line1"
                            type="text"
                            name="address_line1"
                            value={data.address_line1}
                            onChange={(e) =>
                                setData("address_line1", e.target.value)
                            }
                        />
                        {errors.address_line1 && (
                            <p className="form-error">{errors.address_line1}</p>
                        )}
                    </div>

                    {/* Address Line 2 */}
                    <div className="form-group">
                        <label htmlFor="address_line2">Address line 2:</label>
                        <input
                            id="address_line2"
                            type="text"
                            name="address_line2"
                            value={data.address_line2}
                            onChange={(e) =>
                                setData("address_line2", e.target.value)
                            }
                        />
                        {errors.address_line2 && (
                            <p className="form-error">{errors.address_line2}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="form-button"
                        disabled={processing}
                    >
                        {processing ? "Saving…" : "Save"}
                    </button>
                </form>
            </div>
        </div>
    );
}
