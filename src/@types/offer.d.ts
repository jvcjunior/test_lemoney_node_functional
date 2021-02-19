interface IOffer {
  id: number,
  advertiser_name: string,
  url: string,
  description: string,
  starts_at: Date,
  ends_at?: Date,
  premium?: string,
}

