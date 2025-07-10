const MyHeroBottom = () => {
    return (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1  gap-4 lg:grid-cols-3">
            {/* Left: Image + Text */}
            <div className="flex flex-col lg:col-span-2">
                <img src="/assets/demo-images/note-tech/note4.png" alt="News" className="mb-4 w-full object-cover" />
                <p className="text-lg px-5 lg:px-0 leading-relaxed font-light text-black">
                    Now that your eyes are open, make the sun jealous with your burning passion to start the day. Embrace each moment with purpose,
                    energy, and the kind of focus that turns dreams into milestones. Success doesn't wait — and neither should you. Wake up, show up,
                    and make today count. <br />
                    <br />
                    Whether you're chasing goals, creating opportunities, or simply trying to be better than you were yesterday, remember that your
                    journey starts with action. <br />
                    Every step forward, no matter how small, brings you closer to the future you're building. Fuel your ambition. Believe in your
                    pace. Keep showing up. The results will follow.
                </p>
            </div>

            {/* Right: Advertisement (match height) */}
            <div className="h-full">
                <img src="/assets/demo-images/note-tech/note-logo.png" alt="Ad" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default MyHeroBottom;
