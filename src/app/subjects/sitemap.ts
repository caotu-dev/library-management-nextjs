import { AppConfig } from '@/core/constants/app'
import { RouterConfig } from '@/core/constants/router'
import { Subjects } from '@/core/constants/subject'
import CommonUtils from '@/shared/utils/common.util';
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const listSubjects = [...Subjects];
    return listSubjects.map(subject => {
        const slug = CommonUtils.toSlug(subject);
        const url = `${AppConfig.APP_URL}${RouterConfig.SUBJECT}/${slug}`;
        return {
            url: url,
            lastModified: new Date(),
            priority: 1,
        }
    })
}