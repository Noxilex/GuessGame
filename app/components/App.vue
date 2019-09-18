<template>
    <Page>
      <ActionBar :title="title"/>
      <StackLayout orientation="vertical" verticalAlignment="center" horizontalAlignment="center">
        <Label text="We are starting a game !!"/>
        <StackLayout class="card" orientation="vertical" width="50%" backgroundColor="#AAAAAA" verticalAlignment="center" horizontalAlignment="center">
          <Label text="Select a number"/>
          <TextField keyboardType="number" v-model="numberChosen.value" hint="0" width="50%"/>
          <StackLayout orientation="horizontal" horizontalAlignment="center" width="100%">
            <Button text="RESET" @tap="reset"></Button>
            <Button text="CONFIRM" @tap="confirm"></Button>
          </StackLayout>
        </StackLayout>
        <StackLayout class="card" v-if="numberChosen.isChosen" orientation="vertical" width="50%" backgroundColor="#AAAAAA" horizontalAlignment="center">
          <Label text="The number you have chosen is"/>
          <Label :text="numberChosen.value"/>
            <Button text="START GAME" @tap="startGame"></Button>
        </StackLayout>
      </StackLayout>
    </Page>
</template>

<script >
import Detail from './Detail'
import GuessPage from './GuessPage'

export default {
  components: {Detail, GuessPage},
  data() {
      return {
        detailPage: Detail,
        guessPage: GuessPage,
        title: "Guess a number !",
        numberChosen: {
          isChosen: false,
          value: ""
        }

      }
  },
  methods: {
    confirm(){
      if(this.numberChosen.value != ""){
        this.numberChosen.isChosen = true;
      }else{
        alert("Enter a number then press confirm")
      }
    },

    reset(){
      this.numberChosen.isChosen = false;
      this.numberChosen.value = "";
    },

    startGame(){
      console.log("Start game")
      this.$navigateTo(GuessPage, {props: {guessNumber: this.numberChosen.value}}).then(data => {
        //reset game
        this.reset();
      })
    }
  }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .card {
      margin: 10px;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
