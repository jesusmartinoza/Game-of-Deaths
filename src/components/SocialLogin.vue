<template>
  <div class="social-btn clearfix">
	  	<a href="#">
        <button class="movebtn google" type="Submit">Google <font-awesome-icon :icon="['fab', 'google']"/></button>
      </a>
	  	<a href="#">
        <button class="movebtn facebook" type="Submit">Facebook <font-awesome-icon :icon="['fab', 'facebook-f']"/></button>
      </a>
  </div>
</template>

<script>

export default {
  name: "SocialLogin"
}
</script>

<style scoped>

button {
    padding: 8px 12px;
    margin: 4px 0;
    font-family: 'Montserrat', sans-serif;
    border: 2px solid #78788c;
    background: 0;
    color: #5a5a6e;
    cursor: pointer;
    transition: all .3s;
}
button:hover {
    background: #646171;
    color: #fff;
    border-color: #646171;
    box-shadow: 0px 0 5px 0 #646171;
}
.login-btn{margin-top: 50px;}

.relative{
    position: relative;
}
.relative i.fa{
    position: absolute;
    top: 10px;
    left: 0;
    width: 30px;
    color: #9b9aa3;
    text-align: center;
    border-radius: 0 4px 4px 0;
    transition: all 0.15s ease-in-out;
}
input:focus + .fa{
    color: #3e3b4e;
    transform: rotate(360deg);
}
.form-group{
    margin-bottom: 20px;
}
.form-control{
    font-size: 14px;
    padding-left: 40px;
    border: none;
    border-bottom: 1px solid #3c3b4d;
    border-radius: 0;
    background-color: transparent;
}
.form-control:focus{
    border-color: #1e439b;
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 3px 4px -3px rgb(30, 102, 195);
    background-color: transparent;
}
.sign-up{
    margin-top: 30px;
    text-align: center;
    position: relative;
    margin-bottom: -15px;
}
.login-text{
    position: absolute;
    top: -11px;
    text-align: center;
    width: 30%;
    background-color: #fff;
    left: 50%;
    transform: translateX(-50%);
}
hr{
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
}
/* --- Animated Buttons --- */
.movebtn{
    background-color: transparent;
    display:inline-block;
    width:100%;
    background-image: none;
    padding: 8px 10px;
    border-radius: 0;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.5, 1.65, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.5, 1.65, 0.37, 0.66);
}
.movebtnre {
    border: 2px solid #ff5501;
    box-shadow: inset 0 0 0 0 #ff5501;
    color:#ff5501;
}
.movebtnsu {
    border: 2px solid #3e3b4e;
    color: #ffffff;
    background-color: #3e3b4e;
}
.google, .facebook{
    width: 50%;
    float: left;
}
.google {
    border: 2px solid #e04c40;
    color: #ffffff;
    background-color: #e04c40;
}
.facebook {
    border: 2px solid #2e4da7;
    color: #ffffff;
    background-color: #2e4da7;
}
.google:focus,
.google:hover,
.google:active {
    background-color: #ea3728;
    color: #FFF;
    border-color: #ea3728;
    box-shadow: none;
}
.facebook:focus,
.facebook:hover,
.facebook:active {
    background-color: #1e439b;
    color: #FFF;
    border-color: #1e439b;
    box-shadow: none;
}
</style>