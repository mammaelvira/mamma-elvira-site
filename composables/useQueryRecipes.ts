export default () => groq`*[_type == "recipes"]{
  _id,
  title,
  image,
  description
}`
