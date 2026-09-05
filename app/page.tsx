import AuthGate from "@/components/AuthGate";

export default function Home() {
  return (
    <main className="app">
      <h2>TODO アプリ</h2>
      <AuthGate />
    </main>
  );
}
