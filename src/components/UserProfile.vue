<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="user.isAdmin">
                    Admin
                </div>
                <div class="user-profile__follower-count">
                    <strong>Follower :</strong> {{ followers }}
                </div>
            </div>
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>
        <div class="user-profile__twoots-wrapper">
             <TwootItem 
                v-for="twoot in user.twoots" 
                :key="twoot.id" 
                :username="user.username"
                :twoot="twoot"
                @favourite="toggleFavourite"/>
        </div>
    </div>
</template>

<script>
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";

export default {
    name:'UserProfile',
    components:{CreateTwootPanel, TwootItem },
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
        newTwootCharactereCount() {
            return this.newTwootContent.length
        }
    },
    methods: {
        followUser() {
            this.followers++
        },
        toggleFavourite(id) {
            console.log(`Favourite Twoot #${id}`)
        },
        addTwoot(twoot){
            this.user.twoots.unshift({ id: this.user.twoots.length +1, content: twoot });
        }
    },
    mounted(){
        this.followUser()
    }
}

</script>

<style lang="scss">
.user-profile{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    grid-gap:50px;
    padding:50px 0%;


    .user-profile__user-panel{
        display: flex;
        flex-direction: column; 
        padding: 20px;
        background-color: white;
        border-radius:5px;
        border: 1px solid #DFE3E8;


        .user-profile__admin-badge{
            background-color: rebeccapurple;
            margin-right: auto;
            border-radius:5px;
            color:white;
            padding:0 10px;
            font-weight: bold;
        }


        h1{
            margin: 0;
        }


        .user-profile__create-twoot{
            display:grid;
            grid-gap:10px;
            padding-top: 20px;

            &.--exceeded{
                color:red;
                border-color: red;

                button{
                    background-color:red;
                    color:white;
                    border:none;
                }
            }
        }
    }


    .user-profile__twoots-wrapper{
        display:grid;
        grid-gap:10px;
    }
}

</style>