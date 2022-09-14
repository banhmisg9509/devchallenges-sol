export interface Image {
  id: string
  url: string
  width: number
  height: number
  mime_type: string
  breeds: [
    {
      id: number
      name: string
    }
  ]
  categories: Array<any>
  breed_ids: string
}
