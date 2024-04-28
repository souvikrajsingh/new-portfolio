import { createClient } from "contentful";

const getContent = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: "cdn.contentful.com",
  });

  const getOpporunities = async () => {
    try {
      /* Fetch entries from Contentful that have the content type 'opportunities'
       Only select the 'fields' property of each entry */

      const entries = await client.getEntries({
        content_type: "blogs",
        select: "fields",
      });

      /* Map over the items in the entries
       For each item, extract the title, description, program, month, and image URL from the fields
       Return a new object with these properties */

      const sanitizedEntries = entries.items.map((items) => {
        const title = items.fields.title;
        const date = items.fields.date;
        const thumbnail = items.fields.thumbnail.fields.file.url;
        const content = items.fields.content;
        return {
          title,
          date,
          thumbnail,
          content,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching data : ${error}`);
    }
  };

  return { getOpporunities };
};

export default getContent;
