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
                          S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('blogCategory').title('Categories'),
      S.documentTypeListItem('series').title('Series'),
      S.documentTypeListItem('author').title('Authors'),
                      ])
              ),
          S.divider(),
          S.listItem()
              .title('Blog')
              .child(
                  S.list().title("Our blog").items([
                      S.documentTypeListItem('caseStudy').title('Case Studies'),
        S.documentTypeListItem('caseStudyCategory').title('Categories'),
        S.documentTypeListItem('client').title('Clients'),
        S.documentTypeListItem('testimonial').title('Testimonials'),
                  ])
              ),
          S.divider(),
          S.listItem()
              .title('Company')
              .child(
                  S.list().title("Our Company").items([
                      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'blogCategory', 'author','series','client', 'caseStudyCategory', 'caseStudy','testimonial'].includes(item.getId()!),
      ),
                  ])
              ),
      ])