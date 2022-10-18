import React from 'react';
import BasicExample from '../../components/modal/toast';
import QuestionForm from '../../components/question-form/question-form';
import QuestionList from '../../components/question-list/question-list';
import "./admin.css";

function Admin() {
  return (
    <div className="admin-container">
        <QuestionList />
        <BasicExample />
    </div>
  )
}

export default Admin
