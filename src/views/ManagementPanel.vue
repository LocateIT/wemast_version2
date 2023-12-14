<template>
   <div >
    <Navbar style="margin-left: -5vw;" />

    <div style="background-color: #fff; height: 90vh; position: absolute; width: 100vw; padding: 20px;">

      <div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 50px;">
        <UserCircle width="100" height="100"  color="#164b75" />
        <span style="font-size:40px; font-weight: 600; margin-top: 20px; color: #297EAE;">Risper</span>

    </div>

   <div class="container">
    <!-- <h1>User Table</h1> -->
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Sample data to populate the table -->
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.role }}</td>
          <td>
            <!-- Actions (e.g., buttons) for each user -->
            <!-- <button @click="editUser(user)" class="btn btn-primary btn-sm">Edit</button>
            <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button> -->
            <DownloadOutline width="40" height="20"  color="#164b75" style="cursor: pointer;" />
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>

    </div>

   


   </div>
  
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import { UserCircle } from "@vicons/fa";
// import Download  from "@vicons/fa/Download";
import  DownloadOutline  from "@vicons/ionicons5/DownloadOutline";

let users= [
        {
          name: 'John Doe',
          email: 'john@example.com',
          status: 'Active',
          role: 'Admin',
          id: 1, // Sample ID for each user
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          status: 'Inactive',
          role: 'User',
          id: 2,
        },
        // Add more user objects as needed
      ]

    //   const editUser = (user) => {
    //   // Implement your edit functionality
    //   console.log('Editing user:', user);
    // }
    // const deleteUser = (userId) => {
    //   // Implement your delete functionality
    //   console.log('Deleting user with ID:', userId);
    // }


</script>

<style>

</style>