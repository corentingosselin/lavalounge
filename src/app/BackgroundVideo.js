// components/BackgroundVideo.js
"use client";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function BackgroundVideo() {
    return (
        <div className="video-container">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={`${prefix}` + "/background-video.mp4"} type="video/mp4" />
            </video>
            <style jsx>{`
                .video-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                video {
                    min-width: 100%;
                    min-height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
}

export default BackgroundVideo;
