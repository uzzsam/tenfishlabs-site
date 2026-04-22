export const Eyebrow = ({ children, className = '', muted = false }) => (
  <div className={`${muted ? 'eyebrow-muted' : 'eyebrow'} ${className}`}>{children}</div>
);

export const Rule = ({ className = '' }) => <div className={`hairline ${className}`}></div>;

export const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 ${className}`}>
    {children}
  </div>
);

export const GhostBtn = ({ children, onClick, href, onDark = false, className = '' }) => {
  const cls = `btn-ghost ${onDark ? 'on-dark' : ''} ${className}`;
  if (href)
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export const SolidBtn = ({ children, onClick, href, className = '' }) => {
  const cls = `btn-solid ${className}`;
  if (href)
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export const NavLink = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`spec text-[11px] transition-colors ${
      active ? 'text-ink' : 'text-muted hover:text-ink'
    }`}
  >
    {children}
  </button>
);

export const TFLMark = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    {[0, 1, 2, 3, 4].map((c) =>
      [0, 1].map((r) => (
        <circle key={`${c}-${r}`} cx={3 + c * 3.5} cy={5 + r * 9} r="1.3" fill="#111" />
      ))
    )}
  </svg>
);

export const TFLMarkInverted = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    {[0, 1, 2, 3, 4].map((c) =>
      [0, 1].map((r) => (
        <circle key={`${c}-${r}`} cx={3 + c * 3.5} cy={5 + r * 9} r="1.3" fill="#fff" />
      ))
    )}
  </svg>
);

export const CenteredIntro = ({ eyebrow, title, intro }) => (
  <div className="text-center max-w-4xl mx-auto">
    {eyebrow && <Eyebrow className="mb-8">{eyebrow}</Eyebrow>}
    <h2 className="display text-[40px] md:text-[64px] lg:text-[76px] text-ink">{title}</h2>
    {intro && (
      <p className="mt-8 body-lead max-w-2xl mx-auto text-[15px] md:text-[16px]">{intro}</p>
    )}
  </div>
);

export const FullBleedBand = ({
  tone = 'light',
  title,
  caption,
  imageSide = 'left',
  children,
  height = 'tall',
}) => {
  const toneBg = {
    light: 'bg-panel text-ink',
    dark: 'bg-night text-white',
    tan: 'text-white',
  }[tone];
  const toneStyle =
    tone === 'tan'
      ? { background: 'linear-gradient(135deg, #B59865 0%, #C9B283 50%, #8A7346 100%)' }
      : {};
  const hMap = {
    tall: 'min-h-[640px] md:min-h-[720px]',
    medium: 'min-h-[520px] md:min-h-[580px]',
  };
  return (
    <section className={`relative ${toneBg} ${hMap[height]} overflow-hidden`} style={toneStyle}>
      <div
        className={`absolute inset-0 ${
          imageSide === 'right' ? 'flex justify-start' : 'flex justify-end'
        }`}
      >
        <div
          className={`w-full md:w-[65%] h-full ${
            imageSide === 'right' ? 'md:mr-auto' : 'md:ml-auto'
          }`}
        >
          {children}
        </div>
      </div>
      <div className={`relative z-10 h-full w-full ${hMap[height]} flex items-center`}>
        <Container>
          <div className={`grid grid-cols-12 gap-6 items-center ${hMap[height]}`}>
            <div
              className={`col-span-12 md:col-span-5 ${
                imageSide === 'right' ? 'md:col-start-8' : 'md:col-start-1'
              } flex flex-col justify-center py-16 md:py-24`}
            >
              <h2 className="bleed-title mb-5">{title}</h2>
              {caption && (
                <p className="bleed-caption opacity-90 text-[14px] md:text-[16px]">{caption}</p>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
