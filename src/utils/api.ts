import { sanityClient } from "sanity:client";

// List of links for homepage and footer of project pages
export async function getProjectList() {
  const query = `*[_type == "globalContent"][0] {
  "projectNavItems": projectListItems[] {
      title,
      subtitle,
      external,
      url
    }
  }`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getHome() {
  const query = `*[_type == "globalContent"][0] {
    "projectNavItems": projectListItems[] {
      title,
      subtitle,
      external,
      url
    },
    "contactItems": contactItems[] {
      label,
      url
    },
    "bio": homeContent
  }`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getProjects() {
  const query = `*[_type == "project"]  {
    title,
    slug,
    body,
    technicalItems,
    strategyItems,
    "actionItems": actionItems[] {
      url,
      label,
      new_window
    },
    primaryImage
  }`;
  return paramMap(await sanityClient.fetch(query));
}

function paramMap(items: any[]) {
  return items.map((item: any) => {
    return {
      params: {
        slug: item.slug?.current || "",
      },
      props: { ...item },
    };
  });
}
