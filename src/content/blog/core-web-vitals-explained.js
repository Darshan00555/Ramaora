const post = {
  slug: 'core-web-vitals-explained',
  title: 'Core Web Vitals Explained: How to Pass LCP, INP & CLS',
  description:
    'Core Web Vitals explained simply — what LCP, INP and CLS mean, why they affect SEO and rankings, and exactly how to pass each one on your website.',
  primaryKeyword: 'core web vitals',
  secondaryKeywords: [
    'lcp inp cls',
    'pass core web vitals',
    'page experience seo',
    'improve core web vitals',
    'google page experience',
  ],
  keywords: [
    'core web vitals',
    'lcp inp cls',
    'pass core web vitals',
    'page experience seo',
    'improve core web vitals',
  ],
  category: 'Web',
  date: '2026-06-16',
  updated: '2026-07-14',
  readTime: '8 min read',
  excerpt:
    'Three metrics capture how your page feels to real users — and Google uses them for ranking. Here is what LCP, INP and CLS mean and how to pass all three.',
  faq: [
    {
      q: 'What are the three Core Web Vitals?',
      a: 'They are Largest Contentful Paint (LCP) for loading, Interaction to Next Paint (INP) for responsiveness, and Cumulative Layout Shift (CLS) for visual stability. Together they measure how fast, responsive and stable your page feels to a real user.',
    },
    {
      q: 'Do Core Web Vitals affect SEO?',
      a: 'Yes. They are part of Google page experience signals and can influence rankings, especially as a tie-breaker between pages of similar relevance and quality. They also affect bounce and conversion, which matter regardless of rankings.',
    },
    {
      q: 'What is a good LCP score?',
      a: 'Aim for a Largest Contentful Paint under 2.5 seconds. LCP measures how long the main content, usually the hero image or headline, takes to appear. Optimising your largest image and server response time are the biggest levers.',
    },
    {
      q: 'How do I fix a poor INP score?',
      a: 'Interaction to Next Paint should be under 200 milliseconds. Poor INP almost always comes from heavy JavaScript blocking the main thread, so break up long tasks, defer non-critical scripts, and remove code you do not need.',
    },
    {
      q: 'What causes Cumulative Layout Shift?',
      a: 'CLS is caused by elements moving unexpectedly as the page loads — images without set dimensions, ads or embeds pushing content down, or elements injected above existing ones. Reserve space for these and always set width and height on media to keep CLS low.',
    },
    {
      q: 'How do I measure Core Web Vitals?',
      a: 'Use PageSpeed Insights for both lab and real-user field data, the Core Web Vitals report in Google Search Console for site-wide issues, and Lighthouse in Chrome while developing. Prioritise the field data, since it reflects your actual visitors.',
    },
  ],
  body: `
<p>Core Web Vitals are Google attempt to measure how a page actually feels to a real person — how fast it loads, how quickly it responds, and how stable it is while loading. They are part of Google ranking signals, and just as importantly, they correlate with the frustration that makes users leave. Here is what each one means and exactly how to pass it, without needing to be a performance engineer.</p>

<h2>Largest Contentful Paint (LCP): loading</h2>
<p>LCP measures how long it takes for the main content of a page to appear — usually the hero image or headline. Aim for under 2.5 seconds. The biggest wins come from optimising and properly sizing your largest image, improving server response time so the page starts arriving sooner, and removing render-blocking resources that delay the important content. On most sites, fixing the hero image alone moves LCP from failing to passing.</p>

<h2>Interaction to Next Paint (INP): responsiveness</h2>
<p>INP measures how quickly your page responds when someone interacts — a tap, a click, a keypress. Aim for under 200 milliseconds. Poor INP almost always comes from heavy JavaScript hogging the main thread, so the browser cannot respond quickly. Break up long tasks into smaller pieces, defer non-critical scripts, and delete code you are not using. A responsive page feels alive; a laggy one feels broken even when it works.</p>

<h2>Cumulative Layout Shift (CLS): stability</h2>
<p>CLS measures how much the page unexpectedly moves while loading — the familiar annoyance of tapping a button just as an ad pushes it away. Aim for under 0.1. Fix it by always setting width and height on images and embeds, reserving space for anything that loads late, and avoiding inserting elements above content that is already visible. Stability is invisible when you get it right and infuriating when you get it wrong.</p>

<h2>How to measure them</h2>
<ul>
<li><strong>PageSpeed Insights</strong> for both lab diagnostics and real-user field data.</li>
<li><strong>The Core Web Vitals report in Search Console</strong> to see issues across your whole site.</li>
<li><strong>Lighthouse in Chrome DevTools</strong> while you build and iterate.</li>
</ul>

<h2>Lab data is not the finish line</h2>
<p>A perfect score in a lab test does not guarantee a good experience for real users on real devices and networks. Lab data is a controlled snapshot; field data reflects the messy reality of actual visitors. When they disagree, prioritise the field data in Search Console — that is what reflects your customers and what Google actually uses to judge your pages.</p>

<h2>Why passing them is worth the effort</h2>
<p>Beyond rankings, Core Web Vitals map closely onto the things that make people stay and buy: fast loading, snappy interaction, and a stable layout. Pages that pass tend to have lower bounce and higher conversion, so the work pays off even where rankings are not decided by vitals alone. It is one of the rare optimisations that helps users and search engines at the same time.</p>

<h2>Pass them, then keep passing them</h2>
<p>Web Vitals drift as you add features, scripts and images over time. Build them into your process: test after major changes, hold a performance budget, and treat passing scores as a standard to maintain rather than a milestone to hit once and forget. A page that passes today can quietly fail in six months, so make good vitals a habit, not a one-off project.</p>
`,
};

export default post;
