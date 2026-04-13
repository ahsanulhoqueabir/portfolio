import AboutPageContent from "@/components/about-page";
import { getSiteContext } from "@/lib/site-context";

export default async function AboutPage() {
  const siteContext = await getSiteContext();
  const { experiences, values, aboutStats } = siteContext.about;

  return (
    <AboutPageContent
      experiences={experiences}
      values={values}
      aboutStats={aboutStats}
    />
  );
}
