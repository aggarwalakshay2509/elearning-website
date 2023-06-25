import React from "react";

const SignupStudent=()=>{
    return (
        <div class="regForm">
        <p class="heading">Student Sign Up</p>
        <form action="#" method="post">
            <input type="text" name="name" id="name" placeholder="Full Name" required/><br/>
            <input type="text" name="contact" id="contact" minlength="10" maxlength="10" placeholder="Contact number" required/><br/>
            <textarea name="address" id="address" cols="30" rows="3" placeholder="Address"></textarea><br/>
            <input type="email" name="email" id="email" placeholder="Email" required/><br/>
            <input type="password" name="password" id="password" placeholder="Password" required/>
            {/* <i class="fa fa-eye" id="togglePassword" style="margin-left: -20px;cursor: pointer;position: relative;left: -30px;"></i> */}
            <br/>
            <button type="submit" class="signBtn">Sign Up</button>
            <p class="terms">By signing in, you agree to <a href="#">terms and conditions</a></p>
        </form>
    </div>
    );
}

export default SignupStudent;