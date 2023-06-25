import React from "react";
import { Link } from "react-router-dom";
import courseDes from "../../images/courseDes.jpg";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";


const Courses=()=>{
    return (
        <div>
        <div class="allCourses">
        <h1>Start learning now</h1>
        <div class="categ">
            <div class="line">
                <div class="singleCateg" id="WebDevelopment">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Web Development</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="DataScience">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Data Science</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="AppDevelopment">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">App Development</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Design">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Design</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
            </div>
            <div class="line">
                <div class="singleCateg" id="AccountsandFinance">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Accounts and Finance</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Marketting">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Marketting</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Business">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Business</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Music">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Music</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
            </div>
            <div class="line">
                <div class="singleCateg" id="HealthandFitness">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Health and Fitness</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="ITandSoftware">
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">IT and Software</p>
                        <p class="numCourses">8 courses</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="hr"><hr/></div>

    <div class="courseInfo">
        <h2 class="selectedCategHead">Web development</h2>
        <div class="courses">
            <button class="scroll scrlLeft" onclick="slide(-1)">&lt;</button>
            <div class="coursesVisible">
                <div class="courseContent specificCourses" id="c0">
                    <img src={course1} alt="course1"/>
                    <p class="courseName"><Link to={"/courses"}>Complete Web3 course</Link></p>
                    <p class="instName">By Lorem ipsum.</p>
                    <div class="rating">⭐⭐⭐⭐⭐</div>
                </div>
                <div class="courseContent specificCourses" id="c1">
                    <img src={course2} alt="course2"/>
                    <p class="courseName"><Link to={"/courses"}>Complete 2023 Web Development Bootcamp</Link></p>
                    <p class="instName">By Lorem ipsum.</p>
                    <div class="rating">⭐⭐⭐⭐⭐</div>
                </div>
                <div class="courseContent specificCourses" id="c2">
                    <img src={course3} alt="course3"/>
                    <p class="courseName"><Link to={"/courses"}>Complete Python Pro Bootcamp for 2023</Link></p>
                    <p class="instName">By Lorem ipsum.</p>
                    <div class="rating">⭐⭐⭐⭐</div>
                </div>
                <div class="courseContent specificCourses" id="c3">
                    <img src={course4} alt="course4"/>
                    <p class="courseName"><Link to={"/courses"}>Zero to Hero in Photoshop in 50 days</Link></p>
                    <p class="instName">By Lorem ipsum.</p>
                    <div class="rating">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <button class="scroll scrlRight" onclick="slide(1)">&gt;</button>
        </div>
    </div>
    </div>
    );
}

export default Courses;