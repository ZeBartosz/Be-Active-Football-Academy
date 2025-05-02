import Background from "../Components/Background/Background.jsx";

export default function ShowProgramGroup({ programs }) {
    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <Background background={programs.image} />

            <div className="relative inset-10 w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
                <h1 className="form-title">{programs.title}</h1>
                <p>{programs.description}</p>
            </div>
        </div>
    );
}
