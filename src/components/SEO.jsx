import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Shreyas- Software Engineer</title>
      <meta name="description" content="Experienced software engineer specializing in full-stack development, cloud solutions, and scalable applications. Available for freelance projects." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Shreyas - Software Engineer & Freelance Developer" />
      <meta property="og:description" content="Experienced software engineer specializing in full-stack development, cloud solutions, and scalable applications." />
      <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Name - Software Engineer & Freelance Developer" />
      <meta name="twitter:description" content="Experienced software engineer specializing in full-stack development, cloud solutions, and scalable applications." />
      <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Your Name",
          "url": "https://yourwebsite.com",
          "jobTitle": "Software Engineer",
          "description": "Freelance software engineer specializing in full-stack development",
          "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "Cloud Computing",
            "Full Stack Development"
          ],
          "sameAs": [
            "https://github.com/shreyes19",
            "https://linkedin.com/in/shreyescodes"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;