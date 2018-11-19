<template>
  <section id="virtual-wrapper">
    <div id="component">

      <header id="right-panel-title">
        <h3>Here Goes Results</h3>
      </header>

      <section id="panel" :class="isError ? 'error' : ''">
        <textarea id="list-placeholder" :class="isError ? 'error' : ''" placeholder="Result will be here" v-model="listToPrint"></textarea>
      </section>
      
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    listToPrint() {
      return this.$store.getters.resultToPrint
    },
    isError() {
      return this.$store.getters.isError
    }
  },
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
    background: beige;
    border-radius: 6px;
    box-shadow: -1px 2px 2px rgba(20, 20, 20, .1), -1px 2px 6px rgba(20, 20, 20, .2);
    height: 60vh;
    min-width: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 400px;
  }
  
  #list-placeholder {
    background: rgba(255, 255, 255, .9);
    border: 0;
    border-radius: 6px;
    font-size: .8rem;
    height: 99%;
    line-height: 1.6rem;
    overflow-y: auto;
    padding: 1rem;
    resize: none;
    width: 99%;
  }
  
  #panel.error {
    background: #ff583a;
  }
  
  #list-placeholder.error {
    background: rgba(255, 242, 242, 0.9);
  }
</style>
