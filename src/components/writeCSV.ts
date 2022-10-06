import { stringify } from 'csv-stringify/sync';

import { Ship } from '../@types/SpaceXResponse'


export function writeShipsCSV(ships: Ship[]) {
  const activeShips = ships.filter(ship => ship.active)

  const data = activeShips.map(ship => {
    return {
      active: ship.active,
      ship_name: ship.name,
      mission: ship.missions.at(-1).name
    }
  })

  const csv = stringify(data, { header: true })

  console.table(csv)
  
  return csv
}