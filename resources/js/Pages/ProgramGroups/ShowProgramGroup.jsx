import Background from "../Components/Background/Background.jsx";
import { Link, usePage } from "@inertiajs/react";
import ConfirmButton from "../Components/Confirmation/ConfirmButton.jsx";

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
                        <>
                            <Link
                                href={route("program.create", {
                                    programGroup: programGroups.id,
                                })}
                                className="btn-yellow mt-1 p-2 text-lg"
                            >
                                + Add Program
                            </Link>

                            <div className="absolute top-2 right-2 flex flex-col space-y-1">
                                <Link
                                    href={route("program_group.edit", {
                                        programGroup: programGroups.id,
                                    })}
                                    className="btn-sm btn-yellow"
                                >
                                    Update
                                </Link>
                                <ConfirmButton
                                    id={programGroups.id}
                                    routeName="program_group.destroy"
                                    routeParamKey="programGroup"
                                    className="btn-sm btn-red"
                                    method="delete"
                                    children="Delete"
                                    message="Are you sure you want delete this Program Group?"
                                />
                            </div>
                        </>
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

                                <ConfirmButton
                                    id={program.id}
                                    routeName="program.destroy"
                                    routeParamKey="program"
                                    className="btn-sm btn-red"
                                    method="delete"
                                    children="Delete"
                                    message="Are you sure you want delete this Program ?"
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
