import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Badge } from "../components/ui/badge";
import { BLOG_POSTS } from "../lib/content";
import { usePageMeta } from "../hooks/usePageMeta";

function BlogPage() {
  usePageMeta(
    "Blog — Jhashank Nayan",
    "Technical writing on machine learning, MLOps, FastAPI, and system design — lessons from production systems."
  );

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-x-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 transition-colors hover:text-signal"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Home
              </Link>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="text-signal">Blog</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.0] tracking-[-0.02em] text-balance">
              Notes from{" "}
              <span className="relative inline-block">
                shipping
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[0.06em] z-[-1] h-[0.2em] rounded-[0.25em] bg-signal/25"
                />
              </span>{" "}
              ML systems
            </h1>
            <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Technical articles on machine learning, MLOps, and system design —
              written from production experience, not tutorials.
            </p>
          </Reveal>

          <div className="mt-14 space-y-6">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col gap-5 rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5 sm:flex-row sm:items-center"
                >
                  <img
                    src={post.hero}
                    alt=""
                    width={320}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="h-28 w-full shrink-0 rounded-xl object-cover sm:w-44"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      <time dateTime={post.date}>{post.date}</time>
                      <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
                      <span>{post.readTime} read</span>
                    </div>
                    <h2 className="mt-2 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-signal sm:text-xl">
                      {post.title}
                    </h2>
                    <p className="mt-1.5 line-clamp-2 text-[15px] leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
