import { Metadata } from "next";
import { siteConfig } from "./siteConfig";

export function defaultMetadata(
    title?: string,
    description?: string
): Metadata {
    return {
        title: title
            ? `${title} | ${siteConfig.name}`
            : siteConfig.name,
        description: description ?? siteConfig.description,
        openGraph: {
            title: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            siteName: siteConfig.name,
            type: "website",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}
