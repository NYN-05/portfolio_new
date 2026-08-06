import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Badge } from "../components/ui/badge";
import { BLOG_POSTS } from "../lib/content";
import { usePageMeta } from "../hooks/usePageMeta";

function Block({ block }) {
  if (block.type === "h2") {
    return <h2 className="pt-2 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">{block.text}</h2>;
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-2 border-signal pl-5 font-display text-lg font-medium leading-relaxed tracking-tight text-foreground">
        {block.text}
      </blockquote>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/90">
            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-pretty text-base leading-relaxed text-foreground/90">{block.text}</p>;
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = useMemo(() => BLOG_POSTS.find((p) => p.slug === slug), [slug]);
  const related = useMemo(
    () => BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2),
    [slug]
  );

  usePageMeta(
    post ? `${post.title} — Jhashank Nayan` : "Jhashank Nayan — ML Engineer",
    post?.excerpt
  );

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 transition-colors hover:text-signal"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                All articles
              </Link>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="text-signal">Article</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span>{post.readTime} read</span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.02em] text-balance">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14} className="mt-8">
            <img
              src={post.hero}
              alt=""
              width={1440}
              height={810}
              decoding="async"
              className="aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <article className="mt-10 max-w-prose space-y-6">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 border-t border-border pt-8">
              <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Keep reading
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group flex min-w-0 items-start gap-4 rounded-2xl border border-border/80 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5"
                  >
                    <img
                      src={p.hero}
                      alt=""
                      width={128}
                      height={80}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-24 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p className="line-clamp-2 font-display text-sm font-semibold leading-snug tracking-tight">
                        {p.title}
                      </p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        {p.readTime} read
                      </p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 self-center text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-signal" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPostPage;
