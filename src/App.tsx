/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Search, 
  SlidersHorizontal, 
  Bolt, 
  Star, 
  Plus, 
  Home as HomeIcon, 
  ShoppingBag, 
  User, 
  ArrowLeft, 
  Heart, 
  Share2, 
  Timer, 
  ShoppingBag as CartIcon,
  ChevronRight,
  School,
  CreditCard,
  Wallet,
  Smartphone,
  Rocket,
  Minus,
  Bike
} from 'lucide-react';
import { cn } from './lib/utils';
import { View, FoodItem, Restaurant } from './types';
import { RESTAURANTS, QUICK_BITES, RECOMMENDED_ITEMS } from './constants';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [cart, setCart] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCart([...cart, item]);
  };

  const navigateToRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentView('restaurant');
    window.scrollTo(0, 0);
  };

  const navigateToItem = (item: FoodItem) => {
    setSelectedItem(item);
    setCurrentView('item');
    window.scrollTo(0, 0);
  };

  const navigateToCart = () => {
    setCurrentView('cart');
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (currentView === 'item') setCurrentView('restaurant');
    else if (currentView === 'restaurant') setCurrentView('home');
    else if (currentView === 'cart') setCurrentView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(74,37,6,0.06)]">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4">
            {currentView !== 'home' && (
              <button 
                onClick={goBack}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <div className="flex items-center gap-2">
              {currentView === 'home' && <MapPin className="w-5 h-5 text-primary-container" />}
              <div className="flex flex-col">
                {currentView === 'home' ? (
                  <>
                    <span className="text-[10px] font-label uppercase tracking-widest text-outline">Campus</span>
                    <span className="font-headline font-bold leading-none">National Taiwan University</span>
                  </>
                ) : (
                  <h1 className="font-headline font-bold text-xl tracking-tight">
                    {currentView === 'restaurant' ? selectedRestaurant?.name : 
                     currentView === 'item' ? 'The Culinary Pulse' : 'Cart'}
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {currentView === 'home' ? (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPo4tQ3aBDFhTk9z6GKQVq0f8_vnyeJ1W_4wJQfBQX9XluQtfZdU_bwzi2F21pJb8HLQER4U7QWcdlfiAah6v5ONpJQJnFEl_YKYzQw9ib2B4oVD50URHp5KqKUS4o4_eFXFci54rCl5yJLYDSmSqnRWCXTKFxy6oC9gKYgfQNAk5202RLzZLrY187UFnI5q5SL07oATffO4aOE2eHO8N_fft5JkcsAatXeHf6gHDrcQgsCuVt0tF1En-ejN7-1qp1wVDuMJ31xnE" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
                  <Heart className="w-6 h-6 text-primary-container" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <input 
                  type="text" 
                  placeholder="Craving something specific?"
                  className="w-full bg-surface-container-low border-none rounded-xl py-5 pl-14 pr-6 text-on-surface placeholder-outline focus:ring-2 focus:ring-secondary transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button className="bg-secondary text-on-primary px-4 py-2 rounded-lg font-label text-sm font-bold flex items-center gap-2 active:scale-95 duration-200">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </button>
                </div>
              </div>

              {/* Banner */}
              <div className="relative overflow-hidden rounded-xl bg-secondary-container p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="relative z-10 text-on-secondary-container max-w-md">
                  <div className="flex items-center gap-2 mb-2 bg-on-secondary-container/10 w-fit px-3 py-1 rounded-full">
                    <Bolt className="w-4 h-4" />
                    <span className="font-label text-xs font-extrabold tracking-widest uppercase">The Rush</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-headline font-black mb-3 leading-tight tracking-tighter">Midterm Fuel: 30% OFF</h2>
                  <p className="font-body text-sm opacity-90 mb-6">Late night at the Main Library? Use code <span className="font-bold">STUDY30</span> for all library-side deliveries.</p>
                  <button className="bg-primary text-white px-8 py-3 rounded-full font-headline font-bold text-sm shadow-lg active:scale-95 transition-transform">Claim Now</button>
                </div>
                <div className="relative w-full md:w-1/2 h-48 md:h-64 rounded-lg overflow-hidden editorial-shadow">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIeoRG2hBaMaEn7OsfctgDNLIA0iWYRBZFrj7FqVZzl57FUMwvi6yXy3cP7hDUut35Fo5b12Wi7d_DyGWTjySxCxioE11XrZFsWknLsep5Jvk3yYWyzk0Ajs6rxCYXfDTR9vsgn-yOkMvMtmJp1VzzfZu84gWcncajCwujEynrXas_4ohQQKqY3l2KSItdgpowWQ7sPWq8gKA_nEmw7Kowy09D0wMmyjZbu0q_IABWh47xM6K1_b0Zx8091QQMZ8VfKmN3t41kbBw" 
                    alt="Pizza"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                </div>
              </div>

              {/* Quick Bites */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-headline font-extrabold tracking-tight">Quick Bites</h3>
                  <button className="text-secondary font-label text-sm font-bold">See All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                  {QUICK_BITES.map((cat) => (
                    <button 
                      key={cat.name}
                      className="flex-shrink-0 flex flex-col items-center gap-3 group active:scale-90 duration-150"
                    >
                      <div className={cn(
                        "w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300",
                        cat.active ? "bg-primary text-white scale-105 shadow-xl" : "bg-surface-container-high group-hover:bg-primary group-hover:text-white"
                      )}>
                        <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                      </div>
                      <span className="font-label text-sm font-bold text-on-surface">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Recommended */}
              <section>
                <div className="mb-8">
                  <h3 className="text-2xl font-headline font-black tracking-tighter">Recommended for You</h3>
                  <p className="text-on-surface-variant text-sm">Curated based on your campus favorites</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Featured Large Card */}
                  <div 
                    onClick={() => navigateToRestaurant(RESTAURANTS[0])}
                    className="md:col-span-2 relative group cursor-pointer"
                  >
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 text-primary-container fill-primary-container" />
                      <span className="text-xs font-bold font-label">4.9 (1.2k)</span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl h-80 md:h-96 editorial-shadow transition-transform duration-500 group-hover:scale-[1.01]">
                      <img 
                        src={RESTAURANTS[0].image} 
                        alt={RESTAURANTS[0].name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                        <div className="flex gap-2 mb-3">
                          <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">Free Delivery</span>
                          <span className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">Under 15 min</span>
                        </div>
                        <h4 className="text-3xl font-headline font-black mb-2">{RESTAURANTS[0].name}</h4>
                        <p className="text-sm opacity-80 max-w-sm">{RESTAURANTS[0].description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Smaller Cards */}
                  {RECOMMENDED_ITEMS.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                          <Star className="w-3 h-3 text-primary-container fill-primary-container" />
                          <span className="text-[10px] font-bold">{item.rating}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-headline font-bold text-on-surface">{item.name}</h4>
                          <span className="text-xs font-bold text-secondary">{item.prepTime}</span>
                        </div>
                        <p className="text-xs text-on-surface-variant mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-headline font-bold">${item.price.toFixed(2)}</span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary active:scale-90 duration-200"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {currentView === 'restaurant' && selectedRestaurant && (
            <motion.div
              key="restaurant"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section className="relative h-[300px] -mx-6 -mt-24 overflow-hidden">
                <img 
                  src={selectedRestaurant.image} 
                  alt={selectedRestaurant.name}
                  className="w-full h-full object-cover brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                      <Star className="w-4 h-4 fill-on-tertiary-container" />
                      <span className="font-label font-bold text-sm">{selectedRestaurant.rating} ({selectedRestaurant.reviews})</span>
                    </div>
                    <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                      <MapPin className="w-4 h-4" />
                      <span className="font-label font-bold text-sm">500m</span>
                    </div>
                    <div className="bg-surface-container-highest text-on-surface-variant px-4 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                      <Timer className="w-4 h-4" />
                      <span className="font-label font-bold text-sm">{selectedRestaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </section>

              <nav className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-sm py-4 overflow-x-auto hide-scrollbar -mx-6 px-6">
                <div className="flex gap-3">
                  <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-primary text-white font-label font-bold scale-105 shadow-lg shadow-primary/20">
                    Classic Burgers
                  </button>
                  {['Sides', 'Drinks', 'Desserts', 'Combos'].map(cat => (
                    <button key={cat} className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label font-semibold hover:bg-surface-container-highest transition-all">
                      {cat}
                    </button>
                  ))}
                </div>
              </nav>

              <div className="space-y-8">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Classic Burgers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedRestaurant.menu.map(item => (
                    <div 
                      key={item.id}
                      onClick={() => navigateToItem(item)}
                      className="group bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-headline font-bold text-xl text-on-surface">{item.name}</h3>
                            <span className="text-primary font-headline font-extrabold">${item.price.toFixed(2)}</span>
                          </div>
                          <p className="text-on-surface-variant text-sm line-clamp-2 font-body mb-4">{item.description}</p>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                          className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-full font-label font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                        >
                          <CartIcon className="w-5 h-5" />
                          Add to Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary-container rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-secondary/10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center">
                    <Bolt className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-headline font-extrabold text-xl text-on-secondary-container">THE LUNCH RUSH</h4>
                    <p className="text-on-secondary-container/80 font-body">Orders are flying out! Get yours in before the next lecture.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-black text-4xl text-secondary tracking-tighter">08:42</span>
                  <span className="font-label font-bold text-xs uppercase text-secondary">left until<br/>next batch</span>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'item' && selectedItem && (
            <motion.div
              key="item"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-12"
            >
              <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4">
                <div className="relative group">
                  <div className="aspect-square overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-6 rounded-xl shadow-lg transform rotate-3 flex flex-col items-center justify-center">
                    <span className="font-headline font-extrabold text-2xl tracking-tighter">15%</span>
                    <span className="font-label text-[10px] uppercase tracking-widest font-bold">Student Deal</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-wider">Top Rated</span>
                      <div className="flex items-center text-primary font-bold">
                        <Star className="w-4 h-4 fill-primary" />
                        <span className="ml-1 text-sm font-headline">4.9 (1.2k Reviews)</span>
                      </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black font-headline text-on-surface leading-tight mb-4">{selectedItem.name}</h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed">{selectedItem.description}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-label text-outline uppercase tracking-widest">Est. Prep Time</span>
                      <div className="flex items-center gap-1 text-secondary font-bold">
                        <Timer className="w-5 h-5" />
                        <span className="text-xl font-headline">{selectedItem.prepTime || '10-15 min'}</span>
                      </div>
                    </div>
                    <div className="w-px h-10 bg-surface-container-high"></div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-label text-outline uppercase tracking-widest">Calories</span>
                      <div className="flex items-center gap-1 text-on-surface font-bold">
                        <Bolt className="w-5 h-5" />
                        <span className="text-xl font-headline">{selectedItem.calories || '450 kcal'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-surface-container-low rounded-lg p-6">
                    <div className="flex justify-between items-end mb-6">
                      <h3 className="font-headline font-extrabold text-xl">Customize Your Order</h3>
                      <span className="text-sm font-medium text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">Pick up to 3 extras</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: 'Extra Cheese', price: '+$1.50', icon: 'bakery_dining' },
                        { name: 'No Onion', price: 'Free', icon: 'do_not_disturb_on' },
                        { name: 'Extra Lettuce', price: '+$0.50', icon: 'potted_plant' },
                        { name: 'Fried Egg', price: '+$2.00', icon: 'egg' }
                      ].map(opt => (
                        <label key={opt.name} className="relative flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center">
                              <span className="material-symbols-outlined text-primary">{opt.icon}</span>
                            </div>
                            <div>
                              <p className="font-headline font-bold text-on-surface">{opt.name}</p>
                              <p className="text-xs text-on-surface-variant">{opt.price}</p>
                            </div>
                          </div>
                          <input type="checkbox" className="w-6 h-6 rounded-full border-outline-variant text-primary focus:ring-primary-container" />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-surface-container-high rounded-lg p-6">
                    <h3 className="font-headline font-extrabold text-lg mb-3">Kitchen Notes</h3>
                    <textarea className="w-full bg-surface-container-lowest border-none rounded-md p-4 text-sm focus:ring-2 focus:ring-secondary min-h-[120px]" placeholder="Add a note (e.g., allergies, extra napkins...)"></textarea>
                  </div>
                </div>
              </section>

              <footer className="fixed bottom-0 left-0 w-full z-[60] bg-surface/80 backdrop-blur-xl px-6 pb-8 pt-4 flex flex-col items-center shadow-[0_-8px_32px_0_rgba(74,37,6,0.06)] rounded-t-xl">
                <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center bg-surface-container-highest rounded-full p-1 w-full md:w-auto">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-lowest text-primary hover:bg-white active:scale-90 transition-all">
                      <Minus className="w-6 h-6" />
                    </button>
                    <span className="px-8 font-headline font-black text-xl text-on-surface">1</span>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dim active:scale-90 transition-all">
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                  <button 
                    onClick={() => { addToCart(selectedItem); navigateToCart(); }}
                    className="w-full md:flex-1 h-14 bg-gradient-to-r from-primary to-primary-container rounded-full flex items-center justify-between px-8 shadow-[0_8px_24px_rgba(156,63,0,0.3)] active:scale-[0.97] transition-all"
                  >
                    <span className="font-headline font-extrabold text-white text-lg">Add to Cart</span>
                    <div className="flex items-center gap-3">
                      <span className="w-px h-6 bg-white/20"></span>
                      <span className="font-headline font-black text-white text-2xl">${selectedItem.price.toFixed(2)}</span>
                    </div>
                  </button>
                </div>
              </footer>
            </motion.div>
          )}

          {currentView === 'cart' && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <section className="space-y-4">
                <div className="flex items-end justify-between">
                  <h2 className="text-xl font-extrabold font-headline tracking-tight">Your Selection</h2>
                  <span className="text-secondary text-sm font-bold font-headline">{cart.length} Items</span>
                </div>
                <div className="space-y-3">
                  {cart.length > 0 ? cart.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg shadow-sm">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-on-surface font-headline">{item.name}</h3>
                        <p className="text-xs text-on-surface-variant font-medium">Standard Preparation</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                          <div className="flex items-center gap-3 bg-surface-container-low px-2 py-1 rounded-full">
                            <button className="text-secondary"><Minus className="w-4 h-4" /></button>
                            <span className="text-xs font-bold font-headline">1</span>
                            <button className="text-secondary"><Plus className="w-4 h-4" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-12 text-outline">Your cart is empty</div>
                  )}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary-container/30 p-5 rounded-lg border-2 border-secondary/20 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary">Fulfillment</span>
                      <Bike className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg font-headline">Pickup at Gate 1</h3>
                    <p className="text-sm text-secondary font-medium mt-1">Ready in 15-20 mins</p>
                  </div>
                </div>
                <div className="bg-tertiary-container/20 p-5 rounded-lg border-2 border-tertiary/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-on-tertiary-container">Campus Perk</span>
                    <School className="w-5 h-5 text-tertiary" />
                  </div>
                  <label className="block text-xs font-bold mb-2 text-on-tertiary-container">Student ID Number</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-secondary placeholder:text-outline-variant/50" placeholder="e.g. 8820491" type="text"/>
                  <p className="text-[10px] mt-2 text-tertiary font-medium">Verified ID gives 15% off today!</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-extrabold font-headline tracking-tight">Payment Method</h2>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-on-surface text-surface active:scale-95 duration-200 transition-transform">
                    <Smartphone className="w-5 h-5" />
                    <span className="font-bold text-sm font-headline">Apple Pay</span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-high text-on-surface border-2 border-transparent hover:border-outline-variant active:scale-95 duration-200 transition-transform">
                    <CreditCard className="w-5 h-5" />
                    <span className="font-bold text-sm font-headline">Credit Card</span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-high text-on-surface border-2 border-transparent hover:border-outline-variant active:scale-95 duration-200 transition-transform">
                    <Wallet className="w-5 h-5" />
                    <span className="font-bold text-sm font-headline">Pulse Credits</span>
                  </button>
                </div>
              </section>

              <section className="bg-surface-container-low p-6 rounded-lg space-y-3">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="text-on-surface">${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-on-surface-variant">Service Fee</span>
                  <span className="text-on-surface">$1.50</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-tertiary">
                  <span className="font-bold italic">Student Discount (15%)</span>
                  <span className="font-bold">-${(cart.reduce((acc, item) => acc + item.price, 0) * 0.15).toFixed(2)}</span>
                </div>
                <div className="h-px bg-outline-variant/20 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-extrabold font-headline">Total</span>
                  <span className="text-2xl font-black font-headline text-primary">
                    ${(cart.reduce((acc, item) => acc + item.price, 0) * 0.85 + 1.5).toFixed(2)}
                  </span>
                </div>
              </section>

              <div className="fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-md px-6 pb-10 pt-4 z-50 shadow-[0_-8px_32px_0_rgba(74,37,6,0.06)]">
                <div className="max-w-2xl mx-auto flex items-center justify-between gap-6">
                  <div className="hidden md:block">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Estimated Arrival</p>
                    <p className="font-extrabold text-on-surface">12:45 PM - 1:00 PM</p>
                  </div>
                  <button className="flex-grow bg-gradient-to-r from-primary to-primary-container text-white py-4 px-8 rounded-full flex items-center justify-center gap-3 active:scale-95 transition-transform group">
                    <span className="font-black font-headline text-lg uppercase tracking-tight">Confirm Order</span>
                    <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Nav Bar */}
      {currentView !== 'item' && currentView !== 'cart' && (
        <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-[3rem] bg-background/80 backdrop-blur-md shadow-[0_-8px_32px_0_rgba(74,37,6,0.06)] px-4 pb-6 pt-2 flex justify-around items-center">
          <button 
            onClick={() => setCurrentView('home')}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-150",
              currentView === 'home' ? "bg-primary text-white rounded-full px-5 py-2 scale-105" : "text-on-surface opacity-70 hover:opacity-100"
            )}
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface opacity-70 hover:opacity-100 transition-opacity">
            <Search className="w-6 h-6" />
            <span className="text-xs font-semibold">Search</span>
          </button>
          <button 
            onClick={navigateToCart}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-150",
              currentView === 'restaurant' ? "bg-primary text-white rounded-full px-5 py-2 scale-105" : "text-on-surface opacity-70 hover:opacity-100"
            )}
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-background">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="text-xs font-semibold">Orders</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface opacity-70 hover:opacity-100 transition-opacity">
            <User className="w-6 h-6" />
            <span className="text-xs font-semibold">Profile</span>
          </button>
        </nav>
      )}

      {/* Floating Order Status (Home only) */}
      {currentView === 'home' && cart.length > 0 && (
        <div className="fixed bottom-28 left-6 right-6 z-40">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-tertiary-container text-on-tertiary-container p-4 rounded-xl shadow-2xl flex items-center justify-between border-2 border-on-tertiary-container/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center text-tertiary-container">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <p className="font-headline font-bold text-sm">Delivery arriving soon</p>
                <p className="text-[10px] font-medium opacity-80 uppercase tracking-wide">Burger King • 3 mins away</p>
              </div>
            </div>
            <button className="bg-on-tertiary-container text-tertiary-container px-4 py-2 rounded-lg font-label text-[10px] font-bold uppercase tracking-widest">Track</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
