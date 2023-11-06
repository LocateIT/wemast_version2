<template>

<div class="signup">
    <div class="welcome">
        <h2 class="welcome_text">Welcome Back!</h2>
        <p class="already">If you already have an account, please login from here</p>

        <RouterLink to="/login">

        
        <button class="login">Login</button>
    </RouterLink>
    <RouterView />

    <RouterLink to="/dashboard">

        
<button class="goto_dashboard">Go To Dashboard</button>
</RouterLink>
<RouterView />

    </div>

    <div class="register">
        <form @submit.prevent="submitForm" class="form" style="margin-left: 0%;  margin-top: 0%; ">
        <p id="heading">
        
        <PersonOutline width="250" height="100" color="#164b75" />
       </p>



    <div class="field">
    <Person width="20" height="16" color="#164b75" />
      <input autocomplete="off" placeholder="Username" class="input-field" type="text" @input="showUsernameInput">
    </div>

    <div class="field">
    <PhonePortraitOutline width="18" height="15"  color="#164b75"/>
      <input autocomplete="off" placeholder="Phone number" class="input-field" type="number" @input="showPhoneInput">
     
    </div>

    <div class="field">
    <Envelope width="18" height="15"  color="#164b75"/>
      <input autocomplete="off" placeholder="Email" class="input-field" type="text" @input="showEmailInput">
    </div>



    <div class="field">
        <Glasses width="20" height="20" color="#164b75" @click="revealPassword" />
        <input id="password" placeholder="Password" class="input-field" type="password" @input="showPasswordInput">
    </div>

    <div class="field">
        <Glasses width="20" height="20" color="#164b75"  @click="revealConfirmPassword" />
        <input id="confirm_password" placeholder="Confirm Password" class="input-field" type="password" @input="showConfirmPasswordInput">
    </div>



    <div class="btn">

    <!-- <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> -->
    <!-- <RouterLink to="/login" > -->
    <button type="submit" class="button2">Sign Up</button>
    <!-- </RouterLink> -->
    <!-- <RouterView /> -->


    </div>

    <!-- <button class="button3">Forgot Password</button> -->
</form>

    </div>


</div>
  
   
  
</template>

<script setup>


  import { NButton, NSpace, NInput } from 'naive-ui'
  import { GlassesOutline, Glasses, Person, AtSharp, PersonOutline } from "@vicons/ionicons5";
  import { Envelope } from "@vicons/fa"
  import { PhonePortraitOutline } from '@vicons/ionicons5';
  import { CashOutline as CashIcon } from "@vicons/ionicons5";
  import { onMounted, computed, watch, ref } from 'vue'
  import { useCounterStore } from '../stores/counter'
  import { useRoute, useRouter } from 'vue-router';
  import Toast, { POSITION } from "vue-toastification";
  import { useToast } from "vue-toastification";
  import axios from 'axios';

  const storeUserSelections = useCounterStore()


  let username = ref('')
  let phone = ref(null)
  let email = ref('')
  let password = ref('')
  let confirm_password = ref('')

  const router = useRouter();
    const route = useRoute();
    const toast = useToast();


  onMounted( () => {
    // submitForm()

  })

  const revealPassword = () => {
    var x = document.getElementById("password");
   
  if (x.type === "password" ) {
    x.type = "text";
    
  } else {
    x.type = "password";
   
  }

  }
  const revealConfirmPassword = () => {
    // var x = document.getElementById("password");
    var y = document.getElementById("confirm_password");
    // || "confirm_password"
  if ( y.type === "password") {
    // x.type = "text";
    y.type = "text";
  } else {
    // x.type = "password";
    y.type = "password";
  }

  }

  const showUsernameInput = (e) => {
              username.value = e.target.value
            }

            const showPhoneInput = (e) => {
              phone.value = e.target.value
            }
            const showEmailInput = (e) => {
            email.value = e.target.value
          }
            const showPasswordInput = (e) => {
              password.value = e.target.value
            }
         
            const showConfirmPasswordInput = (e) => {
              confirm_password.value = e.target.value 
            }

  const submitForm =  () => {

    const formInputsData = [{
              username: username.value,
              phone: phone.value,
             email: email.value,
             password: password.value,
             confirm: confirm_password.value
            }]
            console.log(formInputsData , 'formInputsData target')

            const apiUrl = "http://45.32.233.93:81/wemast/wemast_gen.php";
const data = formInputsData

const postData = 'regista_PostJSON='+ encodeURIComponent(JSON.stringify([{"_username":`${formInputsData[0].username}`,"_usertel":`${formInputsData[0].phone}`,"_usercntry":"Kenya","_useremail":`${formInputsData[0].email}`,"_userpwd":`${formInputsData[0].password}`,"_userlat":"0.0","_userlon":"0.0"}]))
console.log(postData)
const headers = {'Content-Type': 'application/x-www-form-urlencoded'}

axios.post(apiUrl, postData, {headers})
.then(response => {
  console.log('Response:', response.data)
  if(response.data[0].success === true) {
    // this.$router.push('/dashboard')
    toast.success("Registration Successful", {
        timeout: 2000,
        position: POSITION.TOP_CENTER
      });
    router.push('/login');
  } else{
    // alert(response.data[0].error)
    toast.error(response.data[0].error, {
        timeout: 2000,
        position: POSITION.TOP_CENTER
      });
  }
})
.catch(error => {
  console.error('Error:', error)
});

      

            }

           

          


  
