export interface CoursesResponse {
  courses: Course[]
  pagination: Pagination
}

export interface Course {
  id: number
  titulo: string
  descripcion: string
  created_at: string
  updated_at: string
  user_id: number
  is_free: boolean
  shortdes: string
  level_id: number
  price: number
  is_active: boolean
  slug: string
  is_notified: boolean
  coming_soon: boolean
  category_id: number
  primary_color: string
  metatag: string
  pageviews: number
  students: number
  number_videos: number
  outdated: boolean
  timer: string
  total_duration_text: string
  total_duration_seconds: number
  teacher: {
    name: string
    lastname: string
    username: string
    aboutme: string
    ranking: number
    headline: string
    avatar_url: string
    avatar_url_sidebar: string
  }
  image_thumb: string
  level_name: string
}

export interface Pagination {
  current_page: number
  per_page: number
  total_entries: number
  total_pages: number
}
