import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { BLOG_POSTS } from "../content/posts";

function BlogCard({ post, eager = false }) {
  const dateStr = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="glass-card group flex flex-col overflow-hidden"
    >
      {/* image */}
      <div className="relative block h-40 overflow-hidden">
        <img
          src={post.hero}
          alt={post.title}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement?.classList.add("tech-grid");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[10px] text-white/80">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[9px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-[1.6] text-muted-foreground">{post.excerpt}</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <time className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {dateStr}
          </time>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-signal" />
        </div>
      </div>
    </Link>
  );
}

function BlogSection() {
  const latest = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" aria-labelledby="blog-title" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">[05] Writing</p>
              <h2 id="blog-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] leading-[1.1]">
                Thoughts &amp; Learnings
              </h2>
              <p className="mt-3 max-w-[48ch] text-muted-foreground">
                Things I&apos;ve learned while building — not just collecting projects.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-signal sm:inline-flex"
            >
              All posts
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} eager={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;