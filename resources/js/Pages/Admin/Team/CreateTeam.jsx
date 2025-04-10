import { useForm } from "@inertiajs/react";

export default function CreateTeam() {
    const { data, setData, post, processing, errors } = useForm({
        team_name: "",
    });

    function handleTeamCreation(e) {
        e.preventDefault();
        post(route("team.store", data));
    }

    return (
        <>
            <h1>This is team creation</h1>

            <div>
                <form onSubmit={handleTeamCreation}>
                    <label htmlFor="team_name">Team name:</label>
                    <input
                        type="text"
                        name="team_name"
                        value={data.team_name}
                        onChange={(e) => setData("team_name", e.target.value)}
                    />
                    {errors.team_name && (
                        <p className="text-red-500">{errors.team_name}</p>
                    )}
                    <button type="submit" disabled={processing}>
                        {processing ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
}
