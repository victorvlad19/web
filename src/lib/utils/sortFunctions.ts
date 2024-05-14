import { Post } from "@/types";
import * as console from "node:console";

// sort by date
export const sortByDate = (array: Post[]) => {
  const sortedArray = array.sort((a: any, b: any) => {
    // Regular expression to match numbers in the title
    const regex = /\d+/g;
    const numberA = parseInt((a.frontmatter.title.match(regex) || [])[0] || '0');
    const numberB = parseInt((b.frontmatter.title.match(regex) || [])[0] || '0');
    return numberA - numberB;
  });
  console.log(sortedArray);
  return sortedArray;
};

// sort product by weight
export const sortByWeight = (array: any[]) => {
  const withWeight = array.filter(
    (item: { frontmatter: { weight: any } }) => item.frontmatter.weight,
  );
  const withoutWeight = array.filter(
    (item: { frontmatter: { weight: any } }) => !item.frontmatter.weight,
  );
  const sortedWeightedArray = withWeight.sort(
    (
      a: { frontmatter: { weight: number } },
      b: { frontmatter: { weight: number } },
    ) => a.frontmatter.weight - b.frontmatter.weight,
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};
