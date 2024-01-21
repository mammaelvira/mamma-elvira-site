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

export interface MammaElviraSanityEvent {
  _id: string
  _updatedAt: string
  path: string
  ogImage: string
  ogDescription: string
  title: string
  isSoldout: boolean
  activity: {
    path: string
    place: string
    name: string
    payoff: string
    colorValue: { hex: string }
    street: string
    streetNumber: string
    city: string
    cap: string
  }
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  datetimeStart: string
  datetimeEnd: string
  referenceEmail: string
  referenceName: string
  referencePhone: string
  description: []
  program?: []
  performers?: Array<{ _type: string; name: string; link: string; bioText: [] }>
}
