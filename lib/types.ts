export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
  user_id: string;
  priority: number;
};

export type PrioritySort = "high" | "low";
export type TodoFilterValue = "all" | "active" | "completed";
