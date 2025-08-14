export default function Books({list}){
    return (
        <>
            {list.map(book=>(
                <li>{book}</li>
            ))}
        </>
    );
}