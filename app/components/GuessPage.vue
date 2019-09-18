<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <StackLayout orientation="vertical" horizontalAlignment="center" verticalAlignment="center">
      <TextField keyboardType="number" v-model="numberGuessed" hint="0" width="50%" />
      <Button text="MAKE A GUESS" @tap="makeAGuess" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: ["guessNumber"],
  data: function() {
    return {
      title: "Guess a number",
      numberGuessed: "",
      tries: 0
    };
  },
  methods: {
    makeAGuess() {
      this.tries++;
      let guessNumberInt = parseInt(this.guessNumber);
      let value = parseInt(this.numberGuessed);
      let msg = "";
      if (this.tries >= 10 && !isGoodGuess(value)) {
        msg = "10 bad guesses, retry ?";
        confirm({
          title: "Game Over",
          message: msg,
          okButtonText: "Retry",
          cancelButtonText: "Main Menu"
        }).then(result => {
          //OK result
              if(result){
                  this.tries = 0
              }
              //Cancel result
              else{
                  this.$navigateBack();
              }
        });
      } else {
        if (value > guessNumberInt) {
          msg = "LOWER !";
          msg += "\n" + (10 - this.tries) + " tries left";
          alert(msg);
        } else if (value < guessNumberInt) {
          msg = "HIGHER !";
          msg += "\n" + (10 - this.tries) + " tries left";
          alert(msg);
        } else {
          msg = "Good guess after " + this.tries + " tries !";
          confirm({
            title: "You Won !",
            message: msg,
            okButtonText: "Retry",
            cancelButtonText: "Main Menu"
          }).then(result => {
              //OK result
              if(result){
                  this.tries = 0
              }
              //Cancel result
              else{
                  this.$navigateBack();
              }
            console.log(result);
          });
        }
      }
    },
    isGoodGuess(number) {
      return number == parseInt(this.guessNumber);
    }
  }
};
</script>

<style>
</style>