import React from "react";
import { Route, Switch } from "react-router-dom";

// import Cookies from "universal-cookie";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Home from "./Home";
import Catergory from "./Catergory";
import Product from "./Product";
import Excellence from "./Excellence";
import Package from "./Package";
import Promotion from "./Promotion";
import BestSeller from "./BestSeller";
import PaymentM from "./PaymentM";
import Banner from "./Banner";
import Videos from "./Videos";
import News from "./News";
import Event from "./Event";
import Staff from "./Staff";
import Projects from './Projects'
import Company from './Company'
import Order from "./Order";
import Chat from "./Chat";
// const cookies = new Cookies();
// const Home = () => <h1>Home_admin</h1>;
const About = () => <h1>About_admin</h1>;
const Post = () => <h1>Post_admin</h1>;
const Project = () => <h1>Project_admin</h1>;
const NotFoundPage = () => <h1>NotFoundPage</h1>;
const IndexAdmin = props => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="content-wrapper" style={{ backgroundColor: "#fff" }}>
        <Switch>
          <Route exact path="/admin" component={Home} />
          <Route path="/about_admin" component={About} />
          <Route path="/posts_admin" component={Post} />
          <Route path="/projects_admin" component={Project} />
          <Route path="/Catergory" component={Catergory} />
          <Route path="/Product" component={Product} />
          <Route path="/Excellence" component={Excellence} />
          <Route path="/Package" component={Package} />
          <Route path="/Promotion" component={Promotion} />
          <Route path="/BestSeller" component={BestSeller} />
          <Route path="/PaymentM" component={PaymentM} />
          <Route path="/Banner" component={Banner} />
          <Route path="/Videos" component={Videos} />
          <Route path="/News" component={News} />
          <Route path="/Event" component={Event} />
          <Route path="/Staff" component={Staff} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Company" component={Company} />
          <Route path="/Order" component={Order} />
          <Route path="/Chat" component={Chat} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
export default IndexAdmin;
