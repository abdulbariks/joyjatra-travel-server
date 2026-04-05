export interface ICreateEventInput {
  name: string;
  description?: string;
  location: string;
  price: number;
  imageUrl?: string;
  startDate: string | Date;
  endDate: string | Date;
  content?: string; // HTML from Jodit
}