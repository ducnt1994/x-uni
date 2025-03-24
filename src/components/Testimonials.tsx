import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    content: "Khóa học Frontend của EduCenter đã giúp tôi từ một người không biết gì về lập trình web trở thành một developer chuyên nghiệp. Giảng viên nhiệt tình và kiến thức rất thực tế.",
    name: "Nguyễn Văn A",
    role: "Frontend Developer tại Tech Corp",
    image: "/images/review/review-avt-1.jpg"
  },
  {
    id: 2,
    content: "Tôi đã học được rất nhiều từ khóa học UI/UX Design. Phương pháp giảng dạy dễ hiểu và có nhiều bài tập thực hành giúp tôi nắm vững kiến thức.",
    name: "Trần Thị B",
    role: "UI/UX Designer tại Design Studio",
    image: "/images/review/review-avt-2.jpg"
  },
  {
    id: 3,
    content: "Chất lượng đào tạo tại EduCenter rất tốt. Tôi đặc biệt ấn tượng với việc được thực hành trên các dự án thực tế và nhận được sự hỗ trợ tận tình từ các mentor.",
    name: "Lê Văn C",
    role: "Backend Developer tại Startup X",
    image: "/images/review/review-avt-3.png"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Học viên nói gì về chúng tôi
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-uni-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những chia sẻ chân thực từ các học viên đã tham gia khóa học tại EduCenter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-8">
                <svg className="w-8 h-8 text-uni-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 italic relative">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-uni-orange-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-8">
                <svg className="w-8 h-8 text-uni-orange-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 