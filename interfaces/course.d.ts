export interface Course {
  id: number
  titulo: string
  descripcion: string
  created_at: Date
  updated_at: Date
  user_id: number
  image_file_name: string
  image_content_type: string
  image_file_size: number
  image_updated_at: Date
  is_free: boolean
  shortdes: string
  level_id: number
  price: number
  is_active: boolean
  slug: string
  is_notified: boolean
  icon_file_name: string
  icon_content_type: string
  icon_file_size: number
  icon_updated_at: Date
  wallpaper_file_name: string
  wallpaper_content_type: string
  wallpaper_file_size: number
  wallpaper_updated_at: Date
  goals: string
  benefits: string
  video_url: string
  order: string
  coming_soon: boolean
  category_id: number
  primary_color: string
  metatag: string
  delivered_at: null
  pageviews: number
  students: number
  degree_id: number
  number_videos: number
  outdated: boolean
  timer: Date
  total_duration_text: string
  total_duration_seconds: number
  syllabus: Syllabus[]
  teacher: Teacher
  icon_thumb: string
  wallpaper_thumb: string
  wallpaper_url: string
  image_thumb: string
  total_length: number
  level_name: string
  count_evaluation: number
  stars_evaluation: number
}

export interface Syllabus {
  id: number
  titulo: string
  descripcion: string
  created_at: Date
  updated_at: Date
  course_id: number
  videos: Video[]
}

export interface Video {
  id: number
  url: string
  created_at: Date
  updated_at: Date
  titlevideo: string
  description: string
  unidad_id: number
  total: string
  is_free: boolean | null
  slug: string
}

export interface Teacher {
  name: string
  username: string
  lastname: string
  aboutme: string
  facebook_url: string
  twitter_url: string
  linkedin_url: string
  studies: string
  ranking: number
  headline: null
  number_post: number
  avatar_url: string
  avatar_url_sidebar: string
}
