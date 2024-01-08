import './TimeZoneForm.css';

import { useState } from 'react';

function TimeZoneForm(props) {

  const [inputName, setInputName] = useState('');
  const [inputTimeZone, setInputTimeZone] = useState('');

  const onInputNameHandler =(e)=>{
    setInputName(e.target.value) 
  }

  const onInputTimeZoneHandler =(e)=>{
    setInputTimeZone(e.target.value)  
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault();

    const formData = {
      name: inputName,
      timeZone: +inputTimeZone
    }

    props.formDataArray(formData)

    setInputName('');
    setInputTimeZone('')    
  }


  return (
    <form className='form-container' onSubmit={onSubmitHandler}>
      <label className='input-form__container'>
        <div className='input-form__name'>{'Название'}</div>
        <input className='input-form__field' type="text" onChange={onInputNameHandler} value={inputName} required />
      </label>
      <label className='input-form__container'>
          <div className='input-form__name'>{'Временная зона'}</div>
          <input className='input-form__field' type="number" onChange={onInputTimeZoneHandler} value={inputTimeZone} placeholder='Смещение в часах +/-' required />
      </label>
      <button className='form-btn'>{'Добавить'}</button>
    </form>
  )
}

export default TimeZoneForm;
