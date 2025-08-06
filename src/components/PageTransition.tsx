"use client"

import { ReactNode, memo } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <div className={`page-transition ${className}`}>
      <style jsx>{`
        .page-transition {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        /* Disable animations on mobile for performance */
        @media (max-width: 768px) {
          .page-transition {
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }
      `}</style>
      {children}
    </div>
  )
}

export default memo(PageTransition)
