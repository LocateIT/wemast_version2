<template>
  <div class="register">
    <div class="formwrapper">
      <form @submit.prevent="submitForm" class="form" style="margin-left: 0%;  margin-top: 0%; ">
        <div id="heading">
          <h2 style="color:#164b75">Login</h2>
          <!-- <PersonOutline width="250" height="100" color="#164b75" /> -->
        </div>
        <div class="field">
          <Envelope width="18" height="15" color="#164b75" />
          <input autocomplete="off" placeholder="Email" class="input-field" type="text" @input="showEmailInput">
        </div>
        <div class="field">
          <Glasses width="20" height="20" color="#164b75" />
          <input placeholder="Password" class="input-field" type="password" @input="showPasswordInput">
        </div>
        <div class="btn">
          <!-- <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> -->
          <!-- <RouterLink to="/dashboard" > -->
          <button class="button2">Login</button>
          <!-- </RouterLink> -->
          <RouterLink to="/forgot">
            <p class="forgot">Forgot Password?</p>
          </RouterLink>
          <RouterView />
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
import { CashOutline as CashIcon } from "@vicons/ionicons5";
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import Toast, { POSITION } from "vue-toastification";
import { useToast } from "vue-toastification";
import axios from 'axios'
import { onMounted, watch, computed } from "@vue/runtime-core";
import { useCounterStore } from '../stores/counter'

const storeUserSelections = useCounterStore();


let phone = ref(null)
let password = ref('')
let email = ref('')
const router = useRouter();
const route = useRoute();
const toast = useToast();


const showPhoneInput = (e) => {
  phone.value = e.target.value
}
const showPasswordInput = (e) => {
  password.value = e.target.value

  // var password_input = storeUserSelections.getPasswordInput
  storeUserSelections.setPassword(e.target.value)

}

const showEmailInput = (e) => {
  email.value = e.target.value

  // var email_input = storeUserSelections.getEmailInput
  storeUserSelections.setEmail(e.target.value)

}


//advanced filter functionalities
// const getUserEmail = () => {
//   var email_input = storeUserSelections.getEmailInput

//   email.value = email_input;
//   // //console.log(selected_country, 'selected country app')
// };

// const setEmail = computed(() => {
//   // //console.log(advancedUserSelections.selected_country, 'selected country app')

//   return storeUserSelections.getEmailInput;
// });
// watch(setEmail, () => {
//   showEmailInput();
// });

// const getUserPassword = () => {
//   var password_input = storeUserSelections.getPasswordInput

//   password.value = password_input;
//   // //console.log(selected_country, 'selected country app')
// };

// const setPassword = computed(() => {
//   // //console.log(advancedUserSelections.selected_country, 'selected country app')

//   return storeUserSelections.getPasswordInput;
// });
// watch(setPassword, () => {
//   showPasswordInput();
// });

const submitForm = () => {

  const formInputsData = [{
    // username: username.value,
    // phone: phone.value,
    email: email.value,
    password: password.value,
    //  confirm: confirm_password.value
  }]
  console.log(formInputsData, 'formInputsData target')

  const apiUrl = "http://45.32.233.93:81/wemast/wemast_gen.php";
  const data = formInputsData

  const postData = 'login_PostJSON_2=' + encodeURIComponent(JSON.stringify([{ "_useremail": `${formInputsData[0].email}`, "_userpwd": `${formInputsData[0].password}` }]))
  console.log(postData)
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

  axios.post(apiUrl, postData, { headers })
    .then(response => {
      console.log('Response:', response.data)
      var valid_object = JSON.parse(response.data[0]?.data)
      console.log(valid_object)
      storeUserSelections.setUserDetails(valid_object)

      if (response.data[0].success === true) {
        // this.$router.push('/dashboard')
        storeUserSelections.setIsLoggedIn(true)
        toast.success("Login Successful", {
          timeout: 2000,
          position: POSITION.TOP_CENTER
        });
        router.push('/dashboard');
      }
      else {
        // alert(response.data[0].error)
        toast.error(response.data[0].error + ' ' + 'Please try again', {
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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  width: 99vw;
  font-family: Poppins;
  background-image: url('/images/waterfall.png');
  background-size: cover;
  background-position: center;


}

.form {
  display: flex;
  flex-direction: column;
  /* gap: 10px; */

 padding: 4em 2em;
  /* background-color: rgb(219, 218, 218); */
  /* border-radius: 25px; */
  transition: .4s ease-in-out;
  width: 25vw;
  /* height: 59.2vh; */
}

.formwrapper{
  background-color: rgba(238, 238, 238, 0.7);
  border-radius: 1.5em;
}
.form:hover {
  transform: scale(1.05);
  /* border: 1px solid steelblue; */
}

#heading {
  /* text-align: center; */
  /* margin: 2em; */
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: Poppins;
}

.btn {
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
  /* margin-top: 2.5em; */
}

.button1 {
  /* padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em; */
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
  /* padding: 1em;
  padding-left: 4.3em;
  padding-right: 4.3em;
  border-radius: 20px; */
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: rgb(22, 75, 117);
  color: white;
  padding: .5em 3em;
  border-radius: 1.5em;
  /* margin-bottom: 1.5rem; */
  cursor: pointer;
  font-family: Poppins;
}

.button2:hover {
  background-color: rgb(64, 153, 226);
  color: white;
}

.forgot {
  /* position: relative;
   top: -4vh;
   left: 4.5vw; */
  text-decoration: underline;
  color: rgb(64, 153, 226);
  cursor: pointer;
  font-size: .8em;
}
@media (max-width: 768px) {
  .register {
   width: 100%;


  }
  .form{
    width: 90%;

  }
  .btn{
    gap:4em;
  }
  .button2{
    padding: .2em 2em;
    


  }

  

}
</style>