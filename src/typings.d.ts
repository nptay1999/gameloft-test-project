export interface IPostCard {
  id: number;
  content: string;
  type: 'facebook' | 'twitter' | 'instagram';
  link: string;
  img: string;
}

export interface IEventCard {
  id: number;
  content: string;
  subContent: string;
  link: string;
  img: string;
}
