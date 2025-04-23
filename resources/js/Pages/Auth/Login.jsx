import { Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/storage/assets/logo.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-[rgba(10,76,173,0.95)]"></div>
                </div>

                <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                    <h1 className="mb-6 text-center text-3xl font-bold">
                        Login
                    </h1>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group mb-4">
                            <label
                                className="mb-1 block text-sm font-bold text-gray-700"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                type="text"
                                placeholder="Email"
                                name="email"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500 italic">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="form-group mb-6">
                            <label
                                className="mb-1 block text-sm font-bold text-gray-700"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-300 focus:ring focus:outline-none"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500 italic">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        >
                            {processing ? "Logging in..." : "Login"}
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        <Link
                            href={route("auth.register")}
                            className="text-blue-500 underline"
                        >
                            Don't have an account? Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