</script>

<style scoped>
.signup{
    margin-top: 10em;
    display: flex;
    flex-direction: row;
    /* background-color: #d3d0d0; */
    height: 100% !important;
    width: 100%;
}
.welcome{
    background-color: steelblue;
    width: 35%;
    height: 60vh;
    margin-top: 2em;
    margin-left: 15em;
    color: #fffbfb;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.welcome_text{
    font-size: xx-large;
    margin-left: 7em;
    margin-top: 3.5em;
}
.already{
    font-size: x-large;
    margin-left: 2em;
    margin-top: 2em;
}
.login{
    margin-left: 18em;
    margin-top: 2em;
    padding: 1em;
  padding-left: 4.3em;
  padding-right: 4.3em;
  border-radius: 20px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: rgb(22, 75, 117);
  color: white;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.goto_dashboard{
    margin-left: 16em;
    margin-top: 3em;
    padding: 1em;
  padding-left: 4.3em;
  padding-right: 4.3em;
  border-radius: 20px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: rgb(22, 75, 117);
  color: white;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.register{
    /* background-color: aliceblue; */
    width: 30%;
    height: 60vh;
    margin-top: 2em;
    /* margin-left: 0.2em; */
    background-color: #f0f0f0;

}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  /* background-color: rgb(219, 218, 218); */
  /* border-radius: 25px; */
  transition: .4s ease-in-out;
  width: 25vw;
  height: 59.2vh;
}

.form:hover {
  transform: scale(1.05);
  /* border: 1px solid steelblue; */
}

#heading {
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}

.field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: #fffbfb 1px solid;
  outline: none;
  color: rgb(95, 95, 95);
  background-color: rgb(248, 248, 248);
  box-shadow: inset 2px 5px 10px rgb(161, 176, 184);
}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: white;
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #4e4c4c;
}

.form .btn {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: rgb(22, 75, 117);
  color: white;
}

.button1:hover {
  background-color: black;
  color: white;
}

.button2 {
  padding: 1em;
  padding-left: 4.3em;
  padding-right: 4.3em;
  border-radius: 20px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: rgb(22, 75, 117);
  color: white;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.button2:hover {
  background-color: rgb(64, 153, 226);
  color: white;
}

.button3 {
  margin-bottom: 3em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: rgb(22, 75, 117);
  color: white;
}

.button3:hover {
  background-color: red;
  color: white;
}

</style>