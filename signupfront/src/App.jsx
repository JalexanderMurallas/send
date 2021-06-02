import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    
    constructor(){
        super()
        this.state = {
            fullname:'',
            username:'',
            email:'',
            password:'',
            
        }
        
        this.changefullname = this.changefullname.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changepassword = this.changepassword.bind(this)
        
        this.onSubmit = this.onSubmit.bind(this)
    }



    changefullname(event){
        this.setState({
            fullname:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }


    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }

    changepassword(event){
        this.setState({
            password:event.target.value
        })
    }


    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullname:'',
            username:'',
            email:'',
            password:'',

        })
    }

    render(){
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            
                            <input type= 'text'
                            placeholder='Nombre Completo'
                            onChange={this.changefullname}
                            value={this.state.fullname}
                            className='form-control form-group'
                            required
                            />

                            <input type= 'text'
                            placeholder='usuario'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            <input type= 'text'
                            placeholder='E-mail'
                            onChange={this.changeemail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type= 'password'
                            placeholder='Contraseña'
                            onChange={this.changepassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type= 'submit'
                            className='btn btn-danger btn-block'
                            />
                        </form>
                    </div>
                </div>
            </div>
         );
    }
} 
export default App;