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
                <div className="relative inset-10 w-full max-w-md rounded-lg border p-8 shadow-md">
                    <h1 className="form-title">Login</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
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

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
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
                                <p className="form-error">{errors.password}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="form-button"
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
