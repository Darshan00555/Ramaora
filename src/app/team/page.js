import Image from 'next/image';

import CTABand from '@/components/CTABand';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/home/Reveal';
import { pageMetadata } from '@/lib/seo';
import { ORG, SITE_URL } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Our Team',
  description:
    'Meet the directors and the people behind Ramaora — developers, designers, marketers, SEO specialists and content creators who build with empathy and strategy.',
  path: '/team',
  keywords: ['ramaora team', 'directors', 'web development team', 'marketing team'],
});

const DIRECTORS = [
  {
    name: 'Ruksha Razdan',
    role: 'Director · People, Culture & Execution',
    photo: '/ruksha-razdan.jpeg',
    linkedin: 'https://www.linkedin.com/in/ruksha-razdan-29a80b312/',
    quote: 'Rest at the end, not in the middle.',
    bio: 'With a strong foundation in Human Resources, Business Development and Project Management, Ruksha brings strategic thinking and human-centric leadership to build brands with intention and impact. She believes sustainable growth begins with strong relationships — within teams, with clients, and with the vision behind every brand. Her leadership is rooted in empathy, accountability and consistency.',
    // TODO: add verified experience/education once supplied (see /team notes).
    highlights: [],
  },
  {
    name: 'Muninder Mani',
    role: 'Director · Technology, Systems & Digital Growth',
    photo: '/muninder-mani.png',
    linkedin: 'https://www.linkedin.com/in/muninder-mani-69039126b/',
    quote: 'We have God on our side.',
    bio: 'Muninder leads the technology and digital-growth vision at Ramaora, building complete digital ecosystems that help startups scale with clarity and structure. From custom web applications and ERP systems to e-commerce architecture, performance marketing and lead-generation systems, he combines technology, marketing and business strategy into interconnected systems designed to last.',
    // TODO: add verified experience/education once supplied (see /team notes).
    highlights: [],
  },
];

const DEPARTMENTS = [
  {
    title: 'Frontend Developers',
    desc: 'Responsive, high-performance and visually engaging interfaces — seamless experiences that combine functionality, speed and clean design across every device.',
    members: ['Aarav Mehta', 'Kiara Sethi', 'Vivaan Kapoor', 'Rhea Malhotra', 'Kabir Arora'],
  },
  {
    title: 'Backend Developers',
    desc: 'Secure, scalable and efficient systems — server-side architecture, APIs, database management and optimization that keep business operations reliable.',
    members: ['Dev Malhotra', 'Ishaan Verma', 'Aditi Khanna', 'Reyansh Batra', 'Tanvi Oberoi'],
  },
  {
    title: 'UI/UX Designers',
    desc: 'Research-driven, user-centered design that balances creativity with function — seamless journeys and refined interfaces that enhance engagement.',
    members: ['Anaya Chopra', 'Dhruv Nanda', 'Mira Ahuja', 'Arjun Luthra', 'Sana Wadhwa'],
  },
  {
    title: 'Social Media Managers',
    desc: 'Content planning, audience engagement and brand communication across Instagram, LinkedIn, Meta and emerging social platforms.',
    members: [
      'Naina Bhasin',
      'Yash Sehgal',
      'Tara Gulati',
      'Harsh Vohra',
      'Ira Malhotra',
      'Rudra Jain',
      'Simran Chawla',
      'Kunal Suri',
      'Meher Kohli',
      'Abeer Saxena',
    ],
  },
  {
    title: 'Google & Meta Ads Managers',
    desc: 'ROI-driven ad campaigns, lead-generation systems, conversion optimization and scalable paid-growth strategies.',
    members: ['Ritik Anand', 'Jiya Narang', 'Karan Puri', 'Esha Bedi', 'Neil Sachdeva'],
  },
  {
    title: 'SEO Specialists',
    desc: 'Technical SEO, search visibility, keyword strategy and data-driven optimization for long-term organic growth.',
    members: ['Pranav Dhingra', 'Aisha Taneja'],
  },
  {
    title: 'Content Creators',
    desc: 'Creative storytelling, short-form content, brand campaigns and copywriting that connects with the right audience.',
    members: ['Lavanya Arora', 'Rohan Juneja', 'Myra Khurana', 'Advik Sharma', 'Siya Talwar'],
  },
];

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ name }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f26b1d] to-[#c2410c] text-xs font-black text-white shadow-[0_6px_16px_-6px_rgba(194,65,12,0.6)]">
      {initials(name)}
    </span>
  );
}

export default function TeamPage() {
  // Person schema ties each director to their real LinkedIn profile (sameAs),
  // which helps search engines connect the identity and can surface knowledge panels.
  const peopleLd = {
    '@context': 'https://schema.org',
    '@graph': DIRECTORS.map((d) => ({
      '@type': 'Person',
      name: d.name,
      jobTitle: d.role.split('·')[0].trim(),
      image: `${SITE_URL}${d.photo}`,
      url: `${SITE_URL}/team`,
      sameAs: [d.linkedin],
      worksFor: { '@type': 'Organization', name: ORG.name, url: SITE_URL },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleLd) }}
      />
      <PageHeader
        eyebrow="Our Team"
        title="The people behind"
        highlight="the work."
        subtitle="A team that builds with empathy, thinks with strategy and creates with purpose — because behind every project is a person who genuinely cares."
      />

      {/* Directors */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Directors
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {DIRECTORS.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <div className="card-lift flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
                  <div className="flex items-center gap-5">
                    <Image
                      src={f.photo}
                      alt={`${f.name} — ${f.role}`}
                      width={160}
                      height={160}
                      className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-[0_10px_24px_-8px_rgba(23,19,16,0.45)] ring-2 ring-[#f26b1d]/30 sm:h-24 sm:w-24"
                    />
                    <div className="min-w-0">
                      <h3 className="text-xl font-extrabold tracking-tight text-[#171310]">
                        {f.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-500">{f.role}</p>
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${f.name} on LinkedIn`}
                        className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-600 transition-colors hover:border-[#f26b1d]/50 hover:text-[#c2410c]"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <p className="mt-6 border-l-2 border-[#f26b1d] pl-4 text-lg font-semibold text-[#171310] italic">
                    “{f.quote}”
                  </p>
                  <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">{f.bio}</p>

                  {f.highlights?.length ? (
                    <ul className="mt-5 space-y-2 border-t border-neutral-200 pt-5">
                      {f.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#f26b1d] to-[#c2410c]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#171310] sm:text-4xl">
              A full team, <span className="text-brand-gradient">not a freelancer network.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Specialists across every discipline you need to launch, grow and scale.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {DEPARTMENTS.map((dept, i) => (
              <Reveal key={dept.title} delay={i * 60}>
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold tracking-tight text-[#171310]">
                          {dept.title}
                        </h3>
                        <span className="rounded-full bg-[#f26b1d]/10 px-2.5 py-0.5 text-xs font-bold text-[#c2410c]">
                          {dept.members.length}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{dept.desc}</p>
                    </div>
                    <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                      {dept.members.map((m) => (
                        <div
                          key={m}
                          className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2.5"
                        >
                          <Avatar name={m} />
                          <span className="text-sm font-semibold text-[#171310]">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want to build with us?"
        subtitle="Whether you’re hiring us or want to join the team, we’d love to hear from you."
        primaryLabel="Work with us"
      />
    </>
  );
}
