import type {DefaultDocumentNodeResolver} from "sanity/desk";
import PostPreview from "./post-preview";
import CaseStudyPreview from "./case-study-preview";

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, {schemaType}) => {
    if (schemaType === "post") {
      return S.document().views([S.view.form(), S.view.component(PostPreview).title("Preview Post")]);
    }

    if (schemaType === "caseStudy") {
      return S.document().views([S.view.form(), S.view.component(CaseStudyPreview).title("Preview Case Study")]);
    }

    return S.document().views([S.view.form()]);
  };
};
