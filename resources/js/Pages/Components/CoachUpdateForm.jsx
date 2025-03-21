import { useForm } from "@inertiajs/react";
import { useState } from "react";

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

        post(`/coach/update/${coach.id}`);
    }
    
    return (
        <div>
            <h1>Coach Update Form</h1>
            <form name="formSubmit" onSubmit={handleEditCoach}>
                <label htmlFor="avatar">Avatar</label>
                <input
                    type="file"
                    name="avatar"
                    onChange={(e) => setData("avatar", e.target.files[0])}
                />
                {errors.avatar && (
                    <p className="text-red-500">{errors.avatar}</p>
                )}
                <label htmlFor="about">About</label>
                <textarea
                    id="about"
                    name="about"
                    value={data.about}
                    onChange={(e) => setData("about", e.target.value)}
                ></textarea>
                {errors.about && <p className="text-red-500">{errors.about}</p>}
                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}

                {skills.map((skill, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Enter a skill"
                            value={skill.value}
                            onChange={(e) => handleValueChange(index, e)}
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveSkill(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                {errors.skills && (
                    <p className="text-red-500">{errors.skills}</p>
                )}
                <button type="button" onClick={handleAddSkill}>
                    Add Skill
                </button>

                <button type="submit" disabled={processing}>
                    {processing ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default CoachUpdateForm;
