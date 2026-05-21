import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, schema }) {
  const siteTitle = 'Junior Bimbel';
  const fullTitle = title ? `${title} — ${siteTitle}` : `${siteTitle} — Bimbingan Belajar SD, SMP, SMA di Tanjung Priok Jakarta Utara`;
  const defaultDescription = 'Junior Bimbel adalah lembaga bimbingan belajar terpercaya di Tanjung Priok, Jakarta Utara untuk SD, SMP, dan SMA. Cerdaskan Generasi Bangsa. Rating 4.9⭐, pengajar bersertifikat. Hubungi: 0812-1166-3711';

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
          "name": "Junior Bimbel",
          "alternateName": "Bimbel Junior",
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
          "openingHours": ["Mo-Fr 09:00-10:30", "Mo-Fr 16:00-17:30", "Mo-Fr 18:30-20:00"],
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
