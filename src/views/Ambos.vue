<template>
  <v-container>
    <div class="text-center mt-5 mb-5">Utilizações de Ambos</div>
    <v-btn
      v-show="showBtn"
      @click="deleteSelectedCards"
      color="red"
      class="mx-4"
      >Excluir selecionados</v-btn
    >
    <v-row>
      <CardItem
        v-for="(user, index) in cartao"
        :key="index"
        :user="user"
        @selection-change="handleSelectionChange"
      />
    </v-row>
  </v-container>
</template>
<script>
import { Cartao } from "@/service/cartao";
import { cartaoMethods } from "@/service/methods/cartaoMethods";
export default {
  data() {
    return {
      cartao: [],
      selectedIds: [],
      showBtn: false,
    };
  },
  async created() {
    this.cartao = await Cartao.methods.getRhaissa("Ambos");
  },
  methods: {
    handleSelectionChange(userId, isSelected) {
      if (isSelected) {
        this.selectedIds.push(userId);
      } else {
        const index = this.selectedIds.indexOf(userId);
        if (index !== -1) {
          this.selectedIds.splice(index, 1);
        }
      }
      if (this.selectedIds.length > 0) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    },
    async deleteSelectedCards() {
      try {
        await cartaoMethods.deletar(this.selectedIds);
        // Remover os cards da lista local após excluir no Firestore
        this.cartao = this.cartao.filter(
          (user) => !this.selectedIds.includes(user.id)
        );
        // Limpar a lista de seleção após excluir
        this.selectedIds = [];
      } catch (error) {
        console.error("Erro ao excluir os cartões:", error);
      }
    },
  },
};
</script>
<style></style>
