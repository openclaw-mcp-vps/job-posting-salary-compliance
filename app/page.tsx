export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check Job Posts for{" "}
          <span className="text-[#58a6ff]">Salary Transparency</span> Laws
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste any job posting and instantly detect missing salary ranges required by state laws. Get compliance scores, flagged violations, and suggested fixes — before you publish.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Checking — $14/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">Covers CA, NY, CO, WA, IL, and more. Updated as laws change.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Paste Your Job Post", desc: "Drop in any job description text from any source." },
            { step: "2", title: "Instant Analysis", desc: "Our rule engine checks for salary range requirements by state." },
            { step: "3", title: "Fix & Publish", desc: "Get exact suggested language to bring your post into compliance." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited job post scans",
              "All 50 states + DC coverage",
              "Real-time compliance scoring",
              "Suggested compliant language",
              "Bulk paste support",
              "Law update notifications"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which states are covered?",
              a: "We cover all states with active salary transparency laws including California, New York, Colorado, Washington, Illinois, Connecticut, Nevada, and Rhode Island — with more added as legislation passes."
            },
            {
              q: "How accurate is the compliance check?",
              a: "Our rule engine is built on the actual statutory text of each state law and is updated whenever laws change. It catches missing salary ranges, non-compliant formats, and vague language that could trigger violations."
            },
            {
              q: "Can I check postings in bulk?",
              a: "Yes. The Pro plan supports bulk paste so you can check multiple job descriptions at once — ideal for HR teams auditing existing postings before a law takes effect."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Salary Compliance Checker. Not legal advice.
      </footer>
    </main>
  );
}
