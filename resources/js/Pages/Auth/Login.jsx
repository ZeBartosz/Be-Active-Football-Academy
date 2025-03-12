import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, error } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <>
            <div>
                <form onSubmit={handleRegisterSubmit}></form>
            </div>
        </>
    );
}
