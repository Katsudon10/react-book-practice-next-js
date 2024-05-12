import { getAllReviews } from '@/lib/getter';
import LinkedBookDetails from '@/components/LinkedBookDetails';

export const dynamic = 'force-dynamic';
export default async function Home() {
  const reviews = await getAllReviews();
  console.log(reviews);
  return (
    <>
      {reviews.map((b,i) => (
        <LinkedBookDetails key={b.id} index={i+1} book={b} />
      ))}
    </>
  );
}
