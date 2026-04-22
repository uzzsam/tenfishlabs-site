export default function DataBoundaryDiagram({ className = '' }) {
  return (
    <figure className={`w-full ${className}`}>
      <svg
        viewBox="0 0 800 440"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="dbd-title dbd-desc"
        style={{ maxWidth: '100%', display: 'block' }}
      >
        <title id="dbd-title">Data boundary diagram</title>
        <desc id="dbd-desc">
          Client-controlled boundary containing internal data, a purpose-built engine, and
          outputs — with no third-party LLM exposure.
        </desc>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#111" />
          </marker>
          <marker id="arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#6B6B6B" />
          </marker>
        </defs>

        {/* Outer boundary */}
        <rect
          x="20"
          y="40"
          width="560"
          height="360"
          fill="none"
          stroke="#111"
          strokeWidth="1.25"
          strokeDasharray="6 4"
        />
        <text
          x="32"
          y="30"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#111"
        >
          CLIENT-CONTROLLED DATA BOUNDARY
        </text>

        {/* Internal data box */}
        <rect x="52" y="96" width="180" height="120" fill="#FFFFFF" stroke="#111" strokeWidth="1.25" />
        <text x="62" y="118" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#6B6B6B">
          INPUT
        </text>
        <text x="62" y="146" fontFamily="Inter Tight, sans-serif" fontSize="16" fontWeight="600" fill="#111">
          Internal data
        </text>
        <text x="62" y="170" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#6B6B6B">
          Schemas, claims,
        </text>
        <text x="62" y="186" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#6B6B6B">
          candidates, records.
        </text>

        {/* Engine box */}
        <rect x="272" y="96" width="200" height="120" fill="#111" stroke="#111" strokeWidth="1.25" />
        <text x="282" y="118" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#9A9A9A">
          ENGINE
        </text>
        <text x="282" y="146" fontFamily="Inter Tight, sans-serif" fontSize="16" fontWeight="600" fill="#FFFFFF">
          Purpose-built
        </text>
        <text x="282" y="166" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#CFCFCF">
          Extract · classify · score
        </text>
        <text x="282" y="182" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#CFCFCF">
          · route · report.
        </text>

        {/* Outputs box */}
        <rect x="272" y="256" width="200" height="120" fill="#FFFFFF" stroke="#111" strokeWidth="1.25" />
        <text x="282" y="278" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#6B6B6B">
          OUTPUTS
        </text>
        <text x="282" y="304" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#111">
          Evidence
        </text>
        <text x="282" y="324" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#111">
          Rules
        </text>
        <text x="282" y="344" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#111">
          Record
        </text>

        {/* Arrow: input → engine */}
        <line
          x1="232"
          y1="156"
          x2="272"
          y2="156"
          stroke="#111"
          strokeWidth="1.25"
          markerEnd="url(#arrow)"
        />

        {/* Arrow: engine → outputs */}
        <line
          x1="372"
          y1="216"
          x2="372"
          y2="256"
          stroke="#111"
          strokeWidth="1.25"
          markerEnd="url(#arrow)"
        />

        {/* Third-party LLM — outside boundary */}
        <rect
          x="620"
          y="156"
          width="160"
          height="80"
          fill="#FFFFFF"
          stroke="#6B6B6B"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <text x="630" y="180" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#6B6B6B">
          THIRD-PARTY
        </text>
        <text x="630" y="202" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="500" fill="#6B6B6B">
          LLM service
        </text>
        <text x="630" y="222" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#9A9A9A">
          outside boundary
        </text>

        {/* Blocked arrow — engine to third-party */}
        <line
          x1="472"
          y1="156"
          x2="620"
          y2="196"
          stroke="#6B6B6B"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* Strikethrough slash */}
        <line
          x1="532"
          y1="160"
          x2="564"
          y2="192"
          stroke="#111"
          strokeWidth="2"
        />
        <line
          x1="564"
          y1="160"
          x2="532"
          y2="192"
          stroke="#111"
          strokeWidth="2"
        />
        <text
          x="548"
          y="146"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#111"
        >
          NO EXPOSURE
        </text>
      </svg>
      <figcaption className="spec text-muted mt-4">
        FIG · 01 &nbsp;·&nbsp; CLIENT-CONTROLLED BOUNDARY
      </figcaption>
    </figure>
  );
}
