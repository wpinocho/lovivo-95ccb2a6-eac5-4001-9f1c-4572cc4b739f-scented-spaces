import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { Sparkles, Heart, Leaf, Award } from 'lucide-react'

const About = () => {
  return (
    <EcommerceTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1920&h=1080&fit=crop" 
            alt="Our story"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/70 to-charcoal/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-gold text-sm font-medium">Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 leading-tight">
            Crafting Moments of
            <span className="block text-gradient-gold">Sensorial Bliss</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto leading-relaxed">
            Every fragrance we create is a journey into the art of scent, designed to transform your spaces into sanctuaries of peace and beauty.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight mb-6">
                Our Mission
              </h2>
              <p className="text-charcoal text-lg mb-6 leading-relaxed">
                We believe that fragrance has the power to transform not just spaces, but moments and memories. Our mission is to craft exceptional candles and diffusers that elevate everyday experiences into something extraordinary.
              </p>
              <p className="text-charcoal text-lg mb-6 leading-relaxed">
                Each product is meticulously handcrafted using premium natural ingredients, sustainable practices, and a deep respect for the art of perfumery. We don't just create scents—we create atmospheres, emotions, and lasting impressions.
              </p>
              <p className="text-charcoal text-lg leading-relaxed">
                From the first spark of inspiration to the final pour, every step of our process is guided by passion, precision, and an unwavering commitment to quality.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=1000&fit=crop" 
                alt="Handcrafted candles"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-midnight p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium">Years of Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our Values
            </h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion",
                description: "Every fragrance is crafted with love and dedication to the art of scent",
                color: "plum"
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Sustainability",
                description: "We use natural ingredients and eco-friendly practices in all our products",
                color: "sage"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality",
                description: "Premium materials and meticulous craftsmanship in every single piece",
                color: "gold"
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Innovation",
                description: "Constantly exploring new scent combinations and techniques",
                color: "gold-dark"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-midnight border-2 border-stone/20 hover:border-gold transition-all duration-300 rounded-2xl p-8 group"
              >
                <div className={`inline-flex p-4 rounded-full bg-${value.color}/20 text-${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-stone leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight mb-4">
              Our Craft
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              From concept to creation, every step is an art form
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Inspiration",
                description: "We draw inspiration from nature, memories, and emotions to create unique scent profiles",
                image: "https://images.unsplash.com/photo-1604762524889-8e6c0c3d1a5c?w=600&h=400&fit=crop"
              },
              {
                step: "02",
                title: "Formulation",
                description: "Master perfumers blend premium essential oils and natural fragrances with precision",
                image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop"
              },
              {
                step: "03",
                title: "Handcrafted",
                description: "Each candle and diffuser is carefully poured and finished by hand with love",
                image: "https://images.unsplash.com/photo-1602874801006-e24b3a99f88a?w=600&h=400&fit=crop"
              }
            ].map((process, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-midnight font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-midnight mb-3">
                  {process.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-stone text-lg mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted candles and diffusers, each designed to create moments of sensorial bliss in your home.
          </p>
          <Button 
            size="lg"
            className="gradient-gold text-midnight font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity"
            onClick={() => window.location.href = '/'}
          >
            Explore Our Collection
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About