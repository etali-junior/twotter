<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{ user.username }}</h1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Follower :</strong> {{ followers }}
            </div>
            <form class="user-profile__create-twoot">
                <label for="newTwoot"><strong>New twoot</strong></label>
                <textarea id="newTwoot" rows="4"/>
            </form>
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwootItem v-for="twoot in user.twoots" 
            :key="twoot.id" 
            :username="user.username" 
            :twoot="twoot" 
            @favourite="toggleFavourite"/>
        </div>
    </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
    name:'UserProfile',
    components:{ TwootItem },
    data() {
        return {
            followers: 0,
            user:{
                id:0,
                username:'_etaliMathias',
                firstName: 'Mathias',
                lastName: 'Etali',
                email: 'etalim@gmail.com',
                isAdmin: true,
                twoots: [
                    {id: 1, content: "Twotter is amazing"},
                    {id: 2, content: "Don't forget to subscribe to the earth is square"}
                ]
            }
        }
    },
    computed:{
        fullName() {
            return this.user.firstName + this.user.lastName
        }
    },
    methods: {
        followUser() {
            this.followers++
        },
        toggleFavourite(id) {
            console.log(`Favourite Tweet #${id}`)
        }
    },
    mounted(){
        this.followUser()
    }
}

</script>

<style>
.user-profile{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding:50px 5%;
}

.user-profile__user-panel{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius:5px;
    border: 1px solid #DFE3E8;
}

.user-profile__admin-badge{
    background-color: rebeccapurple;
    margin-right: auto;
    border-radius:5px;
    color:white;
    padding:0 10px;
    font-weight: bold;
}

.user-profile__create-twoot{
    display:grid;
    grid-gap:10px;
    padding-top: 20px;
}

h1{
    margin: 0;
}

</style>