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
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/storage/assets/logo.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-[rgba(10,76,173,0.95)]"></div>
                </div>

                <div className="py relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
                    <div className="w-full max-w-xl rounded-lg bg-white p-10 shadow-lg">
                        <h1 className="mb-8 text-center text-4xl font-bold">
                            Register
                        </h1>
                        <form
                            onSubmit={handleRegisterSubmit}
                            className="space-y-6"
                        >
                            {/* First Name */}
                            <div className="form-group">
                                <label
                                    htmlFor="first_name"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Name:
                                </label>
                                <input
                                    id="first_name"
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                    value={data.first_name}
                                    onChange={(e) =>
                                        setData("first_name", e.target.value)
                                    }
                                    type="text"
                                    placeholder="First Name"
                                    name="first_name"
                                />
                                {errors.first_name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.first_name}
                                    </p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div className="form-group">
                                <label
                                    htmlFor="last_name"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Surname:
                                </label>
                                <input
                                    id="last_name"
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                    value={data.last_name}
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Last Name"
                                    name="last_name"
                                />
                                {errors.last_name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.last_name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Number */}
                            <div className="form-group">
                                <label
                                    htmlFor="number"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Number:
                                </label>
                                <input
                                    id="number"
                                    type="text"
                                    name="number"
                                    value={data.number}
                                    onChange={(e) =>
                                        setData("number", e.target.value)
                                    }
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                    placeholder="Phone Number"
                                />
                                {errors.number && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.number}
                                    </p>
                                )}
                            </div>

                            {/* Date of Birth */}
                            <div className="form-group">
                                <label
                                    htmlFor="date_of_birth"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Date of Birth:
                                </label>
                                <input
                                    id="date_of_birth"
                                    type="date"
                                    name="date_of_birth"
                                    onChange={(e) =>
                                        setData("date_of_birth", e.target.value)
                                    }
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                />
                                {errors.date_of_birth && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.date_of_birth}
                                    </p>
                                )}
                            </div>

                            {/* Address */}
                            <div className="form-group">
                                <label
                                    htmlFor="address"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Address:
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                    placeholder="Address"
                                />
                                {errors.address && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.address}
                                    </p>
                                )}
                            </div>

                            {/* Post Code */}
                            <div className="form-group">
                                <label
                                    htmlFor="post_code"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Post code:
                                </label>
                                <input
                                    id="post_code"
                                    type="text"
                                    name="post_code"
                                    value={data.post_code}
                                    onChange={(e) =>
                                        setData("post_code", e.target.value)
                                    }
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                    placeholder="Post Code"
                                />
                                {errors.post_code && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.post_code}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Password Confirmation */}
                            <div className="form-group">
                                <label
                                    htmlFor="password_confirmation"
                                    className="mb-2 block text-lg font-semibold text-gray-700"
                                >
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
                                    className="form-input w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="form-button focus:shadow-outline w-full rounded bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700 focus:outline-none"
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
