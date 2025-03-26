import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        address: "",
        post_code: "",
        date_of_birth: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <>
            <div className="mx-auto flex flex-col items-center justify-center">
                <h1>Register</h1>
                <form onSubmit={handleRegisterSubmit}>
                    {/* Name */}
                    <label htmlFor="first_name">Name:</label>
                    <input
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                    />
                    {errors.first_name && (
                        <p className="text-red-500">{errors.first_name}</p>
                    )}

                    {/* Surname */}
                    <label htmlFor="last_name">Surname:</label>
                    <input
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                    />
                    {errors.last_name && (
                        <p className="text-red-500">{errors.last_name}</p>
                    )}

                    {/* Email */}
                    <label htmlFor="email">Email:</label>
                    <input
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}

                    {/* Number */}
                    <label htmlFor="number">Number:</label>
                    <input
                        type="text"
                        name="number"
                        value={data.number}
                        onChange={(e) => setData("number", e.target.value)}
                    />
                    {errors.number && (
                        <p className="text-red-500">{errors.number}</p>
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
                    <label htmlFor="post_code">Post code:</label>
                    <input
                        type="text"
                        name="post_code"
                        value={data.post_code}
                        onChange={(e) => setData("post_code", e.target.value)}
                    />
                    {errors.post_code && (
                        <p className="text-red-500">{errors.post_code}</p>
                    )}

                    {/* Password */}
                    <label htmlFor="password">Password:</label>
                    <input
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    {errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                    )}

                    {/* Password Confirmation */}
                    <label htmlFor="password_confirmation">
                        Confirm Password:
                    </label>
                    <input
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500">
                            {errors.password_confirmation}
                        </p>
                    )}
                    <button type="submit" disabled={processing}>
                        {processing ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </>
    );
}
