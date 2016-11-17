export function selectBook(book) {
  // action always returns a type and sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
