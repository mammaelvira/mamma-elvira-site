export default () => groq`*[_type == "events" && isActive == true]{
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
  
  performerName,
  performerLink
} | order(datetimeStart)`
