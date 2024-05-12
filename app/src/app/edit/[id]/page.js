import BookDetails from "@/components/BookDetails";
import FormEdit from "@/components/FormEdit";
import { getReviewById } from "@/lib/getter";

export default function EditPage({params}){
    const book = getReviewById(params.id);
    const reviews = await getReviewById(params.id);

    const read = (reviews?.read || new Date()).toLocaleDateString('sv-SE');

    return (
        <div id="form">
            <BookDetails book={book} />
            <hr />
            <FormEdit src={{ id: book.id, read, memo: reviews?.memo}} />
        </div>
    );
}