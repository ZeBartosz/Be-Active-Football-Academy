import Background from "../Components/Background/Background.jsx";
import { Link, usePage } from "@inertiajs/react";

export default function ShowProgramGroup({ programGroups, programs }) {
    const { authUser } = usePage().props;

    return (
        <div className="text-display relative flex min-h-screen items-center justify-center">
            <Background background={programGroups.image} />

            <div className="relative inset-10 h-fit w-full max-w-[70%] rounded-lg border bg-white p-8 shadow-md">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="form-title">{programGroups.title}</h1>
                    <p>{programGroups.description}</p>
                    {authUser?.is_admin && (
                        <Link
                            href={route("program.create", {
                                programGroup: programGroups.id,
                            })}
                            className="btn-yellow mt-1 p-2 text-lg"
                        >
                            + Add Program
                        </Link>
                    )}
                </div>

                {programs.map((program) => (
                    <div
                        key={program.id}
                        className="s flex flex-col items-start justify-center"
                    >
                        <h1 className="form-title">{program.title}</h1>
                        <p>{program.price}</p>
                        <p>{program.description}</p>
                        {authUser?.is_admin && (
                            <>
                                <Link
                                    href={route("program.edit", {
                                        programGroup: programGroups.id,
                                        program: program.id,
                                    })}
                                    className="btn-yellow mt-1 mr-auto p-2 text-lg"
                                >
                                    Edit
                                </Link>
                                <Link
                                    href={route("program.destroy", {
                                        program: program.id,
                                    })}
                                    method="delete"
                                    className="btn-red mt-1 p-2 text-lg"
                                >
                                    Delete
                                </Link>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
