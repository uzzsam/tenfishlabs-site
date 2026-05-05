const FIT_BLOCK = {
  bestFit: [
    'Repeated review workflow',
    'Sensitive operational data',
    'Visible rules',
    'Evidence requirements',
    'Team needs auditability or board/compliance confidence',
  ],
  poorFit: [
    'One-off automation',
    'Public-data chatbot',
    'Generic dashboard',
    'Workflow where no one owns the decision',
    'Use case where sensitive records must be pasted into public AI tools',
  ],
};

const SCHAAQ_MA_FIT = {
  bestFit: [
    'Tech M&A diligence',
    'Metadata-only assessment',
    'Buyers wanting risk quantified',
    'Advisors needing VDR-ready outputs',
    'Workflows needing confidence scoring',
  ],
  poorFit: [
    'Full source-data ingestion',
    'Generic cyber DD replacement claims',
    'Non-structured diligence with no metadata',
    'Use cases needing value-level data ingestion',
  ],
};

const NINE_FOUR_NINE_FIT = {
  bestFit: [
    'Repeated paperwork and admin workflows',
    'Real-estate back-office operations',
    'Document-heavy intake and review',
    'REX preparation and update support',
    'Human-reviewed compliance workflows',
  ],
  poorFit: [
    'Full autonomous compliance approval',
    'Judgement-free decisioning',
    'Workflows with no human review requirement',
    'Marketing-site fluff',
    'Claims that the system fully replaces expert review',
  ],
};

