import { ArticleBody } from "@/components/blog/ArticleBody";
import { Callout } from "@/components/blog/Callout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TEST_NESTED_MD = `**This is a bold intro line to verify strong text visibility inside the callout.** It should render in dark, readable text and not remain white/invisible.

| Feature | Tier 1 (Basic) | Tier 2 (Pro) | Tier 3 (Enterprise) |
|---------|----------------|--------------|---------------------|
| Hosting | 1 GB SSD | 10 GB NVMe | 100 GB RAID |
| Uptime SLA | 99.5% | 99.9% | 99.99% |
| Support | Email | 24/7 Chat | Dedicated Manager |

- **First bullet point** with a bolded phrase inside a regular bulleted list
- Nested \`inline code\` sample: use the \`CALL()\` function with your token
- Third item checking overall text legibility at length
  - Sub-item one under a nested unordered list
  - Sub-item two, also nested, checking contrast depth

Visit [an example link](https://example.com) to confirm link color is accessible, and here is an extra paragraph just to verify that regular paragraph text flows correctly with the 1.75rem line-height.
`;

const calloutMarkdownArticle = `# Callout Render Test via ArticleBody

Below are three callouts extracted from [!MARKER] blockquotes, each containing the nested-content test (bold intro, markdown table, bulleted list).

> [!INFO]
> **This is a bold intro line to verify strong text visibility inside the callout.** It should render in dark, readable text and not remain white/invisible.
>
> | Feature | Tier 1 (Basic) | Tier 2 (Pro) | Tier 3 (Enterprise) |
> |---------|----------------|--------------|---------------------|
> | Hosting | 1 GB SSD | 10 GB NVMe | 100 GB RAID |
> | Uptime SLA | 99.5% | 99.9% | 99.99% |
> | Support | Email | 24/7 Chat | Dedicated Manager |
>
> - **First bullet point** with a bolded phrase inside a regular bulleted list
> - Nested \`inline code\` sample: use the \`CALL()\` function with your token
> - Third item checking overall text legibility at length
>   - Sub-item one under a nested unordered list
>   - Sub-item two, also nested, checking contrast depth
>
> Visit [an example link](https://example.com) to confirm link color is accessible.

> [!WARNING]
> **This is a bold WARNING intro — should be clearly legible against the warning background.**
>
> | Step | Action | Deadline |
> |------|--------|----------|
> | 1 | Backup database | Before migration |
> | 2 | Run migrations | During window |
> | 3 | Verify integrity | Immediately after |
>
> - **Do not skip** the integrity check at the end
> - If the table reports \`MISMATCH\`, rollback and retry
> - Contact support with the output of \`status --verbose\`

> [!SUCCESS]
> **Deployment completed successfully.** All checks passed.
>
> | Region | Status | Latency |
> |--------|--------|---------|
> | Mumbai (BOM) | ✅ Healthy | 38 ms |
> | Singapore (SIN) | ✅ Healthy | 62 ms |
> | Frankfurt (FRA) | ✅ Healthy | 141 ms |
>
> - **Rollback readiness**: verified (cold spare online)
> - **DNS propagation**: all 42 PoPs updated
> - **Cache purge**: completed in 3.2s across the CDN
`;

export default function CalloutTestPage() {
  return (
    <main className="min-h-screen w-full py-16 px-6" style={{ backgroundColor: "#050A14" }}>
      <div className="max-w-4xl mx-auto">
        <header className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
            Visual Regression Test
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Callout Component Audit
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-2xl">
            Verifying that all five callout kinds render nested markdown (bold text, tables,
            bulleted lists, inline code, and links) with proper color-scheme isolation — no
            white text bleeding through from the dark <code className="text-[#A5B4FC]">prose-invert</code> theme.
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Part 1 — All five kinds, rendered directly
            </h2>
            <span className="text-white/40 text-sm">5 x nested-content test</span>
          </div>

          <div className="space-y-10">
            {(
              [
                { kind: "info", title: "Informational notice" },
                { kind: "tip", title: "Pro tip" },
                { kind: "warning", title: "Heads up — warning" },
                { kind: "danger", title: "Critical — do not ignore" },
                { kind: "success", title: "Everything passed" },
              ] as const
            ).map(({ kind, title }) => (
              <div key={kind} className="article prose prose-invert prose-lg max-w-2xl mx-auto w-full">
                <Callout kind={kind} title={title}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {TEST_NESTED_MD}
                  </ReactMarkdown>
                </Callout>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Part 2 — Parsed from markdown via ArticleBody
            </h2>
            <span className="text-white/40 text-sm">
              blockquote <code className="text-[#A5B4FC]">[!INFO/WARNING/SUCCESS]</code>
            </span>
          </div>

          <ArticleBody content={calloutMarkdownArticle} />
        </section>

        <footer className="mt-24 pt-10 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            If every element inside every callout above is fully legible (no white or
            near-white text anywhere), the isolation system is working. ✅
          </p>
        </footer>
      </div>
    </main>
  );
}
