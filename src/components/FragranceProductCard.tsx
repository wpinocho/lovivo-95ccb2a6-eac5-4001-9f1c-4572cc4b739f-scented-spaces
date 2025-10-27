import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"
import { Flame, Wind } from "lucide-react"

interface FragranceProductCardProps {
  product: Product
}

export const FragranceProductCard = ({ product }: FragranceProductCardProps) => {
  const isCandle = product.title.toLowerCase().includes('candle')
  const isDiffuser = product.title.toLowerCase().includes('diffuser')

  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="group bg-white border-2 border-stone/30 hover:border-gold transition-all duration-300 hover:shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="relative aspect-square bg-cream overflow-hidden">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <>
                    <img
                      src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                      alt={logic.product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone">
                    No image
                  </div>
                )}

                {/* Product Type Badge */}
                <div className="absolute top-3 left-3">
                  {isCandle && (
                    <div className="flex items-center gap-1 bg-gold/90 text-midnight px-3 py-1 rounded-full text-xs font-semibold">
                      <Flame className="h-3 w-3" />
                      Candle
                    </div>
                  )}
                  {isDiffuser && (
                    <div className="flex items-center gap-1 bg-sage/90 text-cream px-3 py-1 rounded-full text-xs font-semibold">
                      <Wind className="h-3 w-3" />
                      Diffuser
                    </div>
                  )}
                </div>

                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {logic.discountPercentage && (
                    <span className="bg-plum text-cream text-xs px-3 py-1 rounded-full font-semibold">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-gold text-midnight text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-charcoal text-cream text-xs px-3 py-1 rounded-full font-semibold">
                      Out of stock
                    </span>
                  )}
                </div>
              </div>
            </Link>

            <div className="p-5">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="text-midnight font-serif font-semibold text-lg mb-2 line-clamp-1 group-hover:text-gold transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="mb-4 space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-semibold text-charcoal mb-1 uppercase tracking-wide">
                        {opt.name}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-7 w-7 rounded-full border-2 ${
                                  isSelected ? 'border-gold ring-2 ring-gold/30' : 'border-stone'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border-2 rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                                isSelected 
                                  ? 'border-gold bg-gold text-midnight' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-stone/30 bg-white text-charcoal/40'
                                    : 'border-stone/50 bg-white text-charcoal hover:border-gold'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-midnight font-bold text-xl">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-charcoal/50 text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="gradient-gold text-midnight font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {logic.inStock ? 'Add to Cart' : 'Out of stock'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}