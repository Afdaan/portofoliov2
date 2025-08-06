// Lightweight replacement for Loader component
// Minimal loading indicator for better performance

interface LoaderProps {
  isLoading?: boolean
  onComplete?: () => void
}

const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Simple CSS spinner */}
        <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export default Loader
