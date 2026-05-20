import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, schema }) {
  const siteTitle = 'Bimbel Junior';
  const fullTitle = title ? `${title} — ${siteTitle}` : `${siteTitle} — Bimbingan Belajar SD, SMP, SMA di Tanjung Priok Jakarta Utara`;
  const defaultDescription = 'Bimbel Junior adalah tempat les terpercaya di Tanjung Priok, Jakarta Utara untuk SD, SMP, dan SMA. Rating 4.9⭐, pengajar M.Pd., kelas kecil. Hubungi: 0812-1166-3711';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Default LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "EducationalOrganization"],
          "name": "Bimbel Junior",
          "description": defaultDescription,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Warakas 8 Gg. 10 No.34, RT.13/RW.5",
            "addressLocality": "Tanjung Priok",
            "addressRegion": "Jakarta Utara",
            "postalCode": "14370",
            "addressCountry": "ID"
          },
          "telephone": "+62-812-1166-3711",
          "openingHours": "Mo-Th 15:00-21:00",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.1210449,
            "longitude": 106.8769387
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "50"
          }
        })}
      </script>
    </Helmet>
  );
}
