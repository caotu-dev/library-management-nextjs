import { AppConfig } from "./app";
import { Metadata } from "next/types";

export const SEODefaultConfig: Metadata = {
    generator: AppConfig.APP_NAME,
    applicationName: AppConfig.APP_NAME,
    metadataBase: new URL(AppConfig.APP_URL ?? ""),
    title: AppConfig.APP_NAME,
    description: "Look, books everywhere everytime",
    keywords: ["Books", "Library", "Books Heaven"],
    icons: ["/favicon.ico"]
}