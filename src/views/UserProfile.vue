<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1> 
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
                </div>
                <div class="user-profile__follower-count">
                    <strong>Follower :</strong> {{ state.followers }}
                </div>
            </div>
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>
        <div class="user-profile__twoots-wrapper">
             <TwootItem 
                v-for="twoot in state.user.twoots" 
                :key="twoot.id" 
                :username="state.user.username"
                :twoot="twoot"
                @favourite="toggleFavourite"/>
        </div>
    </div>
</template>

<script>
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel";
import { reactive , computed } from 'vue';
import { useRoute } from 'vue-router'
import { users } from '../assets/users' //on recuère les données qui se trouve dans le fichier assets/users.js

export default {
    name:'UserProfile',
    components:{CreateTwootPanel, TwootItem },

    setup(){

        const route = useRoute();
        const userId = computed(() => route.params.userId);

        const state = reactive({ //on recupère l'utilisateur en fonction de l'identifiant qui est sur l'url
            followers: 0,
            user: users[userId.value - 1] || users[0]
        })
        
        function addTwoot(twoot){
            state.user.twoots.unshift({ id: state.user.twoots.length +1, content: twoot });
        }

        return {
            state,
            addTwoot,
            userId,
        }
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