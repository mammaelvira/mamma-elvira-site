export default () => groq`*[_type == 'images'
  && imagesSectionSlug.current == 'index-carousel']
  [0].imagesList`
