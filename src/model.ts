export interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: date;
  updated_at: date;
}