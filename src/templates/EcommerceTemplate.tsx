import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { useCart } from '@/contexts/CartContext'
import { useCartUI } from '@/components/CartProvider'
import { ProfileMenu } from '@/components/ProfileMenu'

interface EcommerceTemplateProps {
  children: ReactNode
}

export const EcommerceTemplate = ({ children }: EcommerceTemplateProps) => {
  const { getTotalItems } = useCart()
  const { openCart } = useCartUI()
  const totalItems = getTotalItems()

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-stone/20 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <BrandLogoLeft />
              <nav className="hidden md:flex items-center gap-6">
                <Link 
                  to="/" 
                  className="text-sm font-medium text-charcoal hover:text-gold transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-sm font-medium text-charcoal hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-2">
              <ProfileMenu />
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-midnight text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-midnight text-cream border-t border-stone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <BrandLogoLeft />
              <p className="mt-4 text-stone text-sm max-w-md">
                Handcrafted luxury fragrances to transform your spaces into sensorial sanctuaries.
              </p>
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-stone">
                <li>
                  <Link to="/" className="hover:text-gold transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gold transition-colors">
                    Candles
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gold transition-colors">
                    Diffusers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gold transition-colors">
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-stone">
                <li>
                  <Link to="/about" className="hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-gold transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-stone/20 text-center text-sm text-stone">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingCart />
    </div>
  )
}