export interface IPostCard {
  id: number;
  content: string;
  type: 'facebook' | 'twitter' | 'instagram';
  link: string;
  img: string;
}
