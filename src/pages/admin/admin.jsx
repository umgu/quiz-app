import React from 'react';
import QuestionForm from '../../components/question-form/question-form';
import QuestionLList from '../../components/question-list/question-list';
import "./admin.css";

function Admin() {

  return (
    <div className="admin-container">
        <QuestionForm />
        <QuestionLList />
    </div>
  )
}

export default Admin