export const PRODUCTS = [
  {
    slug: 'schaaq',
    title: 'Schaaq',
    category: 'Data defect review engine',
    headline: 'Find the data defects costing the business money.',
    summary:
      'Schaaq reviews operational and financial data for defects, classifies the issues, ranks commercial impact, and produces evidence-backed remediation records.',
    whatItDoes: [
      'Scans operational and financial data for defects that need review',
      'Classifies issues by type, severity, affected process, and likely owner',
      'Checks commercial impact using client-specific cost, revenue, leakage, or risk rules',
      'Assigns ownership so each finding has a practical remediation path',
      'Records each defect in an evidence-backed remediation register',
    ],
    whoItIsFor: [
      'CFOs',
      'CIOs',
      'Data governance teams',
      'Audit and risk teams',
      'ERP-heavy businesses',
      'Teams dealing with messy operational or financial data',
    ],
    customisation: [
      'Data connectors',
      'Defect rules',
      'Commercial-impact models',
      'Ownership mapping',
      'Severity thresholds',
      'Business terminology',
      'Dashboards',
      'Diagnostic reports',
      'Evidence records',
      'Role permissions',
    ],
    workflow: [
      ['01', 'Connect', 'Operational and financial sources enter through a read-only pattern, keeping the source systems intact.'],
      ['02', 'Scan', 'Rules and review passes surface structural, referential, reconciliation, and logic defects.'],
      ['03', 'Classify', 'Findings are grouped by defect type, severity, commercial impact, and likely owner.'],
      ['04', 'Quantify', 'Cost models rank the defects by the value at stake for the business.'],
      ['05', 'Record', 'A defect register, remediation tracker, and audit-ready diagnostic are produced with evidence attached.'],
    ],
    reviewLoop: [
      'Data enters read-only',
      'Defects are classified',
      'Commercial impact is ranked',
      'Evidence-backed remediation record is produced',
    ],
    outputs: [
      'Cost-ranked defect register',
      'Evidence record with severity, owner, and source evidence',
      'Remediation tracker tied to the original finding',
      'Commercial-impact report for finance and operating teams',
      'Audit-ready diagnostic report',
    ],
    dataBoundaryNote:
      'Schaaq runs inside the client perimeter. Operational and financial data remains inside the client-controlled boundary and is not pasted into public AI tools or sent to third-party LLM services.',
    commercialSummary: {
      category: 'Data defect review engine.',
      builtFor:
        'CFOs, CIOs, data governance teams, audit/risk teams, and ERP-heavy businesses.',
      worksWith:
        'operational, financial, ERP, transactional, reconciliation, reference, and service data.',
      improves:
        'defect visibility, commercial-impact ranking, ownership, remediation tracking, and audit confidence.',
      customisable:
        'connectors, defect rules, impact models, owner mapping, thresholds, reports, dashboards, permissions, terminology.',
    },
    fit: FIT_BLOCK,
    ctaHeadline:
      'Bring us a real data-quality cost problem and we’ll map the review loop.',
    media: '/video/schaaq-loop.mp4',
    poster: '/images/schaaq-poster.jpg',
    fallbackImg: '/assets/schaaq.png',
    detailImg: '/assets/schaaq-ma.png',
    ctaSource: 'schaaq',
  },
  {
    slug: 'lnyrd',
    title: 'LNYRD',
    category: 'Structured review and decision engine',
    headline: 'Turn subjective review work into structured decisions.',
    summary:
      'LNYRD turns candidate, submission, and option reviews into structured decisions with criteria, scores, reviewer evidence, approvals, and an exportable decision trail.',
    whatItDoes: [
      'Intakes candidates, submissions, options, criteria, notes, scores, and supporting evidence',
      'Classifies each item against the review criteria and workflow stage',
      'Scores reviews against the same structure so comparisons are consistent',
      'Routes approvals through the panel, manager, or governance path the team actually uses',
      'Records the shortlist, review log, approval trail, and decision record',
    ],
    whoItIsFor: [
      'HR teams',
      'Recruitment teams',
      'Assessment panels',
      'Professional services firms',
      'Internal review teams',
      'Teams comparing candidates, submissions, or options against structured criteria',
    ],
    customisation: [
      'Review criteria',
      'Scoring models',
      'Workflow stages',
      'Reviewer roles',
      'Approval paths',
      'Candidate or submission fields',
      'Evidence requirements',
      'Decision exports',
      'Reporting',
      'Integrations',
    ],
    workflow: [
      ['01', 'Intake', 'Candidates or submissions enter a structured queue with the relevant material attached.'],
      ['02', 'Structure', 'Criteria, scoring fields, evidence requirements, and review stages are applied consistently.'],
      ['03', 'Review', 'Reviewers score and comment against the same structure instead of scattered notes and files.'],
      ['04', 'Approve', 'Approvals move through the configured panel, manager, or governance path.'],
      ['05', 'Record', 'The shortlist, review log, approval trail, and decision record are kept together.'],
    ],
    reviewLoop: [
      'Candidates or submissions enter the queue',
      'Criteria and evidence are applied consistently',
      'Reviewers score and comment against the same structure',
      'The decision record is exported or approved',
    ],
    outputs: [
      'Structured review queue',
      'Criteria-based review log',
      'Reviewer evidence record with notes and scores',
      'Approval trail',
      'Exportable decision record',
    ],
    dataBoundaryNote:
      'LNYRD keeps resumes, candidate material, submissions, evidence, reviewer notes, and scores inside the client boundary. Sensitive review data is not sent to public AI tools or third-party LLM services.',
    commercialSummary: {
      category: 'Structured review and decision engine.',
      builtFor:
        'HR teams, recruitment teams, assessment panels, professional services firms, and internal review teams.',
      worksWith:
        'candidates, submissions, criteria, evidence, reviewer notes, scores, approvals, and panel decisions.',
      improves:
        'review consistency, evidence capture, comparison quality, approval routing, and decision traceability.',
      customisable:
        'criteria, scoring models, stages, roles, approval paths, fields, evidence requirements, exports, reporting, integrations.',
    },
    fit: FIT_BLOCK,
    ctaHeadline:
      'Bring us a real review workflow and we’ll map the decision record.',
    media: '/video/lnyrd-loop.mp4',
    poster: '/images/lnyrd-poster.jpg',
    fallbackImg: '/assets/lnyrd-dashboard.png',
    detailImg: '/assets/lnyrd-candidates.png',
    ctaSource: 'lnyrd',
  },
  {
    slug: 'warranty-triage',
    title: 'Warranty Triage',
    category: 'Warranty claim triage engine',
    headline: 'Route warranty claims with clearer evidence.',
    summary:
      'Warranty Triage intakes claims, classifies product and defect context, checks evidence completeness, routes the case, and reports across the claim book.',
    whatItDoes: [
      'Intakes warranty claims, customer records, product data, service notes, and supporting evidence',
      'Classifies product, policy, defect, and routing context for each claim',
      'Checks evidence completeness before a claim reaches the wrong reviewer or stalls in the queue',
      'Routes cases to service, parts, product quality, insurer, dealer, or escalation teams',
      'Reports across the claim book with queue, SLA, routing, and escalation status',
    ],
    whoItIsFor: [
      'Manufacturers',
      'Retailers',
      'Distributors',
      'Service networks',
      'Insurers',
      'Product quality teams',
      'Warranty and claims teams',
    ],
    customisation: [
      'Product categories',
      'Warranty rules',
      'Policy checks',
      'Defect codes',
      'Evidence requirements',
      'Escalation thresholds',
      'Service workflows',
      'Claim routing',
      'SLA tracking',
      'Claim-book reporting',
    ],
    workflow: [
      ['01', 'Intake', 'Claims arrive with product data, customer records, service notes, photos, or other evidence attached.'],
      ['02', 'Classify', 'Policy, product category, defect code, and coverage rules are applied consistently.'],
      ['03', 'Check', 'Missing evidence, unclear coding, duplicate claims, and escalation triggers are flagged.'],
      ['04', 'Route', 'Each claim moves to the right service, parts, quality, insurer, or escalation path.'],
      ['05', 'Report', 'Claim-book visibility updates across queue status, SLA, evidence quality, defect code, and product category.'],
    ],
    reviewLoop: [
      'Claim and evidence enter the queue',
      'Policy/product/defect codes are applied',
      'Missing evidence and routing path are flagged',
      'Claim-book reporting is updated',
    ],
    outputs: [
      'Categorised claim queue',
      'Evidence completeness flags',
      'SLA and routing tracker',
      'Service and escalation log',
      'Claim-book reporting by policy, product category, defect code, and status',
    ],
    dataBoundaryNote:
      'Warranty Triage keeps customer records, claim evidence, service notes, product data, and warranty rules inside the client boundary. Third-party LLM services sit outside the perimeter.',
    commercialSummary: {
      category: 'Warranty claim triage engine.',
      builtFor:
        'manufacturers, retailers, distributors, service networks, insurers, product quality teams, and warranty teams.',
      worksWith:
        'claims, customer records, product data, defect codes, evidence, photos, service notes, warranty terms, routing rules.',
      improves:
        'claim intake quality, classification consistency, evidence completeness, routing speed, escalation control, and claim-book visibility.',
      customisable:
        'categories, policies, checks, defect codes, evidence requirements, escalation thresholds, routing, SLA tracking, reporting.',
    },
    fit: FIT_BLOCK,
    ctaHeadline:
      'Bring us a real claim flow and we’ll map the triage loop.',
    media: '/video/warranty-loop.mp4',
    poster: '/images/warranty-poster.jpg',
    fallbackImg: '/assets/triage-home.png',
    detailImg: '/assets/triage-rive.png',
    ctaSource: 'warranty-triage',
  },
  {
    slug: 'schaaq-ma',
    title: 'Schaaq M&A',
    category: 'Pre-acquisition database risk diagnostic',
    headline: 'Price database architecture risk before the deal closes.',
    summary:
      'Schaaq M&A is a pre-acquisition diagnostic that quantifies database architecture as financial risk in tech M&A using metadata-only intake, strict anonymisation options, and a proprietary economic engine.',
    availability:
      'In build. Defined product stream and product spec; not presented as a fully deployed live production system.',
    whatItDoes: [
      'Intakes structural CSV metadata only, never database values',
      'Applies anonymisation options at full, partial, or none',
      'Assesses database architecture as financial risk in tech M&A',
      'Scores findings with high, medium, or low confidence levels',
      'Produces Rapid 48hr red-flag and Deep 5-day diligence workflows',
      'Exports VDR-ready reports, technical appendices, and confidence-scored findings',
      'Supports advisor white-label use alongside tech DD, cyber DD, and VDR workflows',
      'Frames outputs for Australian deal contexts including ACCC mandatory merger notification from Jan 2026, FIRB conditionality, OAIC NDB scheme, and SOCI obligations',
    ],
    whoItIsFor: [
      'PE firms with in-house diligence',
      'M&A advisory firms',
      'Deal lawyers and corporate counsel in tech M&A',
      'Boutique advisors in mining, energy, and ESG',
      'Specialist deal teams',
    ],
    customisation: [
      'Intake validation rules',
      'Anonymisation settings',
      'Confidence framework',
      'Report templates',
      'White-label packaging',
      'Buyer terminology',
      'Risk framing',
      'VDR export packaging',
    ],
    workflow: [
      ['01', 'Intake', 'Structural metadata enters the review without ingesting database values.'],
      ['02', 'Anonymise', 'Configurable anonymisation and validation rules are applied before assessment.'],
      ['03', 'Quantify', 'Architecture risk and confidence are scored using a four-layer quantification model.'],
      ['04', 'Generate', 'Executive, Rapid, Deep, and technical outputs are produced for the deal team.'],
      ['05', 'Package', 'Reports, appendices, and supporting files are prepared for VDR or advisor use.'],
    ],
    reviewLoop: [
      'Structural metadata enters the intake',
      'Anonymisation and validation are applied',
      'Architecture risk and confidence are quantified',
      'Executive and technical outputs are packaged',
    ],
    outputs: [
      'Rapid red-flag summary',
      'Deep assessment report',
      'Technical appendix',
      'VDR-ready export pack',
      'Confidence-scored findings',
      'Anonymisation certificate if relevant',
    ],
    dataBoundaryNote:
      'Schaaq M&A processes structural metadata only. No database values are ingested. Assessment runs inside a controlled boundary with metadata-only handling and configurable anonymisation.',
    commercialSummary: {
      category: 'Pre-acquisition database risk diagnostic.',
      status:
        'In build: defined product stream and product spec, with Rapid and Deep diligence workflows being shaped for pre-release use.',
      builtFor:
        'PE firms, M&A advisors, counsel, boutique advisors, and specialist deal teams.',
      worksWith:
        'structural database metadata, schema-level signals, diligence packs, and VDR-ready reporting workflows.',
      improves:
        'pre-acquisition visibility, risk pricing, deal readiness, and evidence-backed technical diligence.',
      customisable:
        'anonymisation, reporting, confidence presentation, terminology, white-label packaging, risk framing, export packaging.',
    },
    fit: SCHAAQ_MA_FIT,
    ctaHeadline:
      "Bring us a target and we'll map the database risk review.",
    media: null,
    poster: '/assets/schaaq-ma.png',
    fallbackImg: '/assets/schaaq-ma.png',
    detailImg: '/assets/schaaq-ma.png',
    ctaSource: 'schaaq-ma',
  },
  {
    slug: '949',
    title: '949',
    category: 'Real-estate workflow automation',
    headline: 'Controlled workflow automation for real-estate paperwork and compliance support.',
    summary:
      '949 is a controlled workflow automation platform for real-estate paperwork, admin processing, compliance flagging, and REX preparation, designed to reduce repetitive manual work while keeping compliance-sensitive decisions under human control.',
    availability:
      'Planning and discovery. Early product stage with an intentionally narrow MVP; not build-complete.',
    whatItDoes: [
      'Receives paperwork and uploads',
      'Organises, classifies, splits, merges, renames, and preserves document packs',
      'Extracts key operational and transaction fields',
      'Applies checklist and rule checks',
      'Flags missing, inconsistent, or risky items',
      'Routes work to human review',
      'Prepares safe REX updates for review or approved update paths',
      'Records audit trail and workflow history',
      'Keeps later roadmap modules separate from the narrow MVP, including title searches, ASIC checks, BYDA, Campaign Flow / CF funds requests, ConnectNow, Canva tiles, and RMA / REA review requests',
    ],
    whoItIsFor: [
      'Real-estate businesses',
      'Real-estate operations teams',
      'Real-estate admin teams',
      'Real-estate compliance-support teams',
      'Back-office processing teams',
      'Businesses using REX-based or similar paperwork workflows',
    ],
    customisation: [
      'Intake paths',
      'Document classifications',
      'Extraction fields',
      'Rule sets and checklists',
      'Compliance flag logic',
      'Human review flows',
      'REX preparation mappings',
      'Audit trail outputs',
      'Dashboard views',
    ],
    workflow: [
      ['01', 'Receive', 'Paperwork and uploads enter the controlled workflow queue.'],
      ['02', 'Organise', 'Documents are classified, split, merged, renamed, and preserved as a pack.'],
      ['03', 'Extract', 'Key operational and transaction fields are captured for review.'],
      ['04', 'Check', 'Checklist rules and compliance-support checks surface flags and evidence.'],
      ['05', 'Review', 'Exceptions route to authorised human reviewers before sensitive decisions are approved.'],
      ['06', 'Prepare', 'REX preparation or approved update paths are staged safely.'],
      ['07', 'Record', 'Audit trail, workflow history, and dashboard visibility are retained.'],
    ],
    reviewLoop: [
      'Paperwork enters the workflow',
      'Documents are organised and key data is extracted',
      'Checklist and compliance-support rules create flags',
      'Human reviewers approve sensitive decisions',
    ],
    outputs: [
      'Organised document pack',
      'Extracted field set',
      'Checklist and rule results',
      'Compliance flags',
      'Human review queue',
      'REX preparation output',
      'Audit trail log',
      'Workflow dashboard visibility',
    ],
    dataBoundaryNote:
      '949 is designed as a controlled workflow layer for real-estate paperwork and operations support. It should surface issues, evidence, and exceptions while keeping final approval with authorised human reviewers, especially for power of attorney, deceased estates, company authority, trust matters, title/vendor mismatches, and other judgement-heavy scenarios.',
    commercialSummary: {
      category: 'Real-estate workflow automation and compliance support.',
      status:
        'Planning and discovery: early product stage, not build-complete, with a narrow MVP focused on intake, document handling, extraction, checks, flags, human approval, REX preparation, and audit trail.',
      builtFor:
        'real-estate businesses, operations teams, admin teams, compliance-support teams, and back-office processing teams.',
      worksWith:
        'paperwork uploads, document packs, operational fields, transaction fields, rule checks, review queues, REX preparation, and audit trails.',
      improves:
        'paperwork handling, admin processing, exception visibility, compliance-support routing, REX readiness, and workflow history.',
      customisable:
        'intake paths, document classes, extraction fields, rule sets, flag logic, review flows, REX mappings, audit outputs, dashboards.',
    },
    fit: NINE_FOUR_NINE_FIT,
    ctaHeadline:
      "Bring us a real-estate workflow and we'll map the controlled process.",
    media: null,
    poster: '/assets/949.png',
    fallbackImg: '/assets/949.png',
    detailImg: '/assets/949.png',
    ctaSource: '949',
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
