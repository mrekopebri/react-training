import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import BookCard from '../components/BookCard';
import Layout from '../components/Layout';

const ContainerDetail = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
const Header =  styled.div`
  display: flex;
  justify-content: space-between;
`
const Summary = styled.div``

const Button  = styled.button`
  background: #0098F1;
  border: 0;
  border-radius: 17px;
  width: 240px;
  height: 53px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  cursor: pointer;

  color: #FFFFFF;
`
const HeaderDescription = styled.div`
  display: flex;
`

const Description = styled.div`
`


const BookDetail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3002/books/${id}`).then(response => {
      setBook(response.data);
    })
  }, []);

  const loanBook = () => {
    if (book.stock === 0) return;
    axios.patch(`http://localhost:3002/books/${id}`, 
      {
        ...book, 
        stock: book.stock - 1,
        isLoan: true
      }
    );

    history.push('/loanList');
  }
  return (
    <Layout>
      <ContainerDetail>
        <Header>
          <HeaderDescription>
            <BookCard id={book.id} title={book.title} imageUrl={book.imageUrl} />
            <Description>
              <div>Title: {book.title}</div>
              <div>Year: {book.year}</div>
              <div>Author: {book.author}</div>
              <div>Stock: {book.stock}</div>
              <div>Rating: {book.rating}</div>
            </Description>
          </HeaderDescription>
          <div>
            <Button onClick={loanBook}>Request Loan</Button>
          </div>
        </Header>
        <Summary>
          <h3>Summary</h3>
          <p>{book.description}</p>
        </Summary>
      </ContainerDetail>
    </Layout>
  );
};

export default BookDetail;
