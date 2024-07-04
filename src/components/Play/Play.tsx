import "./Play.css";

const Play = () => {
    return (
        <div className="iframe">
            <iframe
                className="iframe"
                src="https://www.youtube.com/embed/TiJAfxzqDso?si=tEYLO_vckwpQtBvB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default Play
