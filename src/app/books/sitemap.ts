import { AppConfig } from "@/core/constants/app";
import { RouterConfig } from "@/core/constants/router";
import { Subjects } from "@/core/constants/subject"
import bookApi from "@/shared/services/api/book.api";
import CommonUtils from "@/shared/utils/common.util"
import { MetadataRoute } from "next/types"

// Google's limit is 50,000 URLs per sitemap
const maxItems = 50000;

async function getBooks() {
    const listBooks: any = [];
    for (let i = 0; i < Subjects.length; i++) {
        const subject = Subjects[i];
        const request = {
            offset: 0,
            limit: maxItems
        }
        const booksBySubject: any = await bookApi.getBySubjects(subject, request);
        if(booksBySubject?.length > 0) {
            listBooks.concat(booksBySubject);
        }
        if(listBooks.length === maxItems) break;
    }
    return listBooks;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const listBooks = await getBooks();
    return listBooks.map((book: any) => {
        const slug = CommonUtils.toSlug(book?.title);
        const url = `${AppConfig.APP_URL}${RouterConfig.BOOKS}/${slug}`;
        return {
            url: url,
            lastModified: new Date(),
            priority: 1,
        }
    })
}