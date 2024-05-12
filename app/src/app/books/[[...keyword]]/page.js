import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getAllReviews } from "@/lib/getter";

export default async function BookResult ({ params: {keyword='React'}}){
    const books = await getAllReviews();
    return (
        <>
            {books.map((b,i) => (
                <LinkedBookDetails key={b.id} index={i+1} book={b} />
            ))}
        </>
    )
}