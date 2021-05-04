import {useQuery, useMutation , gql} from '@apollo/client';

const GET_BOOK_DETAILS = gql`
  query{
      book{
          name,
          author
      }
  } 
`

const SET_BOOK_DETAILS = gql`
  mutation UpdateBook($name: String!, $author: String!){
      updateBook(name: $name, author: $author){
          name,
          author
      }
  }
`
const BookInfo = () => {
    const {loading, error, data} = useQuery(GET_BOOK_DETAILS);
    const updateCache = (cache, {data: {updateBook}}) => {
        const existingBook = cache.readQuery({
            query: GET_BOOK_DETAILS
        });
        cache.writeQuery({
            query: GET_BOOK_DETAILS,
            data: { book: updateBook },
          });
    }
    const [updateBook] = useMutation(SET_BOOK_DETAILS,{update: updateCache});
    const updateBookDetails = () => {
        updateBook({
            variables:{name: "Something", author: "Deepak"}
        })
    }
    if(loading) return <div>...Loading</div>
    if(error) return <div>Something went wrong</div>
    return (
        <>
            <div>{data.book.name} by {data.book.author}</div>
            <button onClick={() => updateBookDetails()}>Update</button>
        </>
    )
}

export default BookInfo;