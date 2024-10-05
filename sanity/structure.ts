import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// https://www.sanity.io/docs/structure-builder-typical-use-cases#segmented-content
export const structure: StructureResolver = (S) =>
  S.list()
    .title('CMS')
      .items([
          S.listItem()
              .title('Portfolio')
              .child(
                  S.list().title("Our Portfolio").items([
                      S.documentTypeListItem('caseStudy').title('Case Studies'),
                      S.documentTypeListItem('caseStudyCategory').title('Categories'),
                      S.documentTypeListItem('client').title('Clients'),
                      S.documentTypeListItem('testimonial').title('Testimonials'),
                  ])
              ),
          S.divider(),
          S.listItem()
              .title('Blog')
              .child(
                  S.list().title("Our blog").items([
                          S.documentTypeListItem('post').title('Posts'),
                          S.documentTypeListItem('blogCategory').title('Categories'),
                          S.documentTypeListItem('series').title('Series'),
                          S.documentTypeListItem('author').title('Authors'),
                  ])
              ),
          S.divider(),
          S.listItem()
              .title('Company')
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
              ),
          S.divider(),
          S.listItem()
              .title('Other')
              .child(
                  S.list().title("Other").items([
                      ...S.documentTypeListItems().filter(
                          (item) => item.getId() && !['post', 'blogCategory', 'author','series','client', 'caseStudyCategory', 'caseStudy','testimonial','accolade','career','faq','partner','event','team','service'].includes(item.getId()!),
                          ),
                  ])
              ),
      ])