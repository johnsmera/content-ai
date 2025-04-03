import { Card } from "@/components/card"

export const CardGrid = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white-800">Últimas Notícias</h2>
        <button
          type="button"
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
        >
          Ver todas
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}