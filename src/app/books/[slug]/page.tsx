import BookDetail from "@/components/BookDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  slug = slug
    .split("%20")
    .filter((sl) => sl !== "%20")
    .join(" ");
  

  return (
    <div className="wrapper p-[3rem_0]">
      <ul className="breadcrumbs pb-[2rem]">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Action and Adventure</li>
        <li className="breadcrumb-item">{slug}</li>
      </ul>
        <BookDetail />
    </div>
  );
}
