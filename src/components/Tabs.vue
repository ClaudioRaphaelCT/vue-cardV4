<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      show-arrows
      centered
      fixed-tabs
      grow
    >
      <v-tab :class="{ 'active-tab': tab === 0 }" to="/">Cartão</v-tab>
      <v-tab :class="{ 'active-tab': tab === 1 }" to="/cadastrar"
        >Cadastrar</v-tab
      >
      <v-tab :class="{ 'active-tab': tab === 2 }" to="/rhai">Rhaí</v-tab>
      <v-tab :class="{ 'active-tab': tab === 3 }" to="/rapha">Rapha</v-tab>
      <v-tab :class="{ 'active-tab': tab === 4 }" to="/ambos">Ambos</v-tab>
      <v-tab :class="{ 'active-tab': tab === 5 }" to="/buscar">Buscar</v-tab>
    </v-tabs>
  </v-card>
  <div><RouterView /></div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style scoped>
.active-tab {
  background-color: rgba(
    255,
    238,
    0,
    0.767
  ); /* Adicione o estilo que você quiser para a tab ativa */
  color: black; /* Altere a cor do texto para melhor contraste */
}

.v-tabs {
  overflow-x: auto; /* Permite que os tabs rolem horizontalmente em dispositivos pequenos */
  white-space: nowrap; /* Impede a quebra de linha dentro dos tabs */
  background-color: rgba(0, 162, 255, 0.664);
}

.v-tab {
  flex: 1 1 auto; /* Ajusta os tabs para ocuparem espaço disponível */
  text-align: center; /* Centraliza o texto dentro dos tabs */
}
</style>
