import { useForm } from "@inertiajs/react";
import Background from "../../Components/Background/Background.jsx";

export default function CreateTeam({ coaches }) {
    const { data, setData, post, processing, errors } = useForm({
        team_name: "",
        coach_id: [],
    });

    function handleTeamCreation(e) {
        e.preventDefault();
        post(route("team.store", data));
    }

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center">
                <Background background={null} />

                <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                    <h1 className="form-title">Create A Team</h1>
                    <form onSubmit={handleTeamCreation}>
                        <div className="form-group">
                            <label htmlFor="team_name">Team name:</label>
                            <input
                                type="text"
                                id="team_name"
                                name="team_name"
                                value={data.team_name}
                                onChange={(e) =>
                                    setData("team_name", e.target.value)
                                }
                            />
                            {errors.team_name && (
                                <p className="form-error">{errors.team_name}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="coach_id">Select Coach(es):</label>
                            <div className="relative">
                                <select
                                    id="coach_id"
                                    name="coach_id"
                                    multiple
                                    value={data.coach_id}
                                    onChange={(e) => {
                                        const selectedValues = Array.from(
                                            e.target.selectedOptions,
                                            (option) => option.value,
                                        );
                                        setData("coach_id", selectedValues);
                                    }}
                                    className="focus:ring-opacity-50 mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                                    size={4}
                                >
                                    {coaches.map((coach) => (
                                        <option key={coach.id} value={coach.id}>
                                            {coach.user.first_name}{" "}
                                            {coach.user.last_name}
                                        </option>
                                    ))}
                                </select>
                                <p className="mt-1 text-xs text-gray-500">
                                    Hold Ctrl/Cmd to select multiple coaches
                                </p>
                            </div>
                            {errors.coach_id && (
                                <p className="form-error">{errors.coach_id}</p>
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
        </>
    );
}
