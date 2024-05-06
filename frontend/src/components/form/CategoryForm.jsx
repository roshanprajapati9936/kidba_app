import React from 'react'
import { Button, Form } from 'react-bootstrap'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <> 
      <Form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input 
            type='text' 
            className='form-control' 
            placeholder='Enter new category' 
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <Button type='submit' className='btn btn-primary'>Submit</Button>
      </Form>
    </>
  )
}

export default CategoryForm;
