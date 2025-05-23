import Background from "../Components/Background/Background.jsx";
import { useForm } from "@inertiajs/react";

export default function CreateProgram({ programGroup }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        price: "",
    });

    function handleProgramCreation(e) {
        e.preventDefault();
        post(route("program.store", { programGroup: programGroup.id }, data));
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <Background background={null} />

            <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                <h1 className="form-title">Create Program Group</h1>
                <form onSubmit={handleProgramCreation}>
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

                    {/* price */}
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                        />
                        {errors.price && (
                            <p className="form-error">{errors.price}</p>
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
