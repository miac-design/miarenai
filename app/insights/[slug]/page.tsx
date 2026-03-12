import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { getArticleSchema } from "@/lib/schema";
import NodeNetwork from "@/components/NodeNetwork";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Mia Cheraghian, PhD" }],
    alternates: {
      canonical: `https://miarenai.com/insights/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Mia Cheraghian, PhD"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) notFound();

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    date: post.date,
    category: post.category,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        {/* Header */}
        <header className="relative bg-soft-white pt-12 pb-10 md:pt-16 md:pb-14 overflow-hidden">
          <NodeNetwork opacity={0.2} />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-mono bg-teal/10 text-teal px-3 py-1 rounded">
                {post.category.toUpperCase()}
              </span>
              <span className="text-xs text-warm-gray font-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-xs text-warm-gray font-mono">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-warm-gray leading-relaxed">
              {post.description}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200">
              <Image
                src="/mia-cheraghian.png"
                alt="Mia Cheraghian, PhD"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-navy">
                  Mia Cheraghian, PhD
                </p>
                <p className="text-xs text-warm-gray">
                  Founder, Miaren AI · Researcher · AI visibility methodology creator
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">
                  {section.heading}
                </h2>
                <p className="text-warm-gray leading-relaxed text-base">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Author box */}
          <div className="mt-14 p-6 bg-teal-light/50 rounded-xl border border-teal/10">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/mia-cheraghian.png"
                alt="Mia Cheraghian, PhD"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-navy">Mia Cheraghian, PhD</p>
                <p className="text-xs text-warm-gray">
                  Founder of Miaren AI · PhD Researcher · Creator of the AI visibility methodology
                </p>
              </div>
            </div>
            <p className="text-sm text-warm-gray leading-relaxed">
              Mia is a PhD researcher studying how AI reshapes discovery for underserved communities.
              She founded Miaren AI to help businesses become visible, citable, and recommendable
              in AI-powered search engines.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/miaren-ai/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal text-sm font-medium hover:underline"
              >
                LinkedIn →
              </a>
              <Link href="/contact" className="text-teal text-sm font-medium hover:underline">
                Connect →
              </Link>
            </div>
          </div>

          {/* Back to insights */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link href="/insights" className="text-teal text-sm font-medium hover:underline">
              ← Back to all insights
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="relative bg-navy py-14 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Want to check your AI visibility?
          </h2>
          <p className="mt-3 text-warm-gray">
            Get a research-backed audit of your brand&apos;s presence across AI search systems.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Start a Conversation →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
