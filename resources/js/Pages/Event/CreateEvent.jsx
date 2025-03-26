import { useForm } from "@inertiajs/react";

export default function CreateEvent({ teams }) {
    const { data, setData, post, processing, errors } = useForm({
        team_id: "",
        title: "",
        description: "",
        type: "",
        date: "",
        time: "",
        address: "",
        post_code: "",
    });

    function handleEventCreation(e) {
        e.preventDefault();
        post("/admin/event");
    }

    return (
        <>
            <h1>This is create Event</h1>
            <div>
                <form onSubmit={handleEventCreation}>
                    {/* Title  */}
                    <label htmlFor="title">Title:</label>
                    <input
                        type="title"
                        name="first_name"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    {errors.title && (
                        <p className="text-red-500">{errors.title}</p>
                    )}

                    {/* Description */}
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {errors.description && (
                        <p className="text-red-500">{errors.description}</p>
                    )}

                    {/* Description */}
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                    />
                    {errors.type && (
                        <p className="text-red-500">{errors.type}</p>
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

                    {/* Date */}
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        name="date"
                        onChange={(e) => setData("date", e.target.value)}
                    />
                    {errors.type && (
                        <p className="text-red-500">{errors.type}</p>
                    )}

                    {/* Time */}
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        name="time"
                        onChange={(e) => setData("time", e.target.value)}
                    />
                    {errors.type && (
                        <p className="text-red-500">{errors.type}</p>
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
