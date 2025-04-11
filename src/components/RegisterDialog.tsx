'use client'
import { useState } from 'react'
import Dialog from './Dialog/Dialog'

interface FormData {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  course: '',
  message: ''
}

interface RegisterDialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  selectedCourse?: string
}

const RegisterDialog = ({ isOpen, onClose, title = 'Đăng ký tư vấn', selectedCourse = '' }: RegisterDialogProps) => {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    course: selectedCourse
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      "text": "New Paid Time Off request from Fred Enriquez",
      "blocks": [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Người đăng ký mới",
            "emoji": true
          }
        },
        {
          "type": "section",
          "fields": [
            {
              "type": "mrkdwn",
              "text": `*Tên:*\n${formData.name}`
            },
            {
              "type": "mrkdwn",
              "text": `*Email:*\n${formData.email}`
            }
          ]
        },
        {
          "type": "section",
          "fields": [
            {
              "type": "mrkdwn",
              "text": `*SDT:*\n${formData.phone}`
            },
            {
              "type": "mrkdwn",
              "text": `*Khoá học đăng ký:*\n${formData.course}`
            }
          ]
        },
        {
          "type": "section",
          "fields": [
            {
              "type": "mrkdwn",
              "text": `*Note:*\n${formData.message}`
            }
          ]
        }
      ]
    }
    // fetch to slack
    try {
      await fetch(process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL as string, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      onClose()
      setFormData(initialFormData)
    } catch (e) {
      console.error(e)
      alert('Đã có lỗi xảy ra, vui lòng thử lại sau')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uni-orange-500 focus:border-uni-orange-500"
            placeholder="Nhập họ và tên của bạn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uni-orange-500 focus:border-uni-orange-500"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uni-orange-500 focus:border-uni-orange-500"
            placeholder="0123456789"
          />
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
            Khóa học quan tâm
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uni-orange-500 focus:border-uni-orange-500"
          >
            <option value="">Chọn khóa học</option>
            <option value="basic">Lập trình cơ bản</option>
            <option value="ios">Lập trình IOS</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Lời nhắn
          </label>
          <textarea
            maxLength={500}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uni-orange-500 focus:border-uni-orange-500"
            placeholder="Nhập lời nhắn của bạn (không bắt buộc)"
          />
          <label className={`text-xs flex justify-end`}>{formData.message.length}/500</label>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-uni-orange-500 text-white rounded-lg font-semibold hover:bg-uni-orange-600 transition-colors cursor-pointer"
        >
          Gửi thông tin
        </button>
      </form>
    </Dialog>
  )
}

export default RegisterDialog 