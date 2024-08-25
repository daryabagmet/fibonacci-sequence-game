import './polygonItem.css'
import { Item } from '../../context/gameContext'
import { nanoid } from 'nanoid'

const PolygonItem: React.FC<{ item: Item }> = ({ item }) => {
  const value = item?.value
  const icon = item?.icon
  const iconId = nanoid()

  return (
    <div key={`${item.id}-row`} className="flex w-full">
      <span className="font-600 font-xl text-color-grey-300 polygons-index">
        {value}
      </span>
      <div className="flex justify-center flex-wrap w-full polygons-icon">
        {Array.from({ length: value }).map((_, i) => {
          return <span key={`${iconId}-${i}`}>{icon}</span>
        })}
      </div>
    </div>
  )
}

export default PolygonItem
