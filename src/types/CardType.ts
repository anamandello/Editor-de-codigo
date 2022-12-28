export type CardType = {
  id?: number
  language: string
  color: string
  title: string
  body: string
  description: string
  like: number
  comments: number
  author: {
    name: string
    img: string
  }
}