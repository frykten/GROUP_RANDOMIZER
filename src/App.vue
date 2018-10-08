<template>
  <div id="app">
    <left-panel id="left-panel" class="sections"></left-panel>

    <section id="center" class="sections">
      
<!--      <img src="./assets/logo.png">-->
      <middle-panel id="middle-panel"></middle-panel>
<!--      <router-view/>-->
      
    </section>

    <right-panel id="right-panel" class="sections"></right-panel>

  </div>
</template>

<script>
  import LeftPanel from './components/LeftPanel.vue'
  import MiddlePanel from './components/MiddlePanel.vue'
  import RightPanel from './components/RightPanel.vue'
  
  export default {
    name: 'App',
    components: {
      LeftPanel,
      MiddlePanel,
      RightPanel
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  
  body {
    background: hsl(0, 0%, 99%);
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  #app {
    color: #2c3e50;
    display: grid;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    grid-template-columns: repeat(4, 1fr);
    height: inherit;
    text-align: center;
    width: inherit;
  }
  
  .sections {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  #left-panel {
  }

  #center {
    grid-column: 2 / 4;
  }

  #right-panel {
  }
</style>
