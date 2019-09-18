<template>
  <page xmlns:Card="@nstudio/nativescript-cardview">
    <action-bar :title="title" />
    <flexbox-layout flexDirection="column" justifyContent="space-around" alignItems="center">
      <Label class="title" text="We are starting a game !!" />
      <card-view margin="10" class="card" elevation="40" radius="1">
        <stack-layout
          orientation="vertical"
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <label text="Select a number" />
          <text-field keyboardType="number" v-model="numberChosen.value" hint="0" width="50%" />
          <stack-layout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
            <button text="RESET" @tap="reset"></button>
            <button text="CONFIRM" @tap="confirm"></button>
          </stack-layout>
        </stack-layout>
      </card-view>
      <card-view class="card" elevation="40" radius="10">
        <stack-layout
          v-if="numberChosen.isChosen"
          orientation="vertical"
          horizontalAlignment="center"
          verticalAlignment="center"
        >
          <label text="The number you have chosen is" />
          <label :text="numberChosen.value" />
          <button text="START GAME" @tap="startGame"></button>
        </stack-layout>
      </card-view>
    </flexbox-layout>
  </page>
</template>

<script >
import Detail from "./Detail";
import GuessPage from "./GuessPage";

export default {
  components: { Detail, GuessPage },
  data() {
    return {
      detailPage: Detail,
      guessPage: GuessPage,
      title: "Guess a number !",
      numberChosen: {
        isChosen: false,
        value: ""
      }
    };
  },
  methods: {
    confirm() {
      if (this.numberChosen.value != "") {
        this.numberChosen.isChosen = true;
      } else {
        alert("Enter a number then press confirm");
      }
    },

    reset() {
      this.numberChosen.isChosen = false;
      this.numberChosen.value = "";
    },

    startGame() {
      console.log("Start game");
      this.$navigateTo(GuessPage, {
        props: { guessNumber: this.numberChosen.value }
      }).then(data => {
        //reset game
        this.reset();
      });
    }
  }
};
</script>

<style scoped>
Page {
  background-color: #eeeeee;
}

ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

card-view {
  background-color: white;
  text-align: center;
  font-size: 16pt;
}

.card {
  padding: 10px;
}

.title {
  font-size: 20pt;
}
</style>
