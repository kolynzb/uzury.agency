import type {StructureResolver} from 'sanity/structure'
import {RiSettings5Line} from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import { RiQuillPenLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { IoOptionsOutline } from "react-icons/io5";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// https://www.sanity.io/docs/structure-builder-typical-use-cases#segmented-content
export const structure: StructureResolver = (S) => {

    const portfolioListItem =   S.listItem()
        .title('Portfolio')
        .icon(FaNetworkWired)
        .child(
                S.list().title("Our Portfolio").items([
                    S.documentTypeListItem('caseStudy').title('Case Studies'),
                    S.documentTypeListItem('caseStudyCategory').title('Categories'),
                    S.documentTypeListItem('client').title('Clients'),
                    S.documentTypeListItem('testimonial').title('Testimonials'),
                ])
            )

    const blogListItem =  S.listItem()
        .title('Blog')
        .icon(RiQuillPenLine)
            .child(
                S.list().title("Our Blog").items([
                    S.documentTypeListItem('post').title('Posts'),
                    S.documentTypeListItem('blogCategory').title('Categories'),
                    S.documentTypeListItem('series').title('Series'),
                    S.documentTypeListItem('author').title('Authors'),
                ])
            )

        const companyListItem = S.listItem()
        .title('Company')
            .icon(BsBuildings)
        .child(
            S.list().title("Our Company").items([
                S.documentTypeListItem('accolade').title('Accolades'),
                S.documentTypeListItem('career').title('Careers'),
                S.documentTypeListItem('faq').title('FAQs'),
                S.documentTypeListItem('partner').title('Partners'),
                S.documentTypeListItem('event').title('Events'),
                S.documentTypeListItem('team').title('Team Members'),
                S.documentTypeListItem('service').title('Services'),
            ])
        )
    const otherListItem =  S.listItem()
        .title('Other')
        .icon(SlOptionsVertical)
        .child(
            S.list().title("Other").items([
                ...S.documentTypeListItems().filter(
                    (item) => item.getId() && !['post', 'blogCategory', 'author','series','client', 'caseStudyCategory', 'caseStudy','testimonial','accolade','career','faq','partner','event','team','service','settings'].includes(item.getId()!),
                ),
            ])
        )

    const siteSettings = S.listItem()
        .title("Global Settings")
        .icon(IoOptionsOutline)
        .child(S.editor().schemaType("settings").documentId("settings"));

    return  S.list()
    .title('CMS')
      .items([
          portfolioListItem,
          S.divider(),
          blogListItem,
          S.divider(),
          companyListItem,
          S.divider(),
          otherListItem,
          S.divider(),
          siteSettings
      ])
}