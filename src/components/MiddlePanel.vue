<template>
  <section id="virtual-wrapper">
    <div id="component">

      <header id="middle-panel-title">
        <h1 id="page-title">Here Goes The Title</h1>
      </header>

      <section id="arrow-container">
        <h3 id="arrow-title">Transforming your list to</h3>
        <div id="arrow"></div>
      </section>
      
      <section id="choice" :class="choiceSelected">
        <select name="choice" id="choice-select" class="choice-items" v-model="choiceSelected">
          <option value="" disabled selected>-- What will your choice be? --</option>
          <option value="choose">Will Choose a Random one</option>
          <option value="pick">Will Pick a Random one</option>
          <option value="group">Will Create Groups</option>
        </select>
        
        <input type="text" placeholder="How many groups?" id="choice-input-nb-groups" class="choice-items" v-if="choiceSelected === 'group'" v-model="nbrGroups">
        
      </section>
      
      <button id="choice-submit" @click="startRandom">Hit me, Jack!</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      choiceSelected: "",
      nbrGroups: null
    }
  },
  computed: {
    listArray() {
      let listToReturn, list = this.$store.getters.list;
      if (list == '')
        listToReturn = [];
      else 
        listToReturn = list.split('\n');
      
      return listToReturn;
    }
  },
  methods: {
    startRandom: function() {
      try {
        if (this.choiceSelected === 'choose')
          this.chooseRandomFromList();
        else if (this.choiceSelected === 'pick')
          this.pickRandomFromList();
        else if (this.choiceSelected === 'group')
          this.groupRandomlyFromTheList();
        else
          throw 'An error occured somewhere'
      } catch (e) {
        this.setResultToPrint(e);
        this.setErrorState(true);
      }
    },
    chooseRandomFromList: function() {
      if (this.listArray.length == 0 || this.listArray[0] == '')
        throw 'List is void'
      let chosenIndex = this.chooseRandomIndex();
      let chosenValue = this.listArray[chosenIndex];
      
      this.setResultToPrint(chosenValue);
      this.setErrorState(false);
    },
    pickRandomFromList: function() {
      if (this.listArray.length == 0 || this.listArray[0] == '')
        throw 'List is void'
      let chosenIndex = this.chooseRandomIndex();
      let chosenValue = this.listArray.splice(chosenIndex, 1);
      
      this.setResultToPrint(chosenValue);
      this.setListToReprint(chosenValue);
      this.setErrorState(false);
    },
    groupRandomlyFromTheList: function() {
      this.setResultToPrint('Haha! Still some coding to do');
      this.setErrorState(true);
    },
    chooseRandomIndex: function() {
      let randomNumber = Math.random();
      let maxIndex = this.listArray.length;
      return Math.floor(randomNumber * maxIndex);
    },
    setResultToPrint: function(resultToPrint) {
      this.$store.commit('setResultToPrint', resultToPrint);
    },
    setListToReprint: function(chosenValue) {
      if (chosenValue)
        this.$store.commit('setList', this.listArray.join('\n'));
      else
        this.$store.commit('setList', []);
    },
    setErrorState: function(isError) {
      this.$store.commit('setErrorState', !!isError);
    }
  }
}
</script>

<style scoped>
  #component, #arrow-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50vw;
    width: 50vw;
  }
  
  #page-title {
    font-size: 3rem;
  }
  
  #arrow-title {
    font-size: 1.5rem;
    position: relative;
    top: 2.5rem;
  }
  
  #arrow {
    background: #2c3e50;
    clip-path: polygon(0% 40%, 80% 40%, 80% 15%, 100% 50%, 80% 85%, 80% 60%, 0% 60%);
    height: 5rem;
    width: 80%;
  }
  
  #choice.group {
    display: grid;
/*    grid-column-gap: 10%;*/
    grid-template-columns: repeat(2, 1fr);
  }
  
  .choice-items {
    margin: 10px 24px;
    width: 240px;
  }
</style>
