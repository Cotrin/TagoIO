import axios from "axios"

type Mission = {
    name: string;
    flight: string
}

type Ship = {
    active: boolean
    missions: Mission[]
    name: string
}

interface SpaceXResponse {
    data: {
        ships: Ship[]
    }
}

async function main() {
    const url = 'https://api.spacex.land/graphql'
    const query = `{
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
        const { data: graphqlResponse } = await axios.post<SpaceXResponse>(
            url,
            { query }
        )

        const { ships } = graphqlResponse.data

        // Status,Ship-Name,Mission (?) Premissa que a ultima missão do array é a missão atual
        let csv = 'Status,Ship-Name,Mission'

        console.log('Writing data into CSV...')

        for (const ship of ships) {
            if (ship.active) {
                const shipMission = ship.missions.at(-1)?.name

                csv += `\n${ship.active},${ship.name},${shipMission}`
            }
        }

        console.log('Data processed successfully...')

        // Console Data
        console.table(csv)

        // Write CSV File manually
        // require("fs").writeFileSync("ships-report.csv", csv)

    } catch (error) {
        console.error(`Error fetching data from ${url}`)
    }
}
main()
