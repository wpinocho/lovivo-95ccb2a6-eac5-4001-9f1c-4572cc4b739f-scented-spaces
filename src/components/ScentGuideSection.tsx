import { Card, CardContent } from '@/components/ui/card'
import { Home, Bed, Bath, BookOpen } from 'lucide-react'

const spaces = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Living Room',
    scents: ['Citrus Grove', 'White Tea & Ginger'],
    description: 'Fresh and welcoming fragrances for gathering spaces',
    color: 'sage'
  },
  {
    icon: <Bed className="h-8 w-8" />,
    title: 'Bedroom',
    scents: ['Lavender Dreams', 'Midnight Amber'],
    description: 'Calming scents to promote relaxation and rest',
    color: 'plum'
  },
  {
    icon: <Bath className="h-8 w-8" />,
    title: 'Bathroom',
    scents: ['Eucalyptus Mint', 'Ocean Breeze'],
    description: 'Clean, spa-like fragrances for your sanctuary',
    color: 'sage'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Study',
    scents: ['Forest Moss', 'Spiced Chai'],
    description: 'Grounding scents to enhance focus and creativity',
    color: 'gold-dark'
  }
]

export const ScentGuideSection = () => {
  return (
    <section id="scent-guide" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Scent Your Spaces
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            A guide to choosing the perfect fragrance for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, index) => (
            <Card 
              key={index}
              className="bg-midnight border-2 border-stone/20 hover:border-gold transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-4 rounded-full bg-${space.color}/20 text-${space.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {space.icon}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-cream mb-2">
                  {space.title}
                </h3>
                
                <p className="text-stone text-sm mb-4">
                  {space.description}
                </p>

                <div className="space-y-2">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                    Recommended:
                  </p>
                  {space.scents.map((scent, idx) => (
                    <div 
                      key={idx}
                      className="text-cream text-sm bg-charcoal/50 px-3 py-2 rounded-lg"
                    >
                      {scent}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gold/10 via-sage/10 to-plum/10 border-2 border-gold/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4">
            Not sure where to start?
          </h3>
          <p className="text-stone text-lg mb-6 max-w-2xl mx-auto">
            Take our scent quiz to discover your perfect fragrance profile and get personalized recommendations
          </p>
          <button className="gradient-gold text-midnight font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Take the Scent Quiz
          </button>
        </div>
      </div>
    </section>
  )
}