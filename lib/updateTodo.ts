import { supabase } from "@/lib/supabase";
import type { Todo } from "@/lib/types";

export const updateTodo = async (id: string, title: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("todos")
    .update({ title })
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) {
    console.error("TODO の更新に失敗しました:", error.message);
    return null;
  }

  return data as Todo;
};
