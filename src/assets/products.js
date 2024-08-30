const products = [
  {
    id: 1,
    name: 'Acacia',
    price: 19.2,
    originalPrice: 24.0,
    discount: 0.2,
    new: true,
    imageSrc: 'acacia.jpg',
    description:
      'A fast-growing tree known for its resilience and drought tolerance.',
  },
  {
    id: 2,
    name: 'Avocado',
    price: 10.5,
    originalPrice: 15.0,
    discount: 0.3,
    new: false,
    imageSrc: 'avocado.jpg',
    description: 'A popular fruit tree producing nutrient-rich avocados.',
  },
  {
    id: 3,
    name: 'Acokanthera Schimperri',
    price: 13.2,
    originalPrice: 22.0,
    discount: 0.4,
    new: true,
    imageSrc: 'acokanthera.jpg',
    description:
      'An evergreen shrub with medicinal properties, native to Africa.',
  },
  {
    id: 4,
    name: 'Aloe Barbadensis',
    price: 21,
    originalPrice: 30.0,
    discount: 0.3,
    new: false,
    imageSrc: 'aloe.jpg',
    description: 'Commonly known as Aloe Vera, valued for its soothing gel.',
  },
  {
    id: 5,
    name: 'Cape Chestnut',
    price: 32.0,
    originalPrice: 32.0,
    discount: 0,
    new: true,
    imageSrc: 'cape_chestnut.jpg',
    description: 'A beautiful tree with pink flowers, native to South Africa.',
  },
  {
    id: 6,
    name: 'Carissa Edulis',
    price: 24,
    originalPrice: 30.0,
    discount: 0.2,
    new: false,
    imageSrc: 'carissa_edulis.jpg',
    description:
      'A thorny shrub bearing small edible fruits, used in traditional medicine.',
  },
  {
    id: 7,
    name: 'Cedar',
    price: 22.0,
    originalPrice: 22.0,
    discount: 0.0,
    new: false,
    imageSrc: 'cedar.jpg',
    description:
      'A durable timber tree, often used in construction and furniture.',
  },
  {
    id: 8,
    name: 'Croton Macrostychus',
    price: 26,
    originalPrice: 26,
    discount: 0,
    new: false,
    imageSrc: 'croton.jpg',
    description:
      'A large tree with ornamental foliage, common in tropical regions.',
  },
  {
    id: 9,
    name: 'Curry Tree',
    price: 35.0,
    originalPrice: 35.0,
    discount: 0.0,
    new: true,
    imageSrc: 'curry.jpg',
    description: 'Known for its aromatic leaves, essential in Indian cuisine.',
  },
  {
    id: 10,
    name: 'Erythrococca Bongensis',
    price: 40,
    originalPrice: 40,
    discount: 0,
    new: false,
    imageSrc: 'erythrococca.jpg',
    description: 'A small tree with medicinal uses, native to tropical Africa.',
  },
  {
    id: 11,
    name: 'Euclea Divinorum',
    price: 19.2,
    originalPrice: 24.0,
    discount: 0.2,
    new: true,
    imageSrc: 'euclea.jpg',
    description: 'A hardy evergreen tree, often used in traditional medicine.',
  },
  {
    id: 12,
    name: 'Flame Tree',
    price: 35,
    originalPrice: 50.0,
    discount: 0.3,
    new: false,
    imageSrc: 'flame.jpg',
    description:
      'A striking tree with bright red flowers, popular in landscaping.',
  },
  {
    id: 13,
    name: 'Guava',
    price: 13.2,
    originalPrice: 22.0,
    discount: 0.4,
    new: true,
    imageSrc: 'guava.jpg',
    description: 'A tropical fruit tree producing sweet and fragrant guavas.',
  },
  {
    id: 14,
    name: 'Kigelia Africana',
    price: 21,
    originalPrice: 30.0,
    discount: 0.3,
    new: false,
    imageSrc: 'kigelia.jpg',
    description:
      'Known as the sausage tree, it has large fruits and medicinal uses.',
  },
  {
    id: 15,
    name: 'Loquat',
    price: 32.0,
    originalPrice: 32.0,
    discount: 0,
    new: true,
    imageSrc: 'loquat.jpg',
    description: 'A small evergreen tree producing sweet, tangy fruits.',
  },
  {
    id: 16,
    name: 'Markhamia Lutea',
    price: 24,
    originalPrice: 30.0,
    discount: 0.2,
    new: false,
    imageSrc: 'markhamia.jpg',
    description:
      'A flowering tree with yellow blooms, used in traditional medicine.',
  },
  {
    id: 17,
    name: 'Meru Oak',
    price: 22.0,
    originalPrice: 22.0,
    discount: 0.0,
    new: false,
    imageSrc: 'meru.jpg',
    description:
      'A valuable timber tree, often used in construction and furniture.',
  },
  {
    id: 18,
    name: 'Nandi Flame',
    price: 26,
    originalPrice: 26,
    discount: 0,
    new: false,
    imageSrc: 'nandi.jpg',
    description: 'A striking ornamental tree with bright red flowers.',
  },
  {
    id: 19,
    name: 'Olea Africana',
    price: 35.0,
    originalPrice: 35.0,
    discount: 0.0,
    new: true,
    imageSrc: 'olea.jpg',
    description: 'An African olive tree, valued for its oil and hardwood.',
  },
  {
    id: 20,
    name: 'Parasol Tree',
    price: 40,
    originalPrice: 40,
    discount: 0,
    new: false,
    imageSrc: 'parasol.jpg',
    description: 'A large shade tree with wide, spreading branches.',
  },
  {
    id: 21,
    name: 'Pistacia',
    price: 19.2,
    originalPrice: 24.0,
    discount: 0.2,
    new: true,
    imageSrc: 'pistacia.jpg',
    description:
      'A small tree known for producing edible nuts and fragrant resin.',
  },
  {
    id: 22,
    name: 'Podo',
    price: 35,
    originalPrice: 50.0,
    discount: 0.3,
    new: false,
    imageSrc: 'podo.jpg',
    description: 'A hardwood tree used in construction and furniture making.',
  },
  {
    id: 23,
    name: 'Pomegranate',
    price: 13.2,
    originalPrice: 22.0,
    discount: 0.4,
    new: true,
    imageSrc: 'pomegranate.jpg',
    description: 'A fruit tree known for its juicy, seed-filled pomegranates.',
  },
  {
    id: 24,
    name: 'Prunus Africana',
    price: 21,
    originalPrice: 30.0,
    discount: 0.3,
    new: false,
    imageSrc: 'prunus.jpg',
    description: 'A medicinal tree with bark used in traditional medicine.',
  },
  {
    id: 25,
    name: 'Psydrax',
    price: 32.0,
    originalPrice: 32.0,
    discount: 0,
    new: true,
    imageSrc: 'psydrax.jpg',
    description:
      'A shrub or small tree with fragrant flowers, native to tropical regions.',
  },
  {
    id: 26,
    name: 'Sandalwood',
    price: 24,
    originalPrice: 30.0,
    discount: 0.2,
    new: false,
    imageSrc: 'sandalwood.jpg',
    description:
      'A tree valued for its fragrant wood and oil, used in perfumery.',
  },
  {
    id: 27,
    name: 'Sausage Tree',
    price: 22.0,
    originalPrice: 22.0,
    discount: 0.0,
    new: false,
    imageSrc: 'sausage.jpg',
    description:
      'A tree known for its large, sausage-shaped fruits and medicinal uses.',
  },
  {
    id: 28,
    name: 'Tree Tomato',
    price: 26,
    originalPrice: 26,
    discount: 0,
    new: false,
    imageSrc: 'tomato.jpg',
    description: 'A small tree producing egg-shaped, tangy fruits.',
  },
  {
    id: 29,
    name: 'Vepris Nobilis',
    price: 35.0,
    originalPrice: 35.0,
    discount: 0.0,
    new: true,
    imageSrc: 'vepris.jpg',
    description: 'A tropical tree with medicinal properties, native to Africa.',
  },
  {
    id: 30,
    name: 'Warbughia Ugandensis',
    price: 40,
    originalPrice: 40,
    discount: 0,
    new: false,
    imageSrc: 'warbughia.jpg',
    description:
      'A medicinal tree with strong antifungal and antibacterial properties.',
  },
  {
    id: 31,
    name: 'White Sapote',
    price: 22.0,
    originalPrice: 22.0,
    discount: 0.0,
    new: false,
    imageSrc: 'whitesapote.jpg',
    description: 'A fruit tree producing sweet, creamy fruits.',
  },
  {
    id: 32,
    name: 'Wild Apricot',
    price: 12.0,
    originalPrice: 12.0,
    discount: 0.0,
    new: false,
    imageSrc: 'wildapricot.jpg',
    description: 'A hardy tree producing small, tart apricots.',
  },
];
