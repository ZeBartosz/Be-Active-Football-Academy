import { useForm } from "@inertiajs/react";
import Background from "../../Components/Background/Background.jsx";

export default function EditTeam({ team }) {
    const { data, setData, put, processing, errors } = useForm({
        team_name: team.team_name || "",
    });

    function handleTeamUpdate(e) {
        e.preventDefault();
        put(route("team.update", { team: team.id }, data));
    }

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center">
                <Background background={null} />

                <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                    <h1 className="form-title">Create A Team</h1>
                    <form onSubmit={handleTeamUpdate}>
                        <div className="form-group">
                            <label htmlFor="team_name">Team name:</label>
                            <input
                                type="text"
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
