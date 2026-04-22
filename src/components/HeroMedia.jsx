// TODO-media: replace /assets/schaaq.png fallback once /video/hero-scanner.mp4
// and /images/hero-scanner.jpg are delivered.
export default function HeroMedia() {
  return (
    <div
      className="relative w-full h-full bg-night overflow-hidden"
      style={{ minHeight: 420 }}
    >
      <video
        className="w-full h-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-scanner.jpg"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = 'none';
          const fallback = el.parentElement?.querySelector('[data-hero-fallback]');
          if (fallback) fallback.removeAttribute('hidden');
        }}
      >
        <source src="/video/hero-scanner.mp4" type="video/mp4" />
      </video>
      <img
        data-hero-fallback
        src="/assets/schaaq.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.15) 45%, rgba(10,10,10,0.65) 100%)',
        }}
      />
    </div>
  );
}
