import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メンテナンス中 | TODO アプリ",
  description: "ただいまメンテナンスを実施しています",
};

export default function MaintenancePage() {
  return (
    <main className="app">
      <section className="maintenance" aria-labelledby="maintenance-title">
        <p className="maintenance-kicker">SYSTEM NOTICE</p>
        <h1 id="maintenance-title">メンテナンス中</h1>
        <p className="maintenance-lead">
          ただいまクエストボードを整備しています。
        </p>
        <p className="maintenance-copy">
          ご不便をおかけしますが、しばらくしてから再度アクセスしてください。
        </p>
        <div className="maintenance-pipe" aria-hidden="true">
          <span />
        </div>
      </section>
    </main>
  );
}
