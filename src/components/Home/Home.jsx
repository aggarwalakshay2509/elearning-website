import React, { Fragment } from "react";
import frontStudy from "../../images/frontStudy.jpg";
import person from "../../images/person.jpg";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";
import course5 from "../../images/course5.jpg";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <Fragment>
            <div class="frontImage">
        <div class="left">
            <div class="lHeading">Learn Anytime<br/>Anywhere</div>
            <p class="lText">Learn skills for your present and future with a lot of high quality courses and get certificates and badges</p>
            <Link to={"/courses"}><button type="submit" class="forCourses">Explore courses</button></Link>
        </div>
        <div class="right">
            <div class="imagePart">
                <img class="boyLearning" src={frontStudy} alt="front image"/>
            </div>
            <div class="colorPart"></div>
        </div>
    </div>
    <div class="reviews">
        <h1>WHAT LEARNERS THINK OF LearnAtHome</h1>
        <div class="persons">
            <div class="revContent">
                <i class="fa fa-quote-left"></i>
                <p>I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified</p>
                <br/><hr/><br/>
                <h4>Akshay</h4>
                <a href="#">Linkedin Profile</a><br/>
                <img src={person} class="personImage" alt="person image" width="95%"/>
            </div>
            <div class="revContent">
                <i class="fa fa-quote-left"></i>
                <p>The program totally changed my life. I have this career in front of me. That's really powerful.</p>
                <br/><hr/><br/>
                <h4>Rahul</h4>
                <a href="#">Linkedin Profile</a><br/>
                <img src={person} class="personImage" alt="person image" width="95%"/>
            </div>
            <div class="revContent">
                <i class="fa fa-quote-left"></i>
                <p>I'm finally able to truly differentiate my classroom. This has been priceless for my students' engagement.</p>
                <br/><hr/><br/>
                <h4>Manish</h4>
                <a href="#">Linkedin Profile</a><br/>
                <img src={person} class="personImage" alt="person image" width="95%"/>
            </div>
            <div class="revContent">
                <i class="fa fa-quote-left"></i>
                <p>I highly recommend this course for all budding data scientists, even people with no prior knowledge.</p>
                <br/><hr/><br/>
                <h4>Rehan</h4>
                <a href="#">Linkedin Profile</a><br/>
                <img src={person} class="personImage" alt="person image" width="95%"/>
            </div>
        </div>
    </div>
    <div class="topCourses">
        <h1>TOP RATED COURSES</h1>
        <div class="courses">
            <div class="courseContent">
                <img src={course1} alt="course1"/>
                <p class="courseName"><Link to={"/courses"}>Complete Web3 course</Link></p>
                <p class="instName">By Lorem ipsum.</p>
                <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="courseContent">
                <img src={course2} alt="course2"/>
                <p class="courseName"><Link to={"/courses"}>Complete 2023 Web Development Bootcamp</Link></p>
                <p class="instName">By Lorem ipsum.</p>
                <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="courseContent">
                <img src={course3} alt="course3"/>
                <p class="courseName"><Link to={"/courses"}>Complete Python Pro Bootcamp for 2023</Link></p>
                <p class="instName">By Lorem ipsum.</p>
                <div class="rating">⭐⭐⭐⭐</div>
            </div>
            <div class="courseContent">
                <img src={course4} alt="course4"/>
                <p class="courseName"><Link to={"/courses"}>Zero to Hero in Photoshop in 50 days</Link></p>
                <p class="instName">By Lorem ipsum.</p>
                <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="courseContent">
                <img src={course5} alt="course5"/>
                <p class="courseName"><Link to={"/courses"}>Begineer to Data Science</Link></p>
                <p class="instName">By Lorem ipsum.</p>
                <div class="rating">⭐⭐⭐⭐</div>
            </div>
        </div>
        <Link to={"/courses"}><button type="submit" class="forCourses explore">Explore courses</button></Link>
    </div>
        </Fragment>
    )
}
export default Home;