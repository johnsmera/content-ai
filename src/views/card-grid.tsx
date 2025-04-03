import { Card } from "@/components/card"

export const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}