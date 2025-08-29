import { useForm } from "@inertiajs/react";

export default function CreateProgramGroup() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        age_range: "",
        image: null,
    });

    function handleProgramGroupCreation(e) {
        e.preventDefault();
        post(route("program_group.store", data));
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <div className="relative inset-10 w-full max-w-md rounded-lg border p-8 shadow-md">
                <h1 className="form-title">Create Program Group</h1>
                <form onSubmit={handleProgramGroupCreation}>
                    <div className="form-group">
                        {/* Title */}
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        {errors.title && (
                            <p className="form-error">{errors.title}</p>
                        )}
                    </div>

                    {/* description */}
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            type="text"
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

                    {/* age_range */}
                    <div className="form-group">
                        <label htmlFor="age_range">Age Range:</label>
                        <input
                            type="text"
                            name="age_range"
                            value={data.age_range}
                            onChange={(e) =>
                                setData("age_range", e.target.value)
                            }
                        />
                        {errors.age_range && (
                            <p className="form-error">{errors.age_range}</p>
                        )}
                    </div>

                    {/* image */}
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        {errors.image && (
                            <p className="form-error">{errors.image}</p>
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
