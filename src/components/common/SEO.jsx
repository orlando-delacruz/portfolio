import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  path = "",
  image = "/images/preview.webp",
}) => {
  const url = `https://orlandodelacruz.vercel.app${path}`;
  const imageUrl = image?.startsWith("http")
    ? image
    : `https://orlandodelacruz.vercel.app${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;