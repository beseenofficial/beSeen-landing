export function Benefits() {
  return (
    <section className="recipients section" id="recipients">
      <div className="recipients__copy">
        <h2>A better inbox for people in demand.</h2>
        <p>Creators, founders and experts see the value and context of every request before deciding whether it deserves a reply.</p>
        <ul><li>Review before responding</li><li>Reply to claim the bounty</li><li>Keep control with Aura</li></ul>
      </div>
      <div className="recipient-inbox recipient-inbox--video">
        <video
          aria-label="BeSeen priority inbox showing incoming bounty requests"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/beseen-inbox-loop.webm" type="video/webm" />
          Your browser cannot play this video. <a href="/videos/beseen-inbox-loop.webm">Download the inbox video.</a>
        </video>
      </div>
    </section>
  );
}
