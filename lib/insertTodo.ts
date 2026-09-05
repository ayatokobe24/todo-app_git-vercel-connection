import { supabase } from "@/lib/supabase";
import { normalizePriority } from "@/lib/priority";
import type { Todo } from "@/lib/types";

export const insertTodo = async (title: string, priority = 1) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("ログインしていません");
  }

  const { data, error } = await supabase
    .from("todos")
    .insert([
      {
        title,
        user_id: user.id,
        completed: false,
        priority: normalizePriority(priority),
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("TODO 追加失敗:", error.message);
    return null;
  }

  return data as Todo;
};
