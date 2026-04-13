import AboutPageContent from "@/components/about-page/about-page-content";
import { getSiteContext } from "@/lib/site-context";

export default async function AboutPage() {
  const siteContext = await getSiteContext();
  const { experiences, values, aboutStats } = siteContext.about;
  const { cvDownloadUrl } = siteContext.home;

  return (
    <AboutPageContent
      experiences={experiences}
      values={values}
      aboutStats={aboutStats}
      cvDownloadUrl={cvDownloadUrl}
    />
  );
}
