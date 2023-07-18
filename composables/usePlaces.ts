interface PageDetails {
  name: string
  nameShort?: string
  path: string
  payoff?: string
  place?: string
  color?: string
  telephone: string
  email: string
  address: Address

  showInNav?: boolean
  iconClass?: string
  videoUrl?: string
  imageUrl?: string

  menuUrl?: string
  googleMapsUrl?: string

  instagramUrl?: string
  facebookUrl?: string
}

interface Address {
  street: string
  streetNumber: string
  cap: string
  city: string
}

export default (): PageDetails[] => [
  {
    name: 'Mamma Elvira Enoteca',
    nameShort: 'Enoteca',
    path: '/enoteca',
    payoff: 'Assaggi di Puglia',
    color: 'me-red',
    place: 'Santa Croce',
    iconClass: 'i-game-icons-wine-bottle',
    telephone: '+393491133126',
    email: 'enoteca@mammaelvira.com',
    address: {
      street: 'Via Umberto I',
      streetNumber: '19',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',
    imageUrl: '~/assets/images/me-enoteca_ext-01.jpg',

    menuUrl: 'https://disv.it/MammaElviraEnoteca',
    instagramUrl: 'https://www.instagram.com/mamma_elvira_enoteca',
    facebookUrl: 'https://www.facebook.com/MammaElvira',
  },
  {
    name: 'La Cucina di Mamma Elvira',
    path: '/la-cucina',
    payoff: 'Osteria Contemporanea',
    place: 'Il Castello',
    iconClass: 'i-game-icons-fork-knife-spoon',
    color: 'me-basil',
    videoUrl:
      'https://dbxquyucxdrdmodeinnw.supabase.co/storage/v1/object/sign/mammaelvira-cdn/videos/me_la-cucina_moka-cantuccini.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYW1tYWVsdmlyYS1jZG4vdmlkZW9zL21lX2xhLWN1Y2luYV9tb2thLWNhbnR1Y2NpbmkubXA0IiwiaWF0IjoxNjgxMjI2MDMwLCJleHAiOjE3MTI3NjIwMzB9.tQcOSztegIBjCkwHeqtfIiWtr-Cqe8qzASMQAyJzy08&t=2023-04-11T15%3A13%3A50.390Z',
    telephone: '+393315795127',
    email: 'lacucina@mammaelvira.com',
    address: {
      street: 'Via Ludovico Maremonti',
      streetNumber: '33',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',

    menuUrl: 'https://disv.it/Cucina',
    instagramUrl: 'https://www.instagram.com/la_cucina_di_mamma_elvira',
    facebookUrl: 'https://www.facebook.com/LaCucinaDiMammaElvira',
  },
  {
    name: 'La Cucina De Coste',
    path: '/la-cucina-de-coste',
    payoff: 'Osteria Contemporanea',
    place: 'Il Castello',
    iconClass: 'i-game-icons-fork-knife-spoon',
    color: 'me-mint',
    telephone: '+393315795127',
    email: 'decoste@mammaelvira.com',
    address: {
      street: 'Via Ludovico Maremonti',
      streetNumber: '41',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',

    menuUrl: 'https://disv.it/Cucina',
    instagramUrl: 'https://www.instagram.com/lacucinadecoste',
    facebookUrl: 'https://www.facebook.com/lacucinadecoste',
  },
  {
    name: 'Corte dei Pandolfi',
    path: '/corte-dei-pandolfi',
    payoff: 'Oyster House',
    place: 'Il Duomo',
    iconClass: 'i-custom:corte-dei-pandolfi',
    color: 'me-peach',
    telephone: '+393661412692',
    email: 'cortedeipandolfi@mammaelvira.com',
    address: {
      street: 'Corte dei Pandolfi',
      streetNumber: '3',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',

    menuUrl: 'https://disv.it/CortePandolfi',
    instagramUrl: 'https://www.instagram.com/corte_dei_pandolfi',
    facebookUrl: 'https://www.facebook.com/cortedeipandolfilecce',
  },
  {
    name: 'Casa Mamma Elvira',
    path: '/casa',
    payoff: 'A Casa, lontano da Casa',
    place: 'Il Castello',
    iconClass: 'i-game-icons-bed',
    color: 'me-lapis',
    videoUrl:
      'https://dbxquyucxdrdmodeinnw.supabase.co/storage/v1/object/sign/mammaelvira-cdn/videos/me_la-casa_balcony-coffee.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYW1tYWVsdmlyYS1jZG4vdmlkZW9zL21lX2xhLWNhc2FfYmFsY29ueS1jb2ZmZWUubXA0IiwiaWF0IjoxNjgxMjI2NjMyLCJleHAiOjE3MTI3NjI2MzJ9.0_rULr4yY05xH9YfkL-WPxsgXrhpVP5SWUFYXEjVWJ8&t=2023-04-11T15%3A23%3A52.497Z',
    telephone: '+393491225063',
    email: 'casa@mammaelvira.com',
    address: {
      street: 'Corte San Cataldo',
      streetNumber: '8-12',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',

    instagramUrl: 'https://www.instagram.com/casa_mamma_elvira',
    facebookUrl: 'https://www.facebook.com/CasaMammaElvira',
  },

  {
    name: 'Picnic Experience Lecce',
    path: '/picnic-experience',
    payoff: "A Regola d'Arte",
    place: '',
    iconClass: 'i-game-icons-basket',
    color: 'me-lavender',
    videoUrl: '',
    telephone: '+393761798201',
    email: 'picnic@delicatessenlecce.com',
    address: {
      street: 'Via San Pietro in Lama',
      streetNumber: 'traversa Via A. Mazzotta',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: 'https://goo.gl/maps/F8TuStsXtyQPNsRM7',

    instagramUrl: '',
    facebookUrl: '',
  },
]
