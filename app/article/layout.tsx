export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="section">{children}</section>;
}
