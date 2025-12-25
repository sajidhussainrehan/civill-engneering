import bricksImg from '../assets/bricks.jpg'
import cementImg from '../assets/cement.jpg'
import heroImg from '../assets/hero.jpg'
import sandImg from '../assets/sand.jpg'
import steelBarsImg from '../assets/steel-bars.jpg'
import tilesImg from '../assets/tiles.jpg'

export const brand = {
  name: 'Civil Materials',
  tagline: 'Civil Engineering • Construction • Quality Materials',
  phone: '+91 90000 00000',
  email: 'info@civilmaterials.com',
  address: 'Your City, Your State, India',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    key: 'construction',
    title: 'Construction',
    description:
      'End-to-end construction execution with site safety, material quality checks, and schedule-focused delivery.',
  },
  {
    key: 'architecture',
    title: 'Architectural Design',
    description:
      'Modern, functional plans with strong structural coordination and construction-ready deliverables.',
  },
  {
    key: 'supervision',
    title: 'Supervision',
    description:
      'On-site supervision, contractor coordination, and workmanship assurance for consistent outcomes.',
  },
  {
    key: 'consultancy',
    title: 'Renovation & Consultancy',
    description:
      'Renovation planning, BOQ estimation, material recommendations, and structural consultation.',
  },
]

export const productCategories = ['All', 'Stone', 'Tiles', 'Cement', 'Steel', 'Masonry', 'Aggregate']

export const products = [
  {
    id: 'marble-stone',
    name: 'Marble Stone',
    category: 'Stone',
    price: 1650,
    originalPrice: 1950,
    unit: 'sq ft',
    priceLabel: '₹1650 / sq ft',
    description: 'Premium marble options for flooring, elevation, and interior finishing.',
    image: heroImg,
    variants: ['Standard', 'Premium'],
  },
  {
    id: 'tiles',
    name: 'Tiles',
    category: 'Tiles',
    price: 58,
    originalPrice: 75,
    unit: 'sq ft',
    priceLabel: '₹58 / sq ft',
    description: 'Durable tiles in multiple finishes for homes, offices, and commercial sites.',
    image: tilesImg,
    variants: ['Glossy', 'Matte', 'Anti-Skid'],
  },
  {
    id: 'cement',
    name: 'Cement',
    category: 'Cement',
    price: 420,
    originalPrice: 460,
    unit: 'bag',
    priceLabel: '₹420 / bag',
    description: 'Reliable cement supply for residential and large-scale projects.',
    image: cementImg,
    variants: ['43 Grade', '53 Grade'],
  },
  {
    id: 'steel-bars',
    name: 'Steel Bars',
    category: 'Steel',
    price: 72,
    originalPrice: 80,
    unit: 'kg',
    priceLabel: '₹72 / kg',
    description: 'High strength TMT steel bars for RCC structures and foundations.',
    image: steelBarsImg,
    variants: ['8mm', '10mm', '12mm', '16mm'],
  },
  {
    id: 'bricks',
    name: 'Bricks',
    category: 'Masonry',
    price: 9,
    originalPrice: 12,
    unit: 'piece',
    priceLabel: '₹9 / piece',
    description: 'Quality bricks for strong masonry with consistent dimensions.',
    image: bricksImg,
    variants: ['Red Clay', 'Fly Ash'],
  },
  {
    id: 'sand-aggregate',
    name: 'Sand & Aggregate',
    category: 'Aggregate',
    price: 1450,
    originalPrice: 1700,
    unit: 'ton',
    priceLabel: '₹1450 / ton',
    description: 'Clean sand and graded aggregate for concrete and plaster works.',
    image: sandImg,
    variants: ['River Sand', 'M-Sand'],
  },
]
