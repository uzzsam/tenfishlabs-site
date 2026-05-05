// TODO-media: drop real video/poster files at the given paths. While they're
// missing, the onError fallback swaps to the `fallbackImg` screenshot.
export default function HeroMedia({
  video = '/video/tenfish-systems-loop.mp4',
  poster = '/images/tenfish-systems-poster.jpg',
  fallbackImg = '/assets/schaaq.png',
  tone = 'dark',
  className = '',
}) {
  const bg = tone === 'dark' ? 'bg-night' : 'bg-panel';
  return (
    <div
      className={`relative w-full h-full ${bg} overflow-hidden ${className}`}
      style={{ minHeight: 420 }}
    >
      <video
        className="w-full h-full object-cover object-left-top opacity-100"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = 'none';
          const fb = el.parentElement?.querySelector('[data-hero-fallback]');
          if (fb) fb.removeAttribute('hidden');
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <img
        data-hero-fallback
        src={fallbackImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90"
        hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            tone === 'dark'
              ? 'linear-gradient(135deg, rgba(10,10,10,0.12) 0%, rgba(10,10,10,0.04) 45%, rgba(10,10,10,0.18) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.04) 100%)',
        }}
      />
    </div>
  );
}
