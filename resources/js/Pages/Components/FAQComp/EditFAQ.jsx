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
            <h1>edit the faq</h1>
            <form onSubmit={handleFAQUpdate}>
                {/* Question */}
                <label htmlFor="question">Question:</label>
                <input
                    type="text"
                    name="question"
                    value={data.question}
                    onChange={(e) => setData("question", e.target.value)}
                />
                {errors.question && (
                    <p className="text-red-500">{errors.question}</p>
                )}

                {/* question */}
                <label htmlFor="answer">Answer:</label>
                <input
                    type="text"
                    name="answer"
                    value={data.answer}
                    onChange={(e) => setData("answer", e.target.value)}
                />
                {errors.answer && (
                    <p className="text-red-500">{errors.answer}</p>
                )}

                {/* Button */}
                <button type="submit" disabled={processing}>
                    {processing ? "Submitting..." : "Submit"}
                </button>
            </form>
        </>
    );
}

export default EditFAQ;
