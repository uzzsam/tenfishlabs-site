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
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
