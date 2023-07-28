interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div className="relative  flex min-h-screen flex-col overflow-x-hidden">
      {children}
    </div>
  );
}
