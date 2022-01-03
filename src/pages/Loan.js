import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Layout from '../components/Layout';

const Loan = () => {
  const [list, setList] = useState([]);
  const [books, setBook] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3002/loanList`)
      .then(res => setList(res.data));
    
    axios.get(`http://localhost:3002/books`)
    .then(res => setBook(res.data));
  }, [])

  const getTitle = (id) => {
      const result = books.find(book => book.id === id);
      if(result) return result.title;

      return "undefined";
  }
  return (
    <Layout>
      <div>
        <h3>Your Loan List Information</h3>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Loan Date</td>
              <td>Return Date</td>
            </tr>
          </thead>
          <tbody>
            {list && list.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{getTitle(book.bookId)}</td>
                <td>{book.loanDate}</td>
                <td>{book.returnDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Loan;
