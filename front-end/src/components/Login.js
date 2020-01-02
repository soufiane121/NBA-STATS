import React from 'react'

class Login extends React.Component {

    render(){
      console.log(this.props);
      
        return(
            <div className="login-page">
              <div className="form">
                <p className="message"></p>
               <form className="login-form" onSubmit={this.props.handleCreateUser}>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login / Create</button>
                {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
               </form>
                <h3>{this.props.errorMessag !== null ? this.props.errorMessag : ""}</h3>
              </div>
            </div>
        )
    }
}

export default Login;