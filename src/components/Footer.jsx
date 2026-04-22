import { Container, PrimaryCTAGhost, TFLMark } from './primitives.jsx';

export default function Footer({ navigate }) {
  return (
    <footer className="border-t border-rule">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <TFLMark />
              <span className="text-[15px] tracking-[-0.01em] font-medium">
                TEN FISH LABS
              </span>
            </div>
            <p className="body-lead max-w-md">
              Perth, Western Australia
            </p>
            <p className="body-muted max-w-md mt-2">
              Software for commercial systems, operational review, and sensitive data
              workflows.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:text-right">
            <PrimaryCTAGhost navigate={navigate} />
            <div className="mt-6 text-[12px] text-muted tracking-[0.22em] uppercase">
              © Ten Fish Pty Ltd
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
