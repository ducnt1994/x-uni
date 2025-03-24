import { XMarkIcon } from '@heroicons/react/24/outline'
import { ReactNode, useEffect } from 'react'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const Dialog = ({ isOpen, onClose, title, children }: DialogProps) => {
  useEffect(() => {
    if (isOpen) {
      // Lưu scroll position hiện tại
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Khôi phục scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"
        onClick={onClose}
      />
      
      {/* Dialog Content */}
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl w-full max-w-md relative animate-dialog-fade-in shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-uni-orange-500 transition-colors cursor-pointer"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dialog 