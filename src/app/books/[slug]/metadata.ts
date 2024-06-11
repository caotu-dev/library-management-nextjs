import { AppConfig } from "@/core/constants/app";
import { RouterConfig } from "@/core/constants/router";
import { SEODefaultConfig } from "@/core/constants/seo";
import bookApi from "@/shared/services/api/book.api";
import CommonUtils from "@/shared/utils/common.util";
import { Metadata } from "next/types";

export async function getPageMetadata(slug: string): Promise<Metadata> {
    const id = CommonUtils.slugToID(slug);

    const book = await bookApi.getById(id);
    const pageUrl = AppConfig.APP_URL + RouterConfig.SEARCH + '/' + slug;

    return {
        ...SEODefaultConfig,
        title: book.title,
        description: book?.description?.value,
        publisher: book.publisher,
        // Facebook
        openGraph: {
            title: book.title,
            description: book?.description?.value,
            url: pageUrl,
            siteName: "Book Heaven - Book : " + book.title,
            images: [
                {
                    url: book.thumbnail_small,
                    width: 50,
                    height: 80,
                },
                {
                    url: book.thumbnail_medium,
                    width: 200,
                    height: 300,
                },
                {
                    url: book.thumbnail_large,
                    width: 500,
                    height: 700,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}