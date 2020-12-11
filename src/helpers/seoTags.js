import { NextSeo } from 'next-seo';
const siteName = 'colors.works';

export const makeTitle = (title) => `${title} | ${siteName}`;
export const makeDescription = (description) => `${description} - ${siteName}`;

export const SeoTags = ({ title, description, ...others }) => {
  const pageTitle = makeTitle(title);
  const pageDescription = makeDescription(description);

  return <NextSeo title={pageTitle} description={pageDescription} {...others} />;
};
