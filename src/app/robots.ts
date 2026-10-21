import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/bedankt", "/intake/bedankt", "/challenge/bedankt", "/actie/golden-ticket/bedankt"],
    },
    sitemap: "https://rickvianen.nl/sitemap.xml",
  };
}
