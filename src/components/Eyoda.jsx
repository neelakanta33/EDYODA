import { useRef } from "react";
import "../styles/eyoda.css";
import { Link } from "react-router-dom";
const Edyoda= () => {
 
 return (
    <section>
        <section className="navbar">
<div className="navleft">
<div className="navlogo">
    <h1>EDYODA</h1>
</div>
<div className="navdrop1">
    <p>Courses <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="" height="10px" width="10px"/></p>

</div>
<div className="navdrop1">
<p>Programs <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="" height="10px" width="10px"/></p>
</div>
</div>
<div className="navright">
<div className="search">
<img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" height="20px" width="20px"/>
</div>
<div className="login">
<a>Log in</a>
</div>
<div className="joinow">
<button>JOIN NOW</button>
</div>
</div>
        </section>

      <section className="content">
      <section className="content1">
<div className="block1">
    <p>Access curated courses worth</p>
    <div className="block1in">
    <p className="strike"></p>
    <p>₹ <nbsp></nbsp>18,500</p>
   
    <p>at just</p>
    <p className="blue">₹99</p>
    <p>per year!</p>
    </div>
</div>

            
<div className="block2">
    
  <div className="icontxtblock">
  <div className="icon">
            <img src={"images/v1.png"} alt="" style={{backgroundColor:"transparent"}}/>
            <div className="v11">
            <img  src={"/images/v1.1.png"} alt=""/>
            </div>
        </div>
        <div className="icontxt">
        <p className="blue">100+</p> 
            <p>Job relevant courses </p>
        </div>
  </div>
        
        <div className="icontxtblock">
        <div className="icon">
            <img src={"/images/v2.png"} alt="" style={{backgroundColor:"transparent"}} />
            <div className="v21">
            <img  src={"/images/v2.1.png"} alt=""/>
            </div>
            
        </div>
        <div className="icontxt">
        <p className="blue">20,000+</p>
           <p> Hours of content</p>
        </div>
        </div>
   
        <div className="icontxtblock">
        <div className="icon">
            <img src={"/images/v3.png"} alt="" />
            <div className="v31">
            <img  src={"/images/live.png"} alt=""/>
            </div>
        </div>
        <div className="icontxt">
        <p className="blue">Exclusive</p>
            <p> webinar access</p>
        </div>
        </div>
    
    <div className="icontxtblock">
    <div className="icon">
            <img src={"/images/v4.png"} alt="" />
            <div className="v411">
            <div className="v41">
            <img  src={"/images/v4.1.png"} alt=""/>
            </div>
            <div className="v42">
            <img  src={"/images/v4.2.png"} alt=""/>
            </div> <div className="v43">
            <img  src={"/images/v4.1.png"} alt=""/>
            </div>
            </div>
        </div>
        <div className="icontxt">
            <p>Scholarship worth </p>
            <p className="blue">₹94,500</p>
        </div>
    </div>
        
    
       <div className="icontxtblock">
       <div className="icon">
            <img src={"/images/v2.png"} alt="" />
            <div className="v51">
            <img  src={"/images/v5.1.png"} alt=""/>
            </div>
            <div className="v52">
<h2>ADS</h2>            
</div>
        </div>
        <div className="icontxt">
            <p> learning experience</p>
            <p className="blue">Ad Free</p>
        </div>
        </div> 
  
        
    
</div>

        </section>
       
       <section className="form">
    
    <div className="form1">
<div className="formtxt1">
    <div className="1">
        <div  className="circle">
            <p>1</p>
        </div>
        <p className="circetxt">Sign Up</p>
    </div>

    <div className="2">
    <div className="circle">
            <p>2</p>
        </div>
        <p  className="circetxt">Subscribe</p>
    </div>
</div>

<div className="formtxt2">
    <p>Select your subcription plan</p>
</div>
<div className="forminn">
<div className="expired">
    <p>Offer expired</p>
   </div>
<div className="formtxtinexp">
<div className="formtxt3">

<div className="formtxtin1">
<input type="radio" name="" id="" />

<p><b>12 Months Subscription</b> </p>

</div>
<div className="formtxtin2">
  <p>Total <b>₹99</b> <p className="rupe">₹8 /mo</p></p>
 
</div>

</div>
</div>
<div className="recotxt">
<div className="formtxt3" id="change">

<div className="formtxtin1" >
<input type="radio" name="" id="" className="recoinp" />
 
<p className="recop"><b>12 Months Subscription</b> </p>
</div>
<div className="reco">
  <p>Recommended</p>
 </div>
<div className="formtxtin2">
  <p className="recop1">Total  <b>₹179</b><p className="rupe">₹15 /mo</p></p>
 
</div>

</div>
</div>
<div className="formtxt3">
  <div className="formtxtin1">
<input type="radio" name="" id="" />
   
<p><b>6 Months Subscription</b></p>
  </div>
  <div className="formtxtin2">
    <p>Total <b>₹149</b><p className="rupe">₹25 /mo</p></p>
   
  </div>

</div>
<div className="formtxt3">
  <div className="formtxtin1">
<input type="radio" name="" id="" />
   
<p><b>3 Months Subscription</b> </p>
  </div>
  <div className="formtxtin2">
    <p>Total <b>₹99</b><p className="rupe">₹33 /mo</p></p>
   
  </div>

</div>


<div className="formtxt4">
    <div className="formtxt4in1">
<p>Subscription Fee</p>
<p>₹18500</p>
    </div>
    <div className="formtxt4in2">
      <div className="formtxt4in2in">
      <div className="div">
       <p>Limited time offer</p>
       </div>
       <div className="divoff">
       <img src="" alt="" />
        <p>Offer valid till 25th March 2023 </p>
       </div>
      </div>
    <div className="div">
    <p>- ₹18,401</p>
    </div>
        </div>
        <div className="formtxt4in3">
        <p><b>Total</b> (Incl. of 18% GST)</p>
        <p><b>₹149</b></p>
        </div>
</div>
</div>
<section className="buttons">
<div className="but1">
<a href="">cancel</a>
</div>
<div className="but2">
    <a href="">proceed to pay</a>
</div>
</section>
<div className="pay">
    <img src={'images/razpay.png'} alt="" />
</div>
</div>
    
       </section>
      
      </section>


   
    </section>
  );
};

export default Edyoda;
