import React from 'react'

class Login extends React.Component {

    render(){

        return(
            <div className="login-page">
              <div className="form">
                <p className="message"></p>
               <form className="login-form" onSubmit={this.props.handleCreateUser}>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login / sign up</button>
                {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
               </form>
                <h3>{this.props.errorMessag !== null ? this.props.errorMessag : ""}</h3>
              </div>
            </div>
        )
    }
}

export default Login;