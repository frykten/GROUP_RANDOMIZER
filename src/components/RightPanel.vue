<template>
  <section id="virtual-wrapper">
    <div id="component">

      <header id="right-panel-title">
        <h3>Here Goes Results</h3>
      </header>

      <section id="panel">
        <p></p>
      </section>
      
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #component {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  
  #panel {
    background: #fefefb;
    border: solid 1px beige;
    border-radius: 6px;
    box-shadow: -1px 2px 2px rgba(20, 20, 20, .1), -1px 2px 6px rgba(20, 20, 20, .2);
    height: 60vh;
    overflow-x: hidden;
    overflow-y: auto;
    width: 400px;
  }
</style>
