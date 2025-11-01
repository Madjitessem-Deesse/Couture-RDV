import { Product, Order } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    price: 2499.99,
    description: 'Powerful laptop with M3 Max chip, perfect for creative professionals',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 15,
    rating: 4.8,
    reviews: 342
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 1199.99,
    description: 'Latest iPhone with titanium design and advanced camera system',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 25,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '3',
    name: 'Nike Air Max 90',
    price: 129.99,
    description: 'Classic sneakers with modern comfort and style',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    stock: 50,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 399.99,
    description: 'Premium noise-canceling headphones with exceptional sound quality',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 30,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '5',
    name: 'Levi\'s 501 Jeans',
    price: 89.99,
    description: 'Classic straight-leg jeans in premium denim',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    stock: 75,
    rating: 4.4,
    reviews: 67
  },
  {
    id: '6',
    name: 'Samsung 4K Monitor',
    price: 649.99,
    description: '32-inch 4K UHD monitor perfect for work and gaming',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 20,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '7',
    name: 'Adidas Ultraboost 22',
    price: 189.99,
    description: 'High-performance running shoes with responsive cushioning',
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    stock: 40,
    rating: 4.7,
    reviews: 94
  },
  {
    id: '8',
    name: 'iPad Pro 12.9"',
    price: 1099.99,
    description: 'Professional tablet with M2 chip and Liquid Retina XDR display',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 18,
    rating: 4.8,
    reviews: 176
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: '2',
    items: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[1], quantity: 1 }
    ],
    total: 3699.98,
    status: 'delivered',
    createdAt: '2024-12-15T10:30:00Z',
    shippingAddress: '123 Main St, City, State',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-002',
    userId: '2',
    items: [
      { product: mockProducts[2], quantity: 2 },
      { product: mockProducts[3], quantity: 1 }
    ],
    total: 659.97,
    status: 'shipped',
    createdAt: '2024-12-20T14:20:00Z',
    shippingAddress: '123 Main St, City, State',
    paymentMethod: 'PayPal'
  }
];