export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 p-8 overflow-auto">
      {children}
    </div>
  );
}
