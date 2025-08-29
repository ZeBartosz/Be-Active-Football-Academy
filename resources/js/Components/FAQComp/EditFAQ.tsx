import { useForm } from "@inertiajs/react";

function EditFAQ({ faq }) {
    const { data, setData, put, processing, errors } = useForm({
        question: faq.question || "",
        answer: faq.answer || "",
    });

    function handleFAQUpdate(e) {
        e.preventDefault();
        put(route("faq.update", { faq: faq.id }, data));
    }

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center">
                <div className="relative inset-10 w-full max-w-md rounded-lg border p-8 shadow-md">
                    <h1 className="form-title">Edit FAQ</h1>
                    <form onSubmit={handleFAQUpdate}>
                        {/* Question */}
                        <div className="form-group">
                            <label htmlFor="question">Question:</label>
                            <input
                                type="text"
                                name="question"
                                value={data.question}
                                onChange={(e) =>
                                    setData("question", e.target.value)
                                }
                            />
                            {errors.question && (
                                <p className="form-error">{errors.question}</p>
                            )}
                        </div>

                        {/* question */}
                        <div className="form-group">
                            <label htmlFor="answer">Answer:</label>
                            <input
                                type="text"
                                name="answer"
                                value={data.answer}
                                onChange={(e) =>
                                    setData("answer", e.target.value)
                                }
                            />
                            {errors.answer && (
                                <p className="form-error">{errors.answer}</p>
                            )}
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="form-button"
                            disabled={processing}
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditFAQ;
