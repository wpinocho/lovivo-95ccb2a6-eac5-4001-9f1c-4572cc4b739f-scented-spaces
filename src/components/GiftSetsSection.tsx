import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Gift, Heart, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const giftSets = [
  {
    title: 'Serenity Collection',
    description: 'Calming lavender and ocean breeze for peaceful moments',
    price: '$125',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=600&fit=crop',
    icon: <Heart className="h-6 w-6" />,
    color: 'sage'
  },
  {
    title: 'Warmth Collection',
    description: 'Amber and spiced chai for cozy evenings',
    price: '$135',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=600&fit=crop',
    icon: <Sparkles className="h-6 w-6" />,
    color: 'gold'
  },
  {
    title: 'Botanical Collection',
    description: 'Forest moss and rose garden for nature lovers',
    price: '$140',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=600&fit=crop',
    icon: <Gift className="h-6 w-6" />,
    color: 'plum'
  }
]

export const GiftSetsSection = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
            <Gift className="h-4 w-4 text-gold" />
            <span className="text-gold text-sm font-medium">Curated Collections</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight mb-4">
            Luxury Gift Sets
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto">
            Thoughtfully curated fragrance collections, beautifully packaged for gifting or self-care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {giftSets.map((set, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-2 border-stone/30 hover:border-gold transition-all duration-300 hover:shadow-2xl bg-white"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={set.image} 
                    alt={set.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent" />
                  
                  <div className={`absolute top-4 right-4 p-3 rounded-full bg-${set.color} text-cream`}>
                    {set.icon}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {set.title}
                    </h3>
                    <p className="text-stone text-sm mb-3">
                      {set.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gold">
                        {set.price}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="gradient-gold text-midnight font-semibold px-8 hover:opacity-90 transition-opacity"
            onClick={() => navigate('/')}
          >
            View All Gift Sets
          </Button>
        </div>
      </div>
    </section>
  )
}