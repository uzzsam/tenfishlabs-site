import { Container, Eyebrow, RouterLink } from './primitives.jsx';

export default function Capabilities({ navigate }) {
  return (
    <section id="capabilities" className="py-20 md:py-24 border-b border-rule bg-panel">
      <Container>
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow className="mb-6">PROCESS &amp; VALUE</Eyebrow>
            <h2 className="display text-[32px] md:text-[44px] leading-[1.08]">Understand the work.<br />Measure what improves.</h2>
            <p className="body-lead mt-6">ProductiveQ is the process mapping and operational analysis arm of Ten Fish Labs, undertaking work in oil and gas. TFL also works across mining and automotive.</p>
            <p className="body-muted mt-4">Its value measurement platform is in development. The approach connects people, systems and processes to the cost and value of the work they perform.</p>
            <RouterLink to="/contact" query={{ product: 'productiveq' }} navigate={navigate} className="btn-solid mt-8">Discuss process mapping <span aria-hidden="true">→</span></RouterLink>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6">
            {[
              ['01', 'Map the complete workflow', 'Identify data sources, system handoffs, responsibilities, approval points and exceptions before deciding where automation belongs.'],
              ['02', 'Build around review and evidence', 'Connect source material to outputs, give people a clear review path, and define permissions and correction processes for the intended service.'],
              ['03', 'Test the value in a focused pilot', 'Agree measures for turnaround time, review effort, cost to serve and customer outcomes. Validate the economics before committing to scale.'],
            ].map(([n, title, body]) => (
              <div key={n} className="border-t border-rule pt-5 grid grid-cols-[32px_1fr] gap-5">
                <span className="spec text-muted pt-1">{n}</span>
                <div><h3 className="display text-[22px] leading-tight">{title}</h3><p className="body-muted mt-3">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-16 border border-rule bg-white p-6 md:p-10">
          <Eyebrow className="mb-4">FINANCIAL INFORMATION · EXPLORATORY APPLICATION</Eyebrow>
          <h3 className="display text-[26px] md:text-[32px] leading-tight">From licensed content to a reviewed customer experience.</h3>
          <p className="body-lead mt-5 max-w-3xl">We are exploring how traceable content workflows could support multilingual financial information and partner-branded delivery. The route from licensed sources through translation, quality review and distribution needs clear ownership at every step.</p>
          <p className="body-muted mt-4 max-w-3xl">ProductiveQ’s mapping and measurement approach could help assess review effort, operating costs and commercial value. This is a proposed application, subject to content and translation rights, security, privacy and compliance assessment, and pilot validation.</p>
        </div>
      </Container>
    </section>
  );
}
