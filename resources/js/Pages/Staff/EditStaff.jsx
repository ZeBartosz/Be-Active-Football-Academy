import { useForm } from "@inertiajs/react";
import Background from "../Components/Background/Background.jsx";
import { useState } from "react";

export default function EditStaff({ staff }) {
    const { data, setData, post, processing, errors } = useForm({
        role: staff.role || "",
        about: staff.about || "",
        avatar: null,
        skills: staff.skills || [""],
    });

    const [skills, setSkills] = useState(
        Array.isArray(staff.skills)
            ? staff.skills.map((skill) => ({ value: skill }))
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

    function handleEditStaff(e) {
        e.preventDefault();
        post(route("staff.update", { staff: staff.id }, data));
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <Background background={null} />

            <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                <h1 className="form-title">Create Staff</h1>
                <form onSubmit={handleEditStaff} encType="multipart/form-data">
                    {/* role */}
                    <div className="form-group">
                        <label htmlFor="role">Position:</label>
                        <input
                            id="role"
                            type="text"
                            name="role"
                            value={data.role}
                            onChange={(e) => setData("role", e.target.value)}
                        />
                        {errors.role && (
                            <p className="form-error">{errors.role}</p>
                        )}
                    </div>

                    {/* About */}
                    <div className="form-group">
                        <label htmlFor="about">About:</label>
                        <textarea
                            id="about"
                            name="about"
                            value={data.about}
                            onChange={(e) => setData("about", e.target.value)}
                        />
                        {errors.about && (
                            <p className="form-error">{errors.about}</p>
                        )}
                    </div>

                    {/* Avatar */}
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

                    {/* Skills */}
                    <div className="form-group">
                        <label>Skills:</label>
                        {data.skills.map((skill, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Enter a skill"
                                    value={skill}
                                    onChange={(e) =>
                                        handleValueChange(index, e)
                                    }
                                />
                                <button
                                    type="button"
                                    className="ml-2 rounded-sm border bg-red-500 p-2 text-white hover:bg-red-600"
                                    onClick={() => handleRemoveSkill(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        {errors.skills && (
                            <p className="form-error">{errors.skills}</p>
                        )}
                        <button
                            type="button"
                            className="mt-2 rounded-sm border bg-green-400 p-2 text-white hover:bg-green-500"
                            onClick={handleAddSkill}
                        >
                            Add Skill
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="form-button"
                        disabled={processing}
                    >
                        {processing ? "Submitting…" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}
