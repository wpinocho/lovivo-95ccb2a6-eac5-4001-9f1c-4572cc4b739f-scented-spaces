import { useState } from 'react'
import { Flower2, Leaf, Sparkles, Wind } from 'lucide-react'

interface ScentFamily {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

const scentFamilies: ScentFamily[] = [
  {
    id: 'all',
    name: 'All Scents',
    icon: <Sparkles className="h-5 w-5" />,
    color: 'gold',
    description: 'Explore our complete collection'
  },
  {
    id: 'floral',
    name: 'Floral',
    icon: <Flower2 className="h-5 w-5" />,
    color: 'plum',
    description: 'Romantic and delicate'
  },
  {
    id: 'woody',
    name: 'Woody',
    icon: <Leaf className="h-5 w-5" />,
    color: 'sage',
    description: 'Earthy and grounding'
  },
  {
    id: 'fresh',
    name: 'Fresh',
    icon: <Wind className="h-5 w-5" />,
    color: 'sage',
    description: 'Clean and invigorating'
  },
  {
    id: 'warm',
    name: 'Warm',
    icon: <Sparkles className="h-5 w-5" />,
    color: 'gold-dark',
    description: 'Cozy and comforting'
  }
]

interface ScentFamilyChipsProps {
  onSelectFamily?: (familyId: string) => void
}

export const ScentFamilyChips = ({ onSelectFamily }: ScentFamilyChipsProps) => {
  const [selectedFamily, setSelectedFamily] = useState('all')

  const handleSelect = (familyId: string) => {
    setSelectedFamily(familyId)
    if (onSelectFamily) {
      onSelectFamily(familyId)
    }
  }

  const getChipStyles = (family: ScentFamily) => {
    const isSelected = selectedFamily === family.id
    
    const colorMap: Record<string, string> = {
      'gold': isSelected ? 'bg-gold text-midnight border-gold' : 'bg-gold/10 text-gold border-gold/30 hover:bg-gold/20',
      'gold-dark': isSelected ? 'bg-gold-dark text-cream border-gold-dark' : 'bg-gold-dark/10 text-gold-dark border-gold-dark/30 hover:bg-gold-dark/20',
      'plum': isSelected ? 'bg-plum text-cream border-plum' : 'bg-plum/10 text-plum border-plum/30 hover:bg-plum/20',
      'sage': isSelected ? 'bg-sage text-cream border-sage' : 'bg-sage/10 text-sage border-sage/30 hover:bg-sage/20',
    }

    return colorMap[family.color] || colorMap['gold']
  }

  return (
    <div className="py-12 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-3">
            Discover by Scent Family
          </h2>
          <p className="text-stone text-lg">
            Find your perfect fragrance profile
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {scentFamilies.map((family) => (
            <button
              key={family.id}
              onClick={() => handleSelect(family.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full border-2 
                transition-all duration-300 font-medium
                ${getChipStyles(family)}
                transform hover:scale-105 active:scale-95
              `}
            >
              {family.icon}
              <span>{family.name}</span>
            </button>
          ))}
        </div>

        {selectedFamily !== 'all' && (
          <div className="text-center animate-fade-in">
            <p className="text-stone italic">
              {scentFamilies.find(f => f.id === selectedFamily)?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}