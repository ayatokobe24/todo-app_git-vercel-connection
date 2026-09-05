"use client";

import { supabase } from "@/lib/supabase";

export default function UserMenu({
  userEmail,
  onLogout,
}: {
  userEmail?: string | null;
  onLogout?: () => void;
}) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout?.();
  };

  return (
    <div className="user-menu">
      <span>{userEmail}</span>
      <button type="button" onClick={handleLogout}>
        ログアウト
      </button>
    </div>
  );
}
