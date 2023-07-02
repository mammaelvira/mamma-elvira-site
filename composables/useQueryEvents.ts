export default () => groq`*[_type == "events" && isActive == true]{
  _id,
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
  description
} | order(datetimeStart)`
