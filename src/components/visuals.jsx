export const ProductShot = ({ src, alt, tone = 'light', objectPosition }) => {
  const plinthBg =
    {
      dark: 'linear-gradient(180deg,#E9E9E9 0%, #D0D0D0 100%)',
      teal: 'linear-gradient(180deg,#EEEEEE 0%, #D6D6D6 100%)',
      light: 'linear-gradient(180deg,#F1F1F1 0%, #DDDDDD 100%)',
    }[tone] || 'linear-gradient(180deg,#F1F1F1 0%, #DDDDDD 100%)';
  return (
    <div className="w-full h-full" style={{ background: plinthBg, overflow: 'hidden' }}>
      <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
        <div
          className="relative w-full max-w-[880px] h-full bg-white overflow-hidden"
          style={{ boxShadow: '0 2px 0 rgba(0,0,0,.04), 0 24px 48px rgba(0,0,0,.12)' }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: objectPosition || 'top' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export const PhoneShot = ({ src, alt, objectPosition = 'top' }) => (
  <div className="w-full h-full bg-panel flex items-center justify-center p-8">
    <div
      className="relative"
      style={{
        width: 260,
        height: 540,
        borderRadius: 34,
        background: '#111',
        padding: 8,
        boxShadow: '0 20px 40px rgba(0,0,0,.15)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 28,
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition }}
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export const HeroTripleShot = () => (
  <div
    className="w-full h-full relative"
    style={{ background: 'linear-gradient(180deg,#EEEEEE 0%, #D6D6D6 100%)' }}
  >
    <div className="absolute inset-0 grid grid-cols-12 gap-4 md:gap-6 p-6 md:p-10 items-end">
      <div className="col-span-12 md:col-span-5">
        <div
          className="aspect-[4/3] bg-white overflow-hidden"
          style={{ boxShadow: '0 16px 40px rgba(0,0,0,.12)' }}
        >
          <img
            src="/assets/schaaq.png"
            alt="Schaaq"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <div
          className="aspect-[4/3] bg-white overflow-hidden"
          style={{ boxShadow: '0 16px 40px rgba(0,0,0,.12)' }}
        >
          <img
            src="/assets/lnyrd-dashboard.png"
            alt="LNYRD"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-3">
        <div
          className="aspect-[3/4] bg-white overflow-hidden"
          style={{ boxShadow: '0 16px 40px rgba(0,0,0,.12)' }}
        >
          <img
            src="/assets/triage-home.png"
            alt="Warranty Triage"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
);

export const CraftMosaic = () => (
  <div className="w-full h-full grid grid-cols-3 gap-1" style={{ background: '#E8E8E8' }}>
    <div className="overflow-hidden">
      <img
        src="/assets/schaaq.png"
        alt=""
        className="w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>
    <div className="overflow-hidden">
      <img
        src="/assets/lnyrd-candidates.png"
        alt=""
        className="w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>
    <div className="overflow-hidden">
      <img
        src="/assets/triage-rive.png"
        alt=""
        className="w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>
  </div>
);
