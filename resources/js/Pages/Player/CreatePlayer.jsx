import { useForm, usePage } from "@inertiajs/react";

export default function CreatePlayer({ teams }) {
    const { authUser } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        user_id: authUser.id,
        team_id: "",
        first_name: "",
        last_name: "",
    });

    function handlePlayerCreation(e) {
        e.preventDefault();
        post("/player");
    }

    return (
        <>
            <h1> This is a player creation </h1>
            <div>
                <form onSubmit={handlePlayerCreation}>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                    />
                    {errors.first_name && (
                        <p className="text-red-500">{errors.first_name}</p>
                    )}
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                    />
                    {errors.last_name && (
                        <p className="text-red-500">{errors.last_name}</p>
                    )}
                    <h3>Select a Team:</h3>
                    {teams.map((team) => (
                        <div key={team.id}>
                            <input
                                type="radio"
                                name="team_id"
                                value={team.id}
                                checked={data.team_id === team.id}
                                onChange={(e) =>
                                    setData("team_id", Number(e.target.value))
                                }
                            />
                            <label htmlFor={`team-${team.id}`}>
                                {team.team_name}
                            </label>
                            <br />
                        </div>
                    ))}
                    {errors.team_id && (
                        <p className="text-red-500">{errors.team_id}</p>
                    )}
                    <button type="submit" disabled={processing}>
                        {processing ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
}
