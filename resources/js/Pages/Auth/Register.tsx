import { Link, useForm } from "@inertiajs/react";

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
            <div className="relative min-h-screen">
                <div className="py relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
                    <div className="w-full max-w-xl rounded-lg border p-10 shadow-lg">
                        <h1 className="form-title">Register</h1>
                        <form onSubmit={handleRegisterSubmit}>
                            {/* First Name */}
                            <div className="form-group">
                                <label htmlFor="first_name">Name:</label>
                                <input
                                    id="first_name"
                                    value={data.first_name}
                                    onChange={(e) =>
                                        setData("first_name", e.target.value)
                                    }
                                    type="text"
                                    placeholder="First Name"
                                    name="first_name"
                                />
                                {errors.first_name && (
                                    <p className="form-error">
                                        {errors.first_name}
                                    </p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div className="form-group">
                                <label htmlFor="last_name">Surname:</label>
                                <input
                                    id="last_name"
                                    value={data.last_name}
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Last Name"
                                    name="last_name"
                                />
                                {errors.last_name && (
                                    <p className="form-error">
                                        {errors.last_name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                />
                                {errors.email && (
                                    <p className="form-error">{errors.email}</p>
                                )}
                            </div>

                            {/* Number */}
                            <div className="form-group">
                                <label htmlFor="number">Number:</label>
                                <input
                                    id="number"
                                    type="text"
                                    name="number"
                                    value={data.number}
                                    onChange={(e) =>
                                        setData("number", e.target.value)
                                    }
                                    placeholder="Phone Number"
                                />
                                {errors.number && (
                                    <p className="form-error">
                                        {errors.number}
                                    </p>
                                )}
                            </div>

                            {/* Date of Birth */}
                            <div className="form-group">
                                <label htmlFor="date_of_birth">
                                    Date of Birth:
                                </label>
                                <input
                                    id="date_of_birth"
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
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    placeholder="Address"
                                />
                                {errors.address && (
                                    <p className="form-error">
                                        {errors.address}
                                    </p>
                                )}
                            </div>

                            {/* Post Code */}
                            <div className="form-group">
                                <label htmlFor="post_code">Post code:</label>
                                <input
                                    id="post_code"
                                    type="text"
                                    name="post_code"
                                    value={data.post_code}
                                    onChange={(e) =>
                                        setData("post_code", e.target.value)
                                    }
                                    placeholder="Post Code"
                                />
                                {errors.post_code && (
                                    <p className="form-error">
                                        {errors.post_code}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    id="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />
                                {errors.password && (
                                    <p className="form-error">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Password Confirmation */}
                            <div className="form-group">
                                <label htmlFor="password_confirmation">
                                    Confirm Password:
                                </label>
                                <input
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password_confirmation"
                                />
                                {errors.password_confirmation && (
                                    <p className="form-error">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="form-button"
                            >
                                {processing ? "Registering..." : "Register"}
                            </button>
                        </form>
                        <p className="mt-4 text-center">
                            <Link
                                href={route("auth.login")}
                                className="text-blue-500 underline"
                            >
                                Already have an account? Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
