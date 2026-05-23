export type Emotion = "smile" | "sleeping" | "puke" | "angry";

export interface TComment {
  id: number;
  author: string;
  comment: string;
  date: string;
  emotion: Emotion;
}
