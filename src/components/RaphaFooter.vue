<template>
  <v-footer height="40" app>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <h4 class="text-center">Total Raphael: R$ {{ total.toFixed(2) }}</h4>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { Cartao } from "@/service/cartao";
export default {
  data() {
    return {
      total: 0,
      quantidade: 0,
    };
  },
  async created() {
    const totalCartao = await Cartao.methods.getRhaissa("Raphael");
    const totalAmbos = await Cartao.methods.getRhaissa("Ambos");
    const totalRaphael = totalAmbos.total / 2 + totalCartao.total;
    this.total = totalRaphael;
  },
};
</script>

<style scoped>
/* Estilos scoped específicos podem ser adicionados conforme necessário */
</style>
