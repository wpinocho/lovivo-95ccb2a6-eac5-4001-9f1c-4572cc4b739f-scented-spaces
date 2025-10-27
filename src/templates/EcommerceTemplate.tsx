import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-midnight/95 backdrop-blur-sm ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-cream/70 hover:text-gold transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-cream/70 hover:text-gold transition-colors font-medium"
              >
                Journal
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative text-cream hover:text-gold hover:bg-gold/10"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-midnight text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-serif font-bold text-cream">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-midnight text-cream py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <BrandLogoLeft />
            <p className="mt-4 text-stone leading-relaxed max-w-md">
              Handcrafted luxury fragrances for your sacred spaces. Each candle and diffuser is made with premium ingredients and designed to transform your home into a sensorial sanctuary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold mb-4 text-gold">Explore</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Shop All
              </Link>
              <Link 
                to="/blog" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Scent Journal
              </Link>
              <Link 
                to="/" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Gift Sets
              </Link>
              <Link 
                to="/" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Scent Guide
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-serif font-semibold mb-4 text-gold">Customer Care</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Shipping Info
              </a>
              <a 
                href="#" 
                className="block text-stone hover:text-gold transition-colors"
              >
                Returns
              </a>
              <a 
                href="#" 
                className="block text-stone hover:text-gold transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-stone/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone text-sm">
              &copy; 2024 Sensorial Home. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}