export default () => groq`*[_type == "recipes" && isActive == true]{
  _id,
  title,
  image,
  description
}`
