export default function ({ events }) {
    return (
        <div>
            <h1 className="text-primary text-center text-4xl font-bold">
                Next Events
            </h1>
            <div className="font-display flex flex-col items-center justify-center">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-primary mb-4 w-full rounded-lg border border-gray-300 p-4 shadow-md"
                    >
                        <h2 className="text-3xl font-bold text-white">
                            {event.title}
                        </h2>
                        <p className="text-secondary text-2xl">
                            {event.team.team_name}
                        </p>
                        <p className="text-secondary text-2xl">{event.type}</p>
                        <p className="text-secondary text-2xl">{event.date}</p>
                        <p className="text-secondary text-2xl">{event.time}</p>
                        <p className="text-secondary text-2xl">
                            {event.post_code}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
