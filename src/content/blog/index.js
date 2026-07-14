// Blog registry. Each post lives in its own file in this folder (easy to edit
// and to migrate to a CMS/backend later). Add a new post by creating a file and
// importing it into POSTS below.
import brandIdentityThatEarnsTrust from './brand-identity-that-earns-trust';
import contentMarketingForStartups from './content-marketing-for-startups';
import coreWebVitalsExplained from './core-web-vitals-explained';
import customCodedVsTemplateWebsites from './custom-coded-vs-template-websites';
import ecommerceStoreThatConverts from './ecommerce-store-that-converts';
import emailWhatsappAutomationEcommerce from './email-whatsapp-automation-ecommerce';
import highConvertingLandingPages from './high-converting-landing-pages';
import hiringFirstMarketingTeam from './hiring-first-marketing-team';
import leadGenerationStrategies2026 from './lead-generation-strategies-2026';
import localSeoGuideIndia from './local-seo-guide-india';
import marketingAnalyticsMetricsThatMatter from './marketing-analytics-metrics-that-matter';
import metaAdsVsGoogleAds from './meta-ads-vs-google-ads';
import mobileFirstDesign from './mobile-first-design';
import productDescriptionsThatSell from './product-descriptions-that-sell';
import redesignVsRebuildWebsite from './redesign-vs-rebuild-website';
import reduceCartAbandonment from './reduce-cart-abandonment';
import technicalSeoChecklist from './technical-seo-checklist';
import understandingRoas from './understanding-roas';
import uxDesignConversionTool from './ux-design-conversion-tool';
import websiteSpeedOptimizationGuide from './website-speed-optimization-guide';

export const AUTHOR = { name: 'Ramaora Team', url: '/team' };

export const POSTS = [
  customCodedVsTemplateWebsites,
  websiteSpeedOptimizationGuide,
  technicalSeoChecklist,
  ecommerceStoreThatConverts,
  understandingRoas,
  metaAdsVsGoogleAds,
  highConvertingLandingPages,
  contentMarketingForStartups,
  reduceCartAbandonment,
  localSeoGuideIndia,
  brandIdentityThatEarnsTrust,
  leadGenerationStrategies2026,
  uxDesignConversionTool,
  coreWebVitalsExplained,
  emailWhatsappAutomationEcommerce,
  mobileFirstDesign,
  redesignVsRebuildWebsite,
  marketingAnalyticsMetricsThatMatter,
  productDescriptionsThatSell,
  hiringFirstMarketingTeam,
];

// ---- helpers -------------------------------------------------------------
export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return POSTS.map((p) => p.slug);
}

export function getCategories() {
  return ['All', ...Array.from(new Set(POSTS.map((p) => p.category)))];
}

export function getRelatedPosts(slug, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCat = POSTS.filter((p) => p.slug !== slug && p.category === current.category);
  const others = POSTS.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCat, ...others].slice(0, limit);
}
