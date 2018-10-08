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
      
      <section id="choice">
        <select name="choice" id="choice-select" class="choice-items" v-model="choiceSelected">
          <option value="" disabled selected>-- What will your choice be? --</option>
          <option value="choose">Will Choose a Random one</option>
          <option value="pick">Will Pick a Random one</option>
          <option value="group">Will Create Groups</option>
        </select>
        
        <input type="text" placeholder="How many groups?" id="choice-input-nb-groups" class="choice-items" v-if="choiceSelected === 'group'">
        
      </section>
      
      <button id="choice-submit" @click="chooseRandom">Hit me, Jack!</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      choiceSelected: ""
    }
  },
  methods: {
    chooseRandom: function() {
      console.log(this.choiceSelected)
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
  
  #choice {
    display: grid;
/*    grid-column-gap: 10%;*/
    grid-template-columns: repeat(2, 1fr);
  }
  
  .choice-items {
    margin: 10px 24px;
    width: 240px;
  }
</style>
