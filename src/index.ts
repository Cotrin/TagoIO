
import { gql, request } from 'graphql-request';

import { SpaceXResponse } from "./@types/SpaceXResponse";
import { writeShipsCSV } from "./components/WriteCSV";


async function main() {
    const url = 'https://api.spacex.land/graphql'
    const query = gql`{
      ships {
        active
        name
        missions {
          name
          flight
        }
      }
    }`

    
    try {
        console.log('Fetching data from SpaceX...')
        
        const graphqlResponse = await request<SpaceXResponse>(url, query)
        
        const { ships } = graphqlResponse

        writeShipsCSV(ships)
        
    } catch (error) {
        console.error(`Error fetching data from ${url}`)
        console.error(error)
    }
}
main()
