'use client'
import Image from 'next/image'
import { ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import RegisterDialog from './RegisterDialog'
import { useInView } from '@/hooks/useInView'

const courses = [
  {
    id: 1,
    title: 'Lập trình cơ bản',
    description: 'Học cách xây dựng giao diện web modern với HTML, CSS, JavaScript và React',
    duration: '3 tháng',
    level: 'Cơ bản đến nâng cao',
    price: '6.900.000đ',
    image: '/images/course/course-1.webp'
  },
  {
    id: 2,
    title: 'Lập trình Backend với Node.js',
    description: 'Phát triển server-side applications với Node.js, Express và MongoDB',
    duration: '4 tháng',
    level: 'Trung cấp',
    price: '8.900.000đ',
    image: '/images/course/course-2.webp'
  },
  // {
  //   id: 3,
  //   title: 'UI/UX Design',
  //   description: 'Học thiết kế giao diện người dùng và trải nghiệm người dùng chuyên nghiệp',
  //   duration: '3 tháng',
  //   level: 'Cơ bản',
  //   price: '7.900.000đ',
  //   image: '/images/course-3.jpg'
  // },
  // {
  //   id: 4,
  //   title: 'Data Science Cơ bản',
  //   description: 'Nhập môn về khoa học dữ liệu với Python và các thư viện phân tích dữ liệu',
  //   duration: '4 tháng',
  //   level: 'Cơ bản đến trung cấp',
  //   price: '9.900.000đ',
  //   image: '/images/course-4.jpg'
  // }
]

const Courses = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })

  const handleRegister = (courseTitle: string) => {
    setSelectedCourse(courseTitle)
    setIsDialogOpen(true)
  }

  return (
    <section 
      id="courses" 
      className="py-20 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-uni-red mb-4">
            Các khóa học tại X-Uni
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Các khóa học được thiết kế để giúp bạn có được tư duy lập trình cũng như kỹ năng trọng tâm để trở thành một lập trình viên chuyên nghiệp sớm nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-1000 transform ${
                isSectionInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-uni-red mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <AcademicCapIcon className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{course.level}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-uni-orange-500">
                    {course.price}
                  </span>
                  <button 
                    onClick={() => handleRegister(course.title)}
                    className="px-6 py-2 bg-gradient-to-r from-uni-red to-uni-orange-500 text-white rounded-lg hover:bg-uni-orange-600 transition-colors cursor-pointer"
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <RegisterDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Đăng ký khóa học"
          selectedCourse={selectedCourse}
        />
      </div>
    </section>
  )
}

export default Courses 