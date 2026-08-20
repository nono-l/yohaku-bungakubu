import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-navy text-paper">
      <img
        src="/game/bg/title.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-b from-navy/40 via-navy/70 to-navy" />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center gap-6 px-6 py-12">
        <div>
          <p className="font-serif text-sm tracking-[0.35em] text-gold">MARGINS</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-paper text-balance">
            余白に、名前を残す
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-paper-3">
            Google または X で入ると、セーブがサーバーに残ります。
            ゲストのまま部室に入ることもできます（その場合はこの端末だけ）。
          </p>
        </div>
        {authEnabled ? (
          <div className="space-y-3">
            {GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="w-full rounded-sheet border border-gold/40 bg-paper/95 px-4 py-3 font-serif text-ink transition hover:bg-paper"
              >
                {p.label} で続ける
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-paper-3">サインインは現在オフです。</p>
        )}
        <Link
          to="/"
          className="text-center font-serif text-sm text-gold-soft underline-offset-4 hover:underline"
        >
          ゲストではじめる
        </Link>
      </div>
    </main>
  );
}
