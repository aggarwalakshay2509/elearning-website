import React from "react";

const LoginStudent=()=>{
    return (
        <div class="regForm">
        <i class="fa fa-user userIcon"></i>
        <p class="heading">Student Log In</p>
        <form action="#" method="post">
            <input type="email" name="email" id="email" placeholder="Email" required/><br/>
            <input type="password" name="password" id="password" placeholder="Password" required/>
            {/* <i class="fa fa-eye" id="togglePassword" style="margin-left: -20px;cursor: pointer;position: relative;left: -30px;"></i> */}
            <br/>
            <button type="submit" class="signBtn">Log in</button>
            <p class="terms">By signing in, you agree to <a href="#">terms and conditions</a></p>
        </form>
    </div>
    );
}

export default LoginStudent;