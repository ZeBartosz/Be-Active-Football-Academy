import { useForm } from "@inertiajs/react";

function CreateFAQ() {
    const { data, setData, post, processing, errors } = useForm({
        question: "",
        answer: "",
    });

    function handleFAQCreation(e) {
        e.preventDefault();
        post("/FAQ/create");
    }

    return (
        <>
            <h1>ADD FAQ</h1>
            <form onSubmit={handleFAQCreation}>
                {/* Title  */}
                <label htmlFor="question">Question:</label>
                <input
                    type="title"
                    name="question"
                    value={data.question}
                    onChange={(e) => setData("question", e.target.value)}
                />
                {errors.question && (
                    <p className="text-red-500">{errors.question}</p>
                )}

                {/* Description */}
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

export default CreateFAQ;
