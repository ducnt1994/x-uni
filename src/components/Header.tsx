'use client'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Tính toán offset cho header
      const headerHeight = 80 // Chiều cao của header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Image src={'/images/logo/big-logo.png'} alt="Logo" width={40} height={40} />
          
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-gray-600 hover:text-uni-orange transition-colors cursor-pointer"
              >
                Khóa học
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-uni-orange transition-colors cursor-pointer"
              >
                Đánh giá
              </button>
              <button 
                onClick={() => scrollToSection('teachers')}
                className="text-gray-600 hover:text-uni-orange transition-colors cursor-pointer"
              >
                Giáo viên
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-uni-orange transition-colors cursor-pointer"
              >
                Liên hệ
              </button>
            </div>
          </div>

          {/* Thêm div trống để cân bằng layout */}
          <div className="w-[40px]"></div>
        </nav>
      </div>
    </header>
  )
}

export default Header 