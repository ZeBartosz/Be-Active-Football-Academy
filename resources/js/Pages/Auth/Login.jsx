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
            <div className="mx-auto flex flex-col items-center justify-center">
                <h1>Login</h1>
                <form onSubmit={handleLoginSubmit}>
                    <label>Email</label>
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
                    <label>Password</label>
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
                    <button type="submit" disabled={processing}>
                        {processing ? "Registering..." : "Register"}
                    </button>
                </form>
                <p>
                    <Link href={route(`auth.register`)} className="pr-1">
                        Don't have an account? Register
                    </Link>
                </p>
            </div>
        </>
    );
}
