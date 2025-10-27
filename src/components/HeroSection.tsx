import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1602874801006-e24b3a99f88a?w=1920&h=1080&fit=crop" 
          alt="Luxury candles and diffusers"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/60 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-gold text-sm font-medium">Handcrafted Luxury Fragrances</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-tight">
            Scent Your
            <span className="block text-gradient-gold">Sacred Spaces</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover artisanal candles and diffusers crafted to transform your home into a sensorial sanctuary. Each fragrance tells a story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-gold text-midnight font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity"
              onClick={scrollToProducts}
            >
              Find Your Note
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gold text-gold hover:bg-gold hover:text-midnight px-8 py-6 text-lg transition-all"
              onClick={() => {
                const guideSection = document.getElementById('scent-guide')
                if (guideSection) {
                  guideSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Explore Scent Guide
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-sage/10 rounded-full blur-2xl animate-pulse delay-700" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  )
}