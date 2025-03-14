import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        post("/register");
    }

    return <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <h1>Register</h1>
            <form onSubmit={handleRegisterSubmit}>
                <label>First Name</label>
                <input
                    value={data.first_name}
                    onChange={(e) => setData("first_name", e.target.value)}
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                />
                {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}
                <label>Last Name</label>
                <input
                    value={data.last_name}
                    onChange={(e) => setData("last_name", e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                />
                {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}
                <label>Email</label>
                <input
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <label>Password</label>
                <input
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
                <label>Confirm Password</label>
                <input
                    value={data.password_confirmation}
                    onChange={(e) => setData("password_confirmation", e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    name="password_confirmation"
                />
                {errors.password_confirmation && <p className="text-red-500">{errors.password_confirmation}</p>}
                <button
                    type="submit"
                    disabled={processing}
                >
                    {processing ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    </>;
}
