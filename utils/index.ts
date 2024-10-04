import { DateTime } from "luxon";

export const slugify = function (text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

export function removeDuplicates(originalArray: any, prop: any) {
  var newArray: any = [];
  var lookupObject: any = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}

export const SortingByDate = function (posts: any) {
  return posts.sort((post1: any, post2: any) => {
    const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
    return 44;
  });
};

export function calculateReadingTime(text: string): string {
  // Average reading speed (words per minute)
  const wordsPerMinute = 200;

  // Calculate the number of words in the text
  const wordCount = text.split(/\s+/).length;

  // Calculate the reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  // Format the reading time as "X minute Read" or "1 minute Read" if it's very short
  return `${readingTime} min read`;
}
