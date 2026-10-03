import React, { type ComponentProps, Children, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Callout, type CalloutKind } from "@/components/blog/Callout";

function childrenToText(node: React.ReactNode): string {
  let out = "";
  const walk = (n: React.ReactNode) => {
    if (n == null || typeof n === "boolean") return;
    if (typeof n === "string" || typeof n === "number") out += String(n);
    else if (Array.isArray(n)) n.forEach(walk);
    else if (isValidElement(n)) walk((n.props as { children?: React.ReactNode }).children);
  };
  walk(node);
  return out;
}

// function stripMarker(node: React.ReactNode): React.ReactNode {
//   const munged = (n: React.ReactNode, depth = 0): React.ReactNode => {
//     if (n == null || typeof n === "boolean") return n;
//     if (typeof n === "string") {
//       if (depth === 0) {
//         return n.replace(/^\[!(INFO|WARNING|SUCCESS)\]\s*/, "");
//       }
//       return n;
//     }
//     if (typeof n === "number") return n;
//     if (Array.isArray(n)) return n.map((c, i) => munged(c, depth + (i === 0 ? 0 : 1)));
//     if (isValidElement(n)) {
//       return React.cloneElement(n, undefined as never, (
//         munged((n.props as { children?: React.ReactNode }).children, depth + 1)
//       ));
//     }
//     return n;
//   };
//   return munged(node);
// }

function stripMarker(node: React.ReactNode): React.ReactNode {
  let stripped = false;
  const munged = (n: React.ReactNode): React.ReactNode => {
    if (n == null || typeof n === "boolean") return n;
    if (typeof n === "string") {
      if (!stripped) {
        const next = n.replace(/^\s*\[!(INFO|WARNING|SUCCESS)\]\s*/, "");
        if (next !== n) stripped = true;
        return next;
      }
      return n;
    }
    if (typeof n === "number") return n;
    if (Array.isArray(n)) return n.map((c) => munged(c));
    if (isValidElement(n)) {
      return React.cloneElement(
        n,
        undefined as never,
        munged((n.props as { children?: React.ReactNode }).children)
      );
    }
    return n;
  };
  return munged(node);
}

interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="article-body-wrapper">
      <article
        className="article-body prose prose-invert prose-lg max-w-2xl mx-auto w-full
          prose-headings:scroll-mt-28
          prose-p:text-white/80
          prose-strong:text-white
          prose-a:text-[#3B82F6] prose-a:no-underline prose-a:font-medium
          prose-ul:text-white/80 prose-ul:list-none
          prose-ol:text-white/80 prose-ol:list-decimal
          prose-blockquote:not-italic prose-blockquote:text-white/75
          prose-code:text-[#A5B4FC] prose-code:before:content-none prose-code:after:content-none
          prose-table:text-sm prose-table:w-full
          prose-th:bg-white/5 prose-th:text-white prose-th:font-semibold prose-th:text-left prose-th:px-4 prose-th:py-3
          prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-white/10 prose-td:text-white/75
          prose-img:rounded-2xl prose-img:border prose-img:border-white/10
          prose-hr:border-white/10"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={{
            h2(props: ComponentProps<"h2">) {
              const { className: _cn, ...rest } = props;
              return (
                <h2
                  {...rest}
                  className="mt-16 sm:mt-20 mb-6
                    font-display font-bold tracking-tight
                    text-[26px] sm:text-[28px] md:text-[30px]
                    leading-tight text-white"
                />
              );
            },
            h3(props: ComponentProps<"h3">) {
              const { className: _cn, ...rest } = props;
              return (
                <h3
                  {...rest}
                  className="mt-12 sm:mt-14 mb-4
                    font-display font-bold tracking-tight
                    text-[20px] sm:text-[22px]
                    leading-snug text-white"
                />
              );
            },
            h4(props: ComponentProps<"h4">) {
              const { className: _cn, ...rest } = props;
              return (
                <h4
                  {...rest}
                  className="mt-10 mb-3 font-display font-semibold tracking-tight text-[18px] text-white"
                />
              );
            },
            p(props: ComponentProps<"p">) {
              const { className: _cn, ...rest } = props;
              return (
                <p
                  {...rest}
                  className="mb-8 text-[18px] leading-[2rem] text-white/80 font-[font-inter]"
                />
              );
            },
            strong(props: ComponentProps<"strong">) {
              const { className: _cn, ...rest } = props;
              return (
                <strong
                  {...rest}
                  className="text-white font-bold tracking-[0.01em]"
                />
              );
            },
            ul(props: ComponentProps<"ul">) {
              const { className: _cn, children, ...rest } = props;
              const kidsArr = Children.toArray(children).filter(isValidElement);
              const count = kidsArr.length;
              const long = count >= 8;
              return (
                <ul {...rest} className="my-10 list-none pl-0 text-white/80">
                  {kidsArr.map((el, idx) => {
                    if (long && idx === 5) {
                      return (
                        <React.Fragment key={`sep-${idx}`}>
                          <div className="mt-6 pt-6 mb-2 border-t border-white/10" />
                          {el}
                        </React.Fragment>
                      );
                    }
                    return el;
                  })}
                </ul>
              );
            },
            ol(props: ComponentProps<"ol">) {
              const { className: _cn, children, ...rest } = props;
              const kidsArr = Children.toArray(children).filter(isValidElement);
              const count = kidsArr.length;
              const long = count >= 8;
              return (
                <ol
                  {...rest}
                  className="my-10 pl-6 sm:pl-8 list-decimal text-white/80 marker:text-[#3B82F6] marker:font-bold"
                >
                  {kidsArr.map((el, idx) => {
                    if (long && idx === 5) {
                      return (
                        <React.Fragment key={`sep-${idx}`}>
                          <div className="mt-6 pt-6 mb-2 border-t border-white/10" />
                          {el}
                        </React.Fragment>
                      );
                    }
                    return el;
                  })}
                </ol>
              );
            },
            li(props: ComponentProps<"li"> & { parent?: { tagName?: string } }) {
              const { parent, className: _cn, style: _st, children, ...rest } = props;
              const inUl = parent?.tagName === "ul";
              if (inUl) {
                return (
                  <li {...rest} className="relative pl-7 my-4 leading-[2rem] text-[17px]">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-1 top-[0.85em] w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_0_4px_rgba(37,99,235,0.15)]"
                    />
                    <div className="text-[17px] leading-[2rem]">{children}</div>
                  </li>
                );
              }
              return (
                <li {...rest} className="my-4 leading-[2rem] text-[17px] pl-1 sm:pl-2 marker:text-[15px]">
                  <div className="text-[17px] leading-[2rem]">{children}</div>
                </li>
              );
            },
            blockquote(props: ComponentProps<"blockquote">) {
              const text = childrenToText(props.children).trim();
              const m = text.match(/^\[!(INFO|WARNING|SUCCESS)\]\s*([\s\S]*)$/);
              if (m) {
                const kind = m[1] as CalloutKind;
                const stripped = stripMarker(props.children);
                return <Callout kind={kind}>{stripped}</Callout>;
              }
              const { className: _cn, ...rest } = props;
              return (
                <blockquote
                  {...rest}
                  className="my-10 border-l-4 border-[#2563EB] bg-white/[0.04] rounded-r-xl py-5 px-6 not-italic text-white/75 text-[16px] leading-relaxed"
                />
              );
            },
            table(props: ComponentProps<"table">) {
              return (
                <div className="not-prose my-10 overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-sm text-white/80">{props.children}</table>
                </div>
              );
            },
            th(props: ComponentProps<"th">) {
              return (
                <th className="bg-white/5 text-white font-semibold text-left px-4 py-3 border-b border-white/10">
                  {props.children}
                </th>
              );
            },
            td(props: ComponentProps<"td">) {
              return <td className="px-4 py-3 border-t border-white/10 align-top">{props.children}</td>;
            },
            a(props: ComponentProps<"a">) {
              const href = props.href || "";
              const external = /^https?:\/\//.test(href);
              return (
                <a
                  {...props}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-[#3B82F6] no-underline hover:underline font-medium break-words"
                />
              );
            },
            code(props: ComponentProps<"code">) {
              const { className: _cn, ...rest } = props;
              return (
                <code
                  {...rest}
                  className="text-[#A5B4FC] bg-white/5 px-1.5 py-0.5 rounded text-[0.9em] font-mono"
                />
              );
            },
            img(props: ComponentProps<"img">) {
              return (
                <img
                  {...props}
                  className="my-10 rounded-2xl border border-white/10 w-full h-auto object-cover"
                />
              );
            },
            hr(props: ComponentProps<"hr">) {
              return <hr {...props} className="my-12 border-white/10" />;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Fallback CSS block — pins spacing/sizes even if Tailwind prose modifier cascade strips classes on production. */}
      <style>{`
        .article-body > h2 {
          margin-top: 4rem !important;
          margin-bottom: 1.5rem !important;
          font-size: clamp(26px, 4vw, 30px) !important;
          line-height: 1.2 !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          letter-spacing: -0.01em !important;
        }
        @media (min-width: 640px) {
          .article-body > h2 { margin-top: 5rem !important; }
        }
        .article-body > h3 {
          margin-top: 3rem !important;
          margin-bottom: 1rem !important;
          font-size: clamp(20px, 2.6vw, 22px) !important;
          line-height: 1.3 !important;
          font-weight: 700 !important;
          color: #ffffff !important;
        }
        @media (min-width: 640px) {
          .article-body > h3 { margin-top: 3.5rem !important; }
        }
        .article-body > h4 {
          margin-top: 2.5rem !important;
          margin-bottom: 0.75rem !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          color: #ffffff !important;
        }
        .article-body > p {
          margin-bottom: 2rem !important;
          font-size: 18px !important;
          line-height: 2rem !important;
          color: rgba(255,255,255,0.80) !important;
        }
        .article-body > ul,
        .article-body > ol {
          margin-top: 2.5rem !important;
          margin-bottom: 2.5rem !important;
          color: rgba(255,255,255,0.80) !important;
        }
        .article-body li {
          margin-top: 1rem !important;
          margin-bottom: 1rem !important;
          line-height: 2rem !important;
          font-size: 17px !important;
        }
        .article-body strong,
        .article-body b {
          color: #ffffff !important;
          font-weight: 700 !important;
          letter-spacing: 0.01em !important;
        }
        .article-body > blockquote {
          margin-top: 2.5rem !important;
          margin-bottom: 2.5rem !important;
        }
        .article-body > hr {
          margin-top: 3rem !important;
          margin-bottom: 3rem !important;
        }
        .article-body table,
        .article-body img {
          margin-top: 2.5rem !important;
          margin-bottom: 2.5rem !important;
        }
      `}</style>
    </div>
  );
}
