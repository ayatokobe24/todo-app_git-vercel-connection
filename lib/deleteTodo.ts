import { supabase } from "@/lib/supabase";

export const deleteTodo = async (id: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    console.error("TODO の削除に失敗しました:", error.message);
    return false;
  }

  return true;
};
