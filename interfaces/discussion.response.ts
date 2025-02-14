export interface DiscussionResponse {
  data: Datum[]
  current_page: number
  per_page: number
  total_pages: number
  total_items: number
}

export interface Datum {
  id: number
  detail_id: number | null
  user_id: number
  title: string
  body: string
  state: null
  visitors: number
  created_at: string
  updated_at: Date
  course_id: null
  answers_count: number
  slug: string
  last_comment_at: Date
  resolved_at: Date | null
  is_public: IsPublic
  category_id: number
  deleted_at: null
  likes_count: number
  user: User
}

export enum IsPublic {
  Published = 'published',
}

export interface User {
  id: number
  name: string
  username: string
  lastname: string
}
