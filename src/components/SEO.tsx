import { Helmet } from 'react-helmet-async';
import { SEOConfig, defaultSEO } from '../utils/seo';

interface SEOProps {
  config?: Partial<SEOConfig>;
}

const SEO: React.FC<SEOProps> = ({ config }) => {
  const seoConfig = { ...defaultSEO, ...config };
  const currentUrl = config?.url || window.location.href;

  return (
    <Helmet>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      {seoConfig.keywords && <meta name="keywords" content={seoConfig.keywords} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={seoConfig.type || 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      {seoConfig.image && <meta property="og:image" content={seoConfig.image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      {seoConfig.image && <meta name="twitter:image" content={seoConfig.image} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;

