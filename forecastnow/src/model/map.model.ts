export interface map {
    parameters: Parameters
    data: Data
  }
  
  export interface Parameters {
    lat: number
    lng: number
    width: number
    height: number
    distance: number
    distance_unit: string
    query: string
    match_by: string
    match_value: string
  }
  
  export interface Data {
    points: number
    found: number
    found_top_10: number
    found_top_3: number
    rank_percent: number
    rank_percent_top_10: number
    rank_percent_top_3: number
    average_rank: number
    average_rank_top_10: number
    average_rank_top_3: number
    results: Result[]
  }
  
  export interface Result {
    lat: number
    lng: number
    found: boolean
    rank: number
    count: number
    results_url: string
    results: Result2[]
  }
  
  export interface Result2 {
    rank: number
    placeId: string
    name: string
    lat: number
    lng: number
    sab: boolean
    address: string
    country: string
    reviews: number
    rating: number
    phone?: string
    page: string
    domain: string
    timezone: string
    categories: string[]
    hours: [string, string[]][]
    logo: string
    photos: string[]
    maps_url: string
    booking_url: string
    localguide_url: string
  }
  