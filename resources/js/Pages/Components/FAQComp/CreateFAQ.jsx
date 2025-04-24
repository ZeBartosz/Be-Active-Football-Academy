import { useForm } from "@inertiajs/react";
import Background from "../Background/Background.jsx";

function CreateFAQ() {
    const { data, setData, post, processing, errors } = useForm({
        question: "",
        answer: "",
    });

    function handleFAQCreation(e) {
        e.preventDefault();
        post(route(`faq.store`), data);
    }

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center">
                <Background background={null} />

                <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                    <h1 className="form-title">Add FAQ</h1>
                    <form onSubmit={handleFAQCreation}>
                        {/* Title  */}
                        <div className="form-group">
                            <label htmlFor="question">Question:</label>
                            <input
                                type="title"
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

                        {/* Description */}
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
                            className="form-button"
                            type="submit"
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

export default CreateFAQ;
