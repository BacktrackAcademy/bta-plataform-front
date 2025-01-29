export interface Current {
  user: User
}

export interface User {
  id: number
  name: string
  email: string
  username: string
  remember_created_at: null
  sign_in_count: number
  current_sign_in_at: Date
  last_sign_in_at: Date
  current_sign_in_ip: string
  last_sign_in_ip: string
  lastname: string
  role_id: number
  aboutme: string
  points: null
  photo_url: string
  wizard: boolean
  facebook_url: string
  twitter_url: string
  linkedin_url: string
  studies: string
  job: string
  ranking: number
  country_id: number
  process: string
  customer_status: string
  invite_ready: null
  opportunities: number
  skills: string[]
  role: string
  rut: string
  contact: string
  address: string
  city: string
  minutes_studied: number
  birthdate: Date
  current_degree: string
  user_type: string
  terms_and_conditions: boolean
  postal_code: null
  company_id: null
  courses_free: CoursesFree
  allow_search: boolean
  segment: string
  permission_degrees: any[]
  vouchers: number
  number_followers: number
  number_followeds: number
  education_id: null
  education_type: string
  actual_position: null
  public_profile: null
  verified: null
  responsable_id: null
  headline: string
  number_post: number
  avatar_url: string
  avatar_url_medium: string
  avatar_url_sidebar: string
  avatar_url_small: string
  avatar_url_thumb: string
  avatar_url_mini: string
}

export interface CoursesFree {
}
