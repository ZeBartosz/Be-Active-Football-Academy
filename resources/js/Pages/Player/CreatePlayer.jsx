import { useForm, usePage } from "@inertiajs/react";
import Background from "../Components/Background/Background.jsx";

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
            <div className="relative flex min-h-screen items-center justify-center">
                <Background background={null} />

                <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                    <h1 className="form-title">Create Player</h1>
                    <form onSubmit={handlePlayerCreation}>
                        {/* First Name */}
                        <div className="form-group">
                            <label htmlFor="first_name">First Name:</label>
                            <input
                                type="text"
                                name="first_name"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                            />
                            {errors.first_name && (
                                <p className="form-error">
                                    {errors.first_name}
                                </p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name:</label>
                            <input
                                type="text"
                                name="last_name"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                            />
                            {errors.last_name && (
                                <p className="from-error">{errors.last_name}</p>
                            )}
                        </div>

                        {/* Team Selection */}
                        <div className="form-group">
                            <label htmlFor="team_id">Select Team:</label>
                            {teams.map((team) => (
                                <div key={team.id} className="flex">
                                    <input
                                        type="radio"
                                        name="team_id"
                                        value={team.id}
                                        checked={data.team_id === team.id}
                                        onChange={(e) =>
                                            setData(
                                                "team_id",
                                                Number(e.target.value),
                                            )
                                        }
                                    />
                                    <label
                                        className="pl-3"
                                        htmlFor={`team-${team.id}`}
                                    >
                                        {team.team_name}
                                    </label>
                                    <br />
                                </div>
                            ))}
                            {errors.team_id && (
                                <p className="form-error">{errors.team_id}</p>
                            )}
                        </div>

                        {/* Date of Birth */}
                        <div className="form-group">
                            <label htmlFor="date_of_birth">
                                Date of Birth:
                            </label>
                            <input
                                type="date"
                                name="date_of_birth"
                                onChange={(e) =>
                                    setData("date_of_birth", e.target.value)
                                }
                            />
                            {errors.date_of_birth && (
                                <p className="form-error">
                                    {errors.date_of_birth}
                                </p>
                            )}
                        </div>

                        {/* Address */}
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            {errors.address && (
                                <p className="form-error">{errors.address}</p>
                            )}
                        </div>

                        {/* Post Code */}
                        <div className="form-group">
                            <label htmlFor="post_code">Post Code:</label>
                            <input
                                type="text"
                                name="post_code"
                                value={data.post_code}
                                onChange={(e) =>
                                    setData("post_code", e.target.value)
                                }
                            />
                            {errors.post_code && (
                                <p className="form-error">{errors.post_code}</p>
                            )}
                        </div>

                        {/* Button */}
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
