export type Mission = {
    name: string;
    flight: string
}

export type Ship = {
    active: boolean
    missions: Mission[]
    name: string
}

export interface SpaceXResponse {
    ships: Ship[]
}