<template>
  <Page>
    <ActionBar :title="title" />
    <FlexboxLayout flexDirection="column" justifyContent="space-around" alignItems="center">
      <Label class="title" text="We are starting a game !!" />
      <CardView class="card" elevation="40" radius="10">
        <StackLayout
          orientation="vertical"
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <Label text="Select a number" />
          <TextField keyboardType="number" v-model="numberChosen.value" hint="0" width="50%" />
          <StackLayout orientation="horizontal" horizontalAlignment="center" width="100%">
            <Button text="RESET" @tap="reset"></Button>
            <Button text="CONFIRM" @tap="confirm"></Button>
          </StackLayout>
        </StackLayout>
      </CardView>
      <CardView class="card" elevation="40" radius="10">
        <StackLayout
          v-if="numberChosen.isChosen"
          orientation="vertical"
          horizontalAlignment="center"
          verticalAlignment="center"
        >
          <Label text="The number you have chosen is" />
          <Label :text="numberChosen.value" />
          <Button text="START GAME" @tap="startGame"></Button>
        </StackLayout>
      </CardView>
    </FlexboxLayout>
  </Page>
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

CardView {
  background-color: white;
  text-align: center;
  font-size: 16pt;
}

.title {
  font-size: 20pt;
}
</style>
