
export default function ReviewsList({ reviews }) {
    return (
        <ul>
            {reviews && reviews.map(review => {
                const { content, id, author } = review;
                return <li key={id} >
                    <p>{author}</p>
                    <span>{content}</span>
                </li>
            })}
            
        </ul>
    )
}