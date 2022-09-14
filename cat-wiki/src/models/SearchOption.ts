export interface SearchOption {
  size?: 'small' | 'med' | 'full'
  mime_types?: 'gif' | 'jpg' | 'png'
  format?: 'json' | 'src'
  order?: 'RANDOM' | 'ASC' | 'DESC'
  page?: number
  limit?: number
  category_ids?: string
  breed_ids?: string
  has_breeds?: 0 | 1
}
// https://documenter.getpostman.com/view/5578104/RWgqUxxh#997f5b37-79cc-49a4-8c11-ddf24b72a4d9
