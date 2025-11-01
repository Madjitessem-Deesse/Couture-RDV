import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Award, 
  Users,
  Scissors,
  CheckCircle,
  Heart,
  Calendar
} from 'lucide-react';

// Mock couturiers data
const mockCouturiers = [
  {
    id: '3',
    name: 'Fatou Diallo',
    businessName: 'Atelier Fatou Couture',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Robes traditionnelles', 'Tenues de soirée', 'Costumes sur mesure'],
    experience: 8,
    rating: 4.8,
    reviewCount: 156,
    location: { city: 'Dakar', district: 'Plateau' },
    priceRange: { min: 50, max: 500 },
    followers: 1250,
    isVerified: true,
    subscription: { type: 'premium', isActive: true },
    description: 'Spécialiste des robes traditionnelles et modernes'
  },
  {
    id: '4',
    name: 'Aminata Mbaye',
    businessName: 'Couture Aminata',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Mode contemporaine', 'Accessoires', 'Retouches'],
    experience: 5,
    rating: 4.6,
    reviewCount: 89,
    location: { city: 'Dakar', district: 'Almadies' },
    priceRange: { min: 30, max: 300 },
    followers: 890,
    isVerified: false,
    subscription: { type: 'basic', isActive: true },
    description: 'Créatrice de mode contemporaine et accessoires'
  },
  {
    id: '5',
    name: 'Ibrahima Sarr',
    businessName: 'Tailleur Ibrahima',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Costumes masculins', 'Vêtements traditionnels', 'Uniformes'],
    experience: 12,
    rating: 4.9,
    reviewCount: 203,
    location: { city: 'Dakar', district: 'Medina' },
    priceRange: { min: 80, max: 600 },
    followers: 1580,
    isVerified: true,
    subscription: { type: 'premium', isActive: true },
    description: 'Maître tailleur spécialisé dans les costumes masculins'
  },
  {
    id: '6',
    name: 'Aissatou Ba',
    businessName: 'Atelier Aissatou',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Robes de mariée', 'Tenues de cérémonie', 'Broderie'],
    experience: 10,
    rating: 4.7,
    reviewCount: 134,
    location: { city: 'Dakar', district: 'Point E' },
    priceRange: { min: 100, max: 800 },
    followers: 2100,
    isVerified: true,
    subscription: { type: 'premium', isActive: true },
    description: 'Spécialiste des robes de mariée et tenues de cérémonie'
  },
  {
    id: '7',
    name: 'Moussa Diop',
    businessName: 'Couture Moderne',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Mode urbaine', 'Streetwear', 'Personnalisation'],
    experience: 6,
    rating: 4.4,
    reviewCount: 67,
    location: { city: 'Dakar', district: 'Sacré-Coeur' },
    priceRange: { min: 40, max: 250 },
    followers: 650,
    isVerified: false,
    subscription: { type: 'basic', isActive: true },
    description: 'Créateur de mode urbaine et streetwear'
  },
  {
    id: '8',
    name: 'Khady Ndiaye',
    businessName: 'Khady Couture',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Vêtements enfants', 'Tenues scolaires', 'Costumes'],
    experience: 7,
    rating: 4.5,
    reviewCount: 98,
    location: { city: 'Dakar', district: 'Liberté' },
    priceRange: { min: 25, max: 150 },
    followers: 780,
    isVerified: false,
    subscription: { type: 'basic', isActive: true },
    description: 'Spécialisée dans les vêtements pour enfants'
  }
];

export function Couturiers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const specialties = useMemo(() => {
    const allSpecialties = mockCouturiers.flatMap(c => c.specialties);
    return Array.from(new Set(allSpecialties));
  }, []);

  const locations = useMemo(() => {
    return Array.from(new Set(mockCouturiers.map(c => c.location.district)));
  }, []);

  const filteredCouturiers = useMemo(() => {
    let filtered = mockCouturiers.filter(couturier => {
      const matchesSearch = !searchQuery || 
        couturier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        couturier.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        couturier.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSpecialty = !selectedSpecialty || 
        couturier.specialties.includes(selectedSpecialty);
      
      const matchesLocation = !selectedLocation || 
        couturier.location.district === selectedLocation;
      
      const matchesPrice = couturier.priceRange.min >= priceRange[0] && 
        couturier.priceRange.max <= priceRange[1];

      return matchesSearch && matchesSpecialty && matchesLocation && matchesPrice;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.experience - a.experience;
        case 'followers':
          return b.followers - a.followers;
        case 'price-asc':
          return a.priceRange.min - b.priceRange.min;
        case 'price-desc':
          return b.priceRange.min - a.priceRange.min;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedSpecialty, selectedLocation, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez nos Couturiers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez le couturier parfait pour donner vie à vos projets. 
            Des artisans passionnés et talentueux vous attendent !
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par nom, spécialité..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filtres avancés</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredCouturiers.length} couturier(s) trouvé(s)
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="rating">Mieux notés</option>
                <option value="experience">Plus expérimentés</option>
                <option value="followers">Plus populaires</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="name">Nom A-Z</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spécialité
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Toutes les spécialités</option>
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quartier
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Tous les quartiers</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget maximum: {priceRange[1]}€
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Couturiers Grid */}
        {filteredCouturiers.length === 0 ? (
          <div className="text-center py-12">
            <Scissors className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun couturier trouvé
            </h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCouturiers.map((couturier) => (
              <div
                key={couturier.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={couturier.coverImage}
                    alt={`Couverture ${couturier.businessName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Premium Badge */}
                  {couturier.subscription.type === 'premium' && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Premium
                    </div>
                  )}

                  {/* Profile Picture */}
                  <div className="absolute -bottom-8 left-6">
                    <div className="relative">
                      <img
                        src={couturier.avatar}
                        alt={couturier.name}
                        className="w-16 h-16 rounded-full border-4 border-white object-cover"
                      />
                      {couturier.isVerified && (
                        <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-12 p-6">
                  <div className="mb-4">
                    <Link
                      to={`/couturier/${couturier.id}`}
                      className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
                    >
                      {couturier.businessName}
                    </Link>
                    <p className="text-gray-600">{couturier.name}</p>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {couturier.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{couturier.rating}</span>
                      <span>({couturier.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{couturier.followers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{couturier.experience}ans</span>
                    </div>
                  </div>

                  {/* Location and Price */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{couturier.location.district}</span>
                    </div>
                    <div className="text-orange-600 font-semibold">
                      {couturier.priceRange.min}€ - {couturier.priceRange.max}€
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {couturier.specialties.slice(0, 2).map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {couturier.specialties.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{couturier.specialties.length - 2} autres
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Link
                      to={`/couturier/${couturier.id}`}
                      className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-center font-medium"
                    >
                      Voir le profil
                    </Link>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors">
                      <Calendar className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}