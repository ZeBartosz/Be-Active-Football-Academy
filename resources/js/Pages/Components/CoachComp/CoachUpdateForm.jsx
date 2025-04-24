import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Background from "../Background/Background.jsx";

function CoachUpdateForm({ coach }) {
    const { data, setData, post, processing, progress, errors } = useForm({
        about: coach.about || "",
        avatar: null,
        skills: coach.skills || [],
    });

    const [skills, setSkills] = useState(
        Array.isArray(coach.skills)
            ? coach.skills.map((skill) => ({ value: skill }))
            : [{ value: "" }],
    );

    const handleValueChange = (index, e) => {
        const values = [...skills];
        values[index].value = e.target.value;
        setSkills(values);
        setData(
            "skills",
            skills.map((skill) => skill.value),
        );
    };

    const handleAddSkill = () => {
        if (skills.length < 5) {
            setSkills([...skills, { value: "" }]);
        }
    };

    const handleRemoveSkill = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    };

    function handleEditCoach(e) {
        e.preventDefault();

        post(route("coach.update", { coach: coach.id }, data));
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <Background background={null} />

            <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                <h1 className="form-title">Coach Update Form</h1>
                <form name="formSubmit" onSubmit={handleEditCoach}>
                    <div className="form-group">
                        <label htmlFor="avatar">Avatar:</label>
                        <input
                            type="file"
                            name="avatar"
                            onChange={(e) =>
                                setData("avatar", e.target.files[0])
                            }
                        />
                        {errors.avatar && (
                            <p className="form-error">{errors.avatar}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About:</label>
                        <textarea
                            id="about"
                            name="about"
                            value={data.about}
                            onChange={(e) => setData("about", e.target.value)}
                        ></textarea>
                        {errors.about && (
                            <p className="form-error">{errors.about}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Skill:</label>
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Enter a skill"
                                    value={skill.value}
                                    onChange={(e) =>
                                        handleValueChange(index, e)
                                    }
                                />
                                <button
                                    className="ml2-2 rounded-sm border bg-red-500 p-2 hover:bg-red-600"
                                    type="button"
                                    onClick={() => handleRemoveSkill(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        {errors.skills && (
                            <p className="from-error">{errors.skills}</p>
                        )}
                        <button
                            type="button"
                            className="mt-2 rounded-sm border bg-green-400 p-2 hover:bg-green-500"
                            onClick={handleAddSkill}
                        >
                            Add Skill
                        </button>
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

export default CoachUpdateForm;
