import { useForm } from "@inertiajs/react";
import Background from "../Components/Background/Background.jsx";

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
        post(route("event.store", data));
    }

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center">
                <Background background={null} />

                <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                    <h1 className="form-title">This is create Event</h1>
                    <div>
                        <form onSubmit={handleEventCreation}>
                            {/* Title  */}
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="title"
                                    name="first_name"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                {errors.title && (
                                    <p className="form-error">{errors.title}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="form-group">
                                <label htmlFor="description">
                                    Description:
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <p className="form-error">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="form-group">
                                <label htmlFor="type">Type:</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                />
                                {errors.type && (
                                    <p className="form-error">{errors.type}</p>
                                )}
                            </div>

                            {/* Team Selection */}
                            <div className="form-group">
                                <h3>Select a Team:</h3>
                                {teams.map((team) => (
                                    <div key={team.id}>
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
                                        <label htmlFor={`team-${team.id}`}>
                                            {team.team_name}
                                        </label>
                                        <br />
                                    </div>
                                ))}
                                {errors.team_id && (
                                    <p className="form-error">
                                        {errors.team_id}
                                    </p>
                                )}
                            </div>

                            {/* Date */}
                            <div className="form-group">
                                <label htmlFor="date">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    onChange={(e) =>
                                        setData("date", e.target.value)
                                    }
                                />
                                {errors.type && (
                                    <p className="form-error">{errors.type}</p>
                                )}
                            </div>

                            {/* Time */}
                            <div className="form-group">
                                <label htmlFor="time">Time:</label>
                                <input
                                    type="time"
                                    name="time"
                                    onChange={(e) =>
                                        setData("time", e.target.value)
                                    }
                                />
                                {errors.type && (
                                    <p className="form-error">{errors.type}</p>
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
                                    <p className="form-error">
                                        {errors.address}
                                    </p>
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
                                    <p className="form-error">
                                        {errors.post_code}
                                    </p>
                                )}
                            </div>

                            {/* Button */}
                            <button type="submit" disabled={processing}>
                                {processing ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
