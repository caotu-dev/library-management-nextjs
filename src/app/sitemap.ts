import { AppConfig } from '@/core/constants/app'
import { RouterConfig } from '@/core/constants/router'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: AppConfig.APP_URL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: AppConfig.APP_URL + RouterConfig.SUBJECT,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: AppConfig.APP_URL + RouterConfig.BOOKS,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}