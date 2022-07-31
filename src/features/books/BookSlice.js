import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  books: [
    { id: 1, title: 'Harry Potter', author: 'John Doe' },
    { id: 2, title: 'Dark knight', author: 'Lorry Paige' },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;
