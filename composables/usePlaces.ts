
export interface PageDetails {
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

  bookingUrl?: string
  menuUrl?: string
  menuPdf?: string
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
  // ENOTECA
  {
    name: 'Mamma Elvira Enoteca',
    nameShort: 'Enoteca',
    path: '/enoteca',
    payoff: 'enoteca.payoff',
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

    menuUrl: 'https://menu-mammaelvira-fe-80d79ebfc254.herokuapp.com/Enoteca',
    instagramUrl: 'https://www.instagram.com/mamma_elvira_enoteca',
    facebookUrl: 'https://www.facebook.com/MammaElvira',
  },
  // LA CUCINA
  {
    name: 'La Cucina di Mamma Elvira',
    path: '/la-cucina',
    payoff: 'laCucina.payoff',
    place: 'Il Castello',
    iconClass: 'i-game-icons-fork-knife-spoon',
    color: 'me-olive',
    imageUrl: '~/assets/images/me_la-cucina_ext-03.jpg',
    telephone: '+393315795127',
    email: 'lacucina@mammaelvira.com',
    address: {
      street: 'Via Ludovico Maremonti',
      streetNumber: '33',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',

    bookingUrl: 'https://mammaelvira.myrestoo.net/it/reservar',
    menuUrl: 'https://menu-mammaelvira-fe-80d79ebfc254.herokuapp.com/La%20Cucina',

    instagramUrl: 'https://www.instagram.com/la_cucina_di_mamma_elvira',
    facebookUrl: 'https://www.facebook.com/LaCucinaDiMammaElvira',
  },
  // 'SCANTE
  {
    name: "'Scante",
    path: '/scante',
    payoff: 'scante.payoff',
    place: 'Il Castello',
    iconClass: 'i-game-icons-fork-knife-spoon',
    color: 'me-laterizio',
    telephone: '+393483021637',
    email: 'scante@mammaelvira.com',
    address: {
      street: 'Via Ludovico Maremonti',
      streetNumber: '41',
      cap: '73100',
      city: 'Lecce',
    },
    googleMapsUrl: '',

    menuUrl: "https://menu-mammaelvira-fe-80d79ebfc254.herokuapp.com/'Scante",
  

    instagramUrl: 'https://www.instagram.com/scante_lecce',
    facebookUrl: 'https://www.facebook.com/scantelecce',
  },
  // CORTE DEI PANDOLFI
  // {
  //   name: 'Corte dei Pandolfi',
  //   path: '/corte-dei-pandolfi',
  //   payoff: 'corteDeiPandolfi.payoff',
  //   place: 'Il Duomo',
  //   iconClass: 'i-custom:corte-dei-pandolfi',
  //   color: 'me-yellow',
  //   telephone: '+393661412692',
  //   email: 'cortedeipandolfi@mammaelvira.com',
  //   address: {
  //     street: 'Corte dei Pandolfi',
  //     streetNumber: '3',
  //     cap: '73100',
  //     city: 'Lecce',
  //   },
  //   googleMapsUrl: '',

  //   menuUrl: '',
  //   menuPdf: '/menu_corte_bianco.pdf',
  //   instagramUrl: 'https://www.instagram.com/corte_dei_pandolfi',
  //   facebookUrl: 'https://www.facebook.com/cortedeipandolfilecce',
  // },
  // CASA MAMMA ELVIRA
  {
    name: 'Casa Mamma Elvira',
    path: '/casa',
    payoff: 'casaMammaElvira.payoff',
    place: 'Il Castello',
    iconClass: 'i-game-icons-bed',
    color: 'me-lapis',
    videoUrl:
      'https://zvvmjgoompnusglgfkyy.supabase.co/storage/v1/object/public/Videos/me_la-casa_balcony-coffee.mp4',
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
  // PICNIC EXPERIENCE
  {
    name: 'Picnic Experience Lecce',
    path: '/picnic-experience',
    payoff: 'picnic.payoff',
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
