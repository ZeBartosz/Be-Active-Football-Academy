import { useForm, usePage } from "@inertiajs/react";

export default function CreatePlayer({ teams }) {
    const { authUser } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        user_id: authUser.id,
        team_id: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        address: "",
        post_code: "",
    });

    function handlePlayerCreation(e) {
        e.preventDefault();
        post(route("player.store", data));
    }

    return (
        <>
            <h1> This is a player creation </h1>
            <div>
                <form onSubmit={handlePlayerCreation}>
                    {/* First Name */}
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

                    {/* Last Name */}
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

                    {/* Team Selection */}
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

                    {/* Date of Birth */}
                    <label htmlFor="date_of_birth">Date of Birth:</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        onChange={(e) =>
                            setData("date_of_birth", e.target.value)
                        }
                    />
                    {errors.date_of_birth && (
                        <p className="text-red-500">{errors.date_of_birth}</p>
                    )}

                    {/* Address */}
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                    />
                    {errors.address && (
                        <p className="text-red-500">{errors.address}</p>
                    )}

                    {/* Post Code */}
                    <label htmlFor="post_code">post_code:</label>
                    <input
                        type="text"
                        name="post_code"
                        value={data.post_code}
                        onChange={(e) => setData("post_code", e.target.value)}
                    />
                    {errors.post_code && (
                        <p className="text-red-500">{errors.post_code}</p>
                    )}

                    {/* Button */}
                    <button type="submit" disabled={processing}>
                        {processing ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
}
