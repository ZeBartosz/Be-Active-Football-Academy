export default function Background({ background }) {
    let bgURL = background;

    if (!bgURL) {
        bgURL = "/storage/coaches/default_pfp.png";
    }

    return (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${bgURL}')`,
                }}
            >
                <div className="absolute inset-0 bg-[rgba(10,76,173,0.95)]"></div>
            </div>
        </>
    );
}
