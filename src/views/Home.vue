<template>
  <div class="home">
    <h1>Home</h1>
    <div class="users-list">

      <p v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id } }" :key="user.id">
        {{ user.username }}
      </p>

    </div>
  </div>
</template>

<script>
import { users } from "../assets/users";
export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 50px 5%;
    
    .users-list {
      display: flex;
      flex-direction: column;
    }
  }
</style>