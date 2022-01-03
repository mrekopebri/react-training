import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard';
import Layout from '../components/Layout';
import Search from '../components/Search';

const BookContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`

const Home = () => {
  const [books, setBooks] = useState([]);
  const [data, setData] = useState([]);
  
  const onSearch = (e) => {
    if(e.target.value.length === 0) setBooks(data);
    setBooks(data.filter(book => book.title.toLowerCase().includes(e.target.value)))
  }

  // Get All list book when access book
  useEffect(() => {
    axios.get('http://localhost:3002/books')
    .then(response => {
      setData(response.data);
      return response.data;
    })
    .then(response => setBooks(response));
  }, [])
  return (
    <Layout>
      <Search onChange={onSearch} />
      <BookContainer>
          {books && books.map(book => (
            <BookCard key={book.id} id={book.id} title={book.title} imageUrl={book.imageUrl} />
          ))}
      </BookContainer>
    </Layout>
  );
};

export default Home;
