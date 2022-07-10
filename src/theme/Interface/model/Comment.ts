export type Comment = {
  id: string;
  name: string;
  time: string;
  comment: string;
  img: string;
  like: number;
  dislike: number;
  reply: Array<Comment>;
};
