'use client'
import Image from 'next/image'
import { UserGroupIcon, AcademicCapIcon, UserIcon, StarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import RegisterDialog from './RegisterDialog'
import { useInView } from '@/hooks/useInView'

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })

  return (
    <section 
      className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`flex-1 text-center md:text-left transition-all duration-1000 transform ${isSectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Khám phá kiến thức mới cùng các chuyên gia hàng đầu
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Chúng tôi cung cấp các khóa học chất lượng cao, được thiết kế bởi các chuyên gia với nhiều năm kinh nghiệm trong ngành.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="px-8 py-3 bg-uni-orange-500 text-white rounded-full text-lg font-semibold hover:bg-uni-orange-600 transition-colors cursor-pointer"
              >
                Đăng ký ngay
              </button>
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="px-8 py-3 border-2 border-uni-orange-500 text-uni-orange-500 rounded-full text-lg font-semibold hover:bg-uni-orange-500/10 transition-colors cursor-pointer"
              >
                Tư vấn miễn phí
              </button>
            </div>
          </div>
          <div className={`flex-1 relative transition-all duration-1000 transform ${isSectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="w-full h-[400px] relative">
              <Image
                src="/images/banner/banner-1.webp"
                alt="Students learning"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100/50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 transform ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-uni-orange-100 rounded-full flex items-center justify-center">
                <UserGroupIcon className="w-8 h-8 text-uni-orange-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-uni-orange-500 mb-2">1000+</h3>
              <p className="text-gray-600">Học viên</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-uni-orange-100 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-uni-orange-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-uni-orange-500 mb-2">50+</h3>
              <p className="text-gray-600">Khóa học</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-uni-orange-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-8 h-8 text-uni-orange-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-uni-orange-500 mb-2">30+</h3>
              <p className="text-gray-600">Giảng viên</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-uni-orange-100 rounded-full flex items-center justify-center">
                <StarIcon className="w-8 h-8 text-uni-orange-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-uni-orange-500 mb-2">95%</h3>
              <p className="text-gray-600">Đánh giá tích cực</p>
            </div>
          </div>
        </div>

        <RegisterDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Đăng ký tư vấn"
        />
      </div>
    </section>
  )
}

export default Hero 