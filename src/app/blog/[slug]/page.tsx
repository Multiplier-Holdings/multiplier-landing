import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This would come from MDX or Notion API in the future
const POST_DATA = {
  title: "AI-Driven M&A: The New Due Diligence Standard",
  description: "How artificial intelligence is revolutionizing the merger and acquisition landscape, from automated risk assessment to predictive valuation models.",
  author: {
    name: "Alex Morgan",
    role: "Partner, M&A Strategy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
  date: "March 15, 2025",
  readTime: "8 min read",
  thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000",
  tags: ["M&A Strategy", "Artificial Intelligence"],
};

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-cream">
      {/* Back Navigation */}
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-forest/60 hover:text-forest transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-2xl mx-auto px-6 pb-10">
        <div className="flex items-center gap-3 text-sm text-forest/60 mb-6">
          <span>{POST_DATA.date}</span>
          <span>·</span>
          <span>{POST_DATA.readTime}</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-serif text-forest leading-tighter tracking-tight mb-6">
          {POST_DATA.title}
        </h1>

        <p className="text-lg text-forest/70 leading-relaxed">
          {POST_DATA.description}
        </p>
      </header>

      {/* Featured Image */}
      <figure className="max-w-3xl mx-auto px-6 mb-12">
        <div className="aspect-[2/1] overflow-hidden rounded-lg">
          <img
            src={POST_DATA.thumbnail}
            alt={POST_DATA.title}
            className="w-full h-full object-cover"
          />
        </div>
      </figure>

      {/* Article Content */}
      <div className="max-w-2xl mx-auto px-6 pb-20">
        {/* Lead */}
        <p className="text-forest/80 leading-[1.8] mb-6">
          The landscape of mergers and acquisitions is undergoing a fundamental transformation.
          As deal complexity increases and timelines compress, traditional due diligence methods
          are proving insufficient. Enter artificial intelligence—a paradigm shift that&apos;s
          redefining how we assess risk, value assets, and structure transactions.
        </p>

        <h2 className="text-xl font-semibold text-forest mt-12 mb-4">
          The Evolution of Due Diligence
        </h2>

        <p className="text-forest/80 leading-[1.8] mb-6">
          For decades, due diligence has relied on armies of analysts manually reviewing
          documents, financial statements, and contracts. This approach, while thorough,
          is inherently limited by human bandwidth and the cognitive constraints of
          processing vast amounts of information under time pressure.
        </p>

        <p className="text-forest/80 leading-[1.8] mb-6">
          The modern M&A environment demands more. Cross-border transactions involve
          regulatory frameworks spanning multiple jurisdictions. Private equity firms
          are evaluating more targets than ever. Strategic acquirers need to move fast
          or risk losing competitive advantages.
        </p>

        {/* Blockquote */}
        <blockquote className="border-l-2 border-dark-gold/50 pl-5 my-10">
          <p className="text-forest/80 leading-[1.8]">
            &ldquo;The firms that will dominate the next decade of M&A are those that treat
            AI not as a tool, but as a core competency embedded in every stage of the
            deal lifecycle.&rdquo;
          </p>
          <cite className="text-sm text-forest/60 mt-3 block">
            — Sarah Chen, Director of Transaction Services
          </cite>
        </blockquote>

        <h2 className="text-xl font-semibold text-forest mt-12 mb-4">
          Key Applications in Modern M&A
        </h2>

        <p className="text-forest/80 leading-[1.8] mb-6">
          AI is transforming multiple dimensions of the M&A process. The most impactful
          applications we&apos;ve deployed across our portfolio include:
        </p>

        <ul className="space-y-4 mb-8">
          <li className="text-forest/80 leading-[1.8] pl-4 border-l border-forest/10">
            <strong className="text-forest">Document Intelligence</strong> — Automated extraction and analysis of key terms from thousands of contracts, identifying risks and obligations that would take human reviewers weeks to uncover.
          </li>
          <li className="text-forest/80 leading-[1.8] pl-4 border-l border-forest/10">
            <strong className="text-forest">Predictive Valuation Models</strong> — Machine learning algorithms that synthesize market data, comparable transactions, and company-specific metrics to generate more accurate valuation ranges.
          </li>
          <li className="text-forest/80 leading-[1.8] pl-4 border-l border-forest/10">
            <strong className="text-forest">Regulatory Compliance Mapping</strong> — Real-time analysis of regulatory requirements across jurisdictions, automatically flagging potential compliance issues and required approvals.
          </li>
          <li className="text-forest/80 leading-[1.8] pl-4 border-l border-forest/10">
            <strong className="text-forest">Integration Risk Assessment</strong> — Pattern recognition across historical integrations to predict post-merger challenges and optimize integration planning.
          </li>
        </ul>

        {/* Inline Image */}
        <figure className="my-10">
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-forest/5">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
              alt="Data visualization dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-sm text-forest/60 mt-3">
            Real-time deal analytics dashboard showing automated risk scoring across multiple workstreams
          </figcaption>
        </figure>

        <h2 className="text-xl font-semibold text-forest mt-12 mb-4">
          The Human-AI Partnership
        </h2>

        <p className="text-forest/80 leading-[1.8] mb-6">
          It&apos;s crucial to understand that AI doesn&apos;t replace human judgment—it amplifies it.
          The most sophisticated algorithms still require experienced professionals to interpret
          results, understand context, and make nuanced decisions that consider factors beyond
          what data can capture.
        </p>

        <p className="text-forest/80 leading-[1.8] mb-6">
          At Multiplier, we&apos;ve developed what we call the <strong>&ldquo;Augmented Analyst&rdquo;</strong> model.
          Our technology handles the heavy lifting of data processing and pattern recognition,
          while our professionals focus on what they do best: building relationships, negotiating
          terms, and providing strategic counsel.
        </p>

        <h3 className="text-lg font-medium text-forest mt-10 mb-4">
          Technical Implementation
        </h3>

        <p className="text-forest/80 leading-[1.8] mb-6">
          For those interested in the technical architecture, our document processing pipeline
          leverages a combination of transformer models and domain-specific fine-tuning:
        </p>

        {/* Code Block */}
        <div className="my-8 rounded-lg overflow-hidden bg-forest text-sm">
          <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-white/60 font-mono text-xs">extraction_pipeline.py</span>
          </div>
          <pre className="p-5 overflow-x-auto">
            <code className="font-mono text-white/90 leading-relaxed">{`class DocumentExtractor:
    def __init__(self, model_path: str):
        self.model = load_fine_tuned_model(model_path)
        self.entity_recognizer = EntityRecognizer()

    async def process_document(self, document: Document):
        # Extract key entities and obligations
        entities = await self.entity_recognizer.extract(document)

        # Classify risk factors
        risks = self.model.classify_risks(
            document.content,
            context=entities
        )

        return ExtractionResult(
            entities=entities,
            risks=risks,
            confidence=self.model.confidence_score
        )`}</code>
          </pre>
        </div>

        {/* Callout Box */}
        <div className="my-10 bg-gold/10 rounded-lg p-6">
          <p className="text-sm font-medium text-forest mb-2">Key Takeaway</p>
          <p className="text-forest/80 leading-[1.8]">
            The future of M&A belongs to firms that can seamlessly blend technological
            capability with human expertise. This isn&apos;t about choosing between AI and
            traditional methods—it&apos;s about creating a synthesis that delivers better
            outcomes for all stakeholders.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-forest mt-12 mb-4">
          Looking Ahead
        </h2>

        <p className="text-forest/80 leading-[1.8] mb-6">
          As we look to the future, several trends are poised to further transform the landscape:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-forest/80 leading-[1.8] mb-8">
          <li><strong className="text-forest">Real-time deal monitoring</strong> — Continuous analysis of deal progress with automated alerts</li>
          <li><strong className="text-forest">Natural language querying</strong> — Stakeholders will interact with deal data conversationally</li>
          <li><strong className="text-forest">Predictive deal sourcing</strong> — AI systems that identify targets before they come to market</li>
          <li><strong className="text-forest">Automated regulatory filings</strong> — Streamlined compliance with intelligent document generation</li>
        </ul>

        <p className="text-forest/80 leading-[1.8] mb-6">
          The M&A landscape of 2030 will be unrecognizable compared to today. Firms that
          invest now in building these capabilities will find themselves with an insurmountable
          competitive advantage. Those that wait may find the gap too wide to bridge.
        </p>

        <hr className="my-12 border-forest/10" />

        <p className="text-forest/70 leading-[1.8]">
          At Multiplier Holdings, we&apos;re committed to pioneering this transformation. Our
          portfolio companies are already deploying these technologies, delivering results
          that speak for themselves. If you&apos;re interested in learning more about how we&apos;re
          reshaping professional services, we&apos;d love to hear from you.
        </p>
      </div>

      {/* Author Card */}
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <div className="bg-white border border-forest/10 rounded-lg p-6 flex gap-5 items-start">
          <img
            src={POST_DATA.author.avatar}
            alt={POST_DATA.author.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-xs text-forest/50 uppercase tracking-wider mb-1">Written by</p>
            <p className="font-medium text-forest text-lg mb-1">{POST_DATA.author.name}</p>
            <p className="text-sm text-forest/60 mb-3">{POST_DATA.author.role}</p>
            <p className="text-sm text-forest/70 leading-relaxed">
              Alex leads M&A strategy at Multiplier Holdings, bringing 15 years of experience
              in cross-border transactions and technology-enabled deal execution.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="max-w-2xl mx-auto px-6 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-forest/60 hover:text-forest transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>
      </div>
    </article>
  );
}
