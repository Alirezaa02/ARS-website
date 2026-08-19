import { Link } from "react-router-dom";
import { Reveal } from "../lib/motion";
import { useSEO } from "../lib/seo";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  useSEO({
    title: "Blog — ARS",
    description:
      "Guides on AI customer service, missed-call automation, and websites for Australian small businesses.",
    path: "/blog",
  });

  const posts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="eyebrow">Blog</span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Guides for Australian small businesses
          </h1>
          <p className="mt-4 text-slate-400">
            Practical advice on AI customer service, missed calls, and websites — no fluff.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                to={`/blog/${post.slug}`}
                className="glass glass-hover block rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{post.description}</p>
                <span className="mt-4 inline-block text-sm text-accent">Read more →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
