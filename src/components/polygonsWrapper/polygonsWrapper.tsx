import './polygonsWrapper.css'
import { useContext } from 'react'
import GameContext from '../../context/gameContext'
import PolygonItem from '../polygonItem/polygonItem'

const PolygonsWrapper = () => {
  const { items } = useContext(GameContext)

  return (
    <div className="polygons-wrapper w-full">
      {items.length > 0 &&
        items.map((item, _) => (
          <div
            key={`${item.id}-item`}
            className="polygons-row flex justify-center flex-wrap"
          >
            <PolygonItem key={item.id} item={item} />
          </div>
        ))}
    </div>
  )
}

export default PolygonsWrapper
