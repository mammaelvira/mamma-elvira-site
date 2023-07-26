/**
 * Default behaviour returns all the active events
 * @param options = {singleEvent: boolean}
 * @default singleEvent = false
 * @returns a specific event passed for $eventpath
 */

export default (
  {
    singleEvent,
  }: {
    singleEvent?: boolean
  } = { singleEvent: false },
) => groq`*[_type == "events" && ${
  singleEvent ? 'path == $eventpath' : 'isActive == true'
} ]
{
  _id,
  _updatedAt,
  path,

  "ogImage": ogImage.asset -> url,
  ogTitle,
  ogDescription,
  
  title,
  isSoldout,
  activity -> {
    name,
    payoff,
    path,

    place,
    street, streetNumber, cap, city,

    colorValue { hex }
  },
  image,
  datetimeStart,
  datetimeEnd,
  
  referenceEmail,
  referenceName,
  referencePhone,

  description,

  program,

  performers
} | order(datetimeStart)`
