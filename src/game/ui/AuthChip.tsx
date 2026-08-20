import { Link } from "@tanstack/react-router";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { UserButton } from "@/lib/auth/gates";

export function AuthChip() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="h-9 w-9 animate-pulse rounded-full bg-paper/20" />;
  }
  if (user) return <UserButton />;
  return (
    <Link
      to="/login"
      className="rounded-sheet border border-gold/50 bg-navy/90 px-3 py-1.5 font-serif text-xs tracking-wider text-gold-soft"
    >
      サインイン
    </Link>
  );
}
