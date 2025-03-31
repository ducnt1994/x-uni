'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-uni-red backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/X-Uni-primary-horizontal-logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="mr-2"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('courses')}
              className="text-white hover:text-uni-orange-500 transition-colors"
            >
              Khóa học
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-uni-orange-500 transition-colors"
            >
              Đánh giá
            </button>
            <button
              onClick={() => scrollToSection('teachers')}
              className="text-white hover:text-uni-orange-500 transition-colors"
            >
              Giảng viên
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-uni-orange-500 transition-colors"
            >
              Liên hệ
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div
            className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo/X-Uni-primary-horizontal-logo.png"
                    alt="Logo"
                    width={100}
                    height={40}
                    className="mr-2"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 p-4 space-y-4 bg-white">
                <button
                  onClick={() => scrollToSection('courses')}
                  className="block w-full text-left text-gray-600 hover:text-uni-orange-500 transition-colors py-2"
                >
                  Khóa học
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left text-gray-600 hover:text-uni-orange-500 transition-colors py-2"
                >
                  Đánh giá
                </button>
                <button
                  onClick={() => scrollToSection('teachers')}
                  className="block w-full text-left text-gray-600 hover:text-uni-orange-500 transition-colors py-2"
                >
                  Giảng viên
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-gray-600 hover:text-uni-orange-500 transition-colors py-2"
                >
                  Liên hệ
                </button>
              </nav>
            </div>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header 