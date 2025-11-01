import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Users, Calendar, Shield, Star, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Couture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-500/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-8 w-8 text-white mx-auto" />
              </div>
              <span className="text-white font-semibold text-xl block mb-6">Plateforme N°1 de Couture</span>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Connectez-vous avec les <span className="text-yellow-200">meilleurs</span> couturiers
              </h1>
              
              <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto">
                Découvrez des créateurs talentueux, partagez vos créations et donnez vie à vos projets de couture. 
                Une communauté passionnée vous attend !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 shadow-2xl text-lg"
                >
                  <span>Rejoindre la communauté</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/couturiers"
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors text-center text-lg"
                >
                  Explorer les créateurs
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex justify-center space-x-12 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-600">Couturiers actifs</div>
              </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">4.9★</div>
                <div className="text-sm">Note moyenne</div>
              </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">10k+</div>
                  <div className="text-sm text-white/80">Clients satisfaits</div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir CoutureConnect ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme complète qui révolutionne la façon dont vous découvrez, 
              créez et partagez la passion de la couture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
                <Scissors className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Créateurs Vérifiés</h3>
              <p className="text-gray-600">
                Tous nos couturiers sont vérifiés et évalués par la communauté pour garantir la qualité
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rendez-vous Faciles</h3>
              <p className="text-gray-600">
                Prenez rendez-vous en ligne et suivez l'avancement de vos commandes en temps réel
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Paiement Sécurisé</h3>
              <p className="text-gray-600">
                Transactions 100% sécurisées avec protection contre les pertes et dommages
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Communauté Active</h3>
              <p className="text-gray-600">
                Partagez vos créations, inspirez-vous et connectez-vous avec d'autres passionnés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Couturiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Couturiers en Vedette</h2>
            <p className="text-xl text-gray-600">Découvrez les créateurs les plus talentueux de notre communauté</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Couturier 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Création couture"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Fatou Diallo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fatou Diallo</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.9 (156 avis)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Spécialiste des robes traditionnelles et tenues de soirée</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">À partir de 50€</span>
                  <Link
                    to="/couturiers"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm hover:from-orange-600 hover:to-orange-700 transition-all"
                  >
                    Voir le profil
                  </Link>
                </div>
              </div>
            </div>

            {/* Add more featured couturiers */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Création couture"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Aminata Mbaye</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.8 (89 avis)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Créatrice de mode contemporaine et accessoires</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">À partir de 75€</span>
                  <Link
                    to="/couturiers"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm hover:from-orange-600 hover:to-orange-700 transition-all"
                  >
                    Voir le profil
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Création couture"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">IS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ibrahima Sarr</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.7 (124 avis)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Maître tailleur, costumes et vêtements masculins</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">À partir de 100€</span>
                  <Link
                    to="/couturiers"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm hover:from-orange-600 hover:to-orange-700 transition-all"
                  >
                    Voir le profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/couturiers"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all font-medium"
            >
              <span>Voir tous les couturiers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à rejoindre notre communauté ?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Que vous soyez client à la recherche du couturier parfait ou artisan souhaitant 
            développer votre activité, CoutureConnect est fait pour vous !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              S'inscrire comme client
            </Link>
            <Link
              to="/register-couturier"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Devenir couturier partenaire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}