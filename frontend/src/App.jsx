import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-amber-800 text-white flex flex-col items-center justify-center gap-6">
      
      <h1 className="text-5xl font-bold">
        Newsify 🚀
      </h1>

      <Button className="bg-amber-950">
        shadcn Button
      </Button>

      <Button variant="destructive">
        Breaking News
      </Button>

      <Button variant="outline">
        Explore
      </Button>

    </div>
  )
}

export default App