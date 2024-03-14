import React from 'react'
import Form from 'react-bootstrap/Form';

const Question = () => {
  return (
    <div className='container'>
        
        <div className='question_box'>
            <h2>Question 1</h2>
            <h3>Which of the following methods is used to access HTML elements using Javascript?</h3>
            <h5>Please select your answer:</h5>
            <div className='choose_box'>
                <div className='ques'>
                    <div className='ckeck_box'>
                    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="getElementbyId()"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="getElementsByClassName()"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Both A and B"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="None of the above"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question