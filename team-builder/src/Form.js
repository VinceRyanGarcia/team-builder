import React from 'react'

export default function Form(props){
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
    const { values, update, submit } = props

    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
                <label>
                    Username
                    <input
                        name='username'
                        type='text'
                        placeholder='username'
                        value={values.username}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Email
                    <input
                        name='email'
                        type='email'
                        onChange={onChange}
                        placeholder='Email address'
                        maxLength='30'
                        value={values.email}
                    />
                </label>

                <label>
                    Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>----Select A Role----</option>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <option value='C'>C</option>
                    </select>
                </label>
                <div className="submit">
          <button>submit</button>
        </div>
                
            </div>
            

        </form>
    )
}