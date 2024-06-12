import { AppConfig } from '@/core/constants/app'
import { RouterConfig } from '@/core/constants/router'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/'],
      },
    ],

    sitemap: [
      AppConfig.APP_URL + '/sitemap.xml',
      AppConfig.APP_URL + `${RouterConfig}/sitemap.xml`,
      AppConfig.APP_URL + `${RouterConfig}/sitemap.xml`
    ],
  }
}