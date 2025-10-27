import { FragranceProductCard } from '@/components/FragranceProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { ScentFamilyChips } from '@/components/ScentFamilyChips'
import { GiftSetsSection } from '@/components/GiftSetsSection'
import { ScentGuideSection } from '@/components/ScentGuideSection'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'
import { Sparkles } from 'lucide-react'

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    loading,
    filteredProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
      className="bg-cream"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Scent Family Chips */}
      <ScentFamilyChips />

      {/* Featured Products Section */}
      <section id="products-section" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-gold text-sm font-medium">Handcrafted Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight mb-4">
              Our Signature Fragrances
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Each scent is carefully crafted with premium ingredients to create an unforgettable sensory experience
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-stone/20 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <FragranceProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-charcoal/70">
                No products available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gift Sets Section */}
      <GiftSetsSection />

      {/* Scent Guide Section */}
      <ScentGuideSection />

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Join Our Scent Community
          </h2>
          <p className="text-stone text-lg mb-8">
            Subscribe to receive exclusive offers, new fragrance launches, and scenting tips
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full bg-cream text-midnight border-2 border-transparent focus:border-gold focus:outline-none"
            />
            <button className="gradient-gold text-midnight font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};