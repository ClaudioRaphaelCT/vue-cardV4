<template>
  <v-col cols="12" sm="3" md="4" lg="3">
    <v-card
      class="mx-4 mt-4"
      :class="{ itemSelecionado: isSelected }"
      @click="selecionar(user.id)"
    >
      <v-checkbox v-model="selected" class="select-checkbox"></v-checkbox>
      <v-img
        height="200px"
        v-if="user.responsavel == 'Rhaíssa'"
        src="../assets/Rhai.png"
        cover
      ></v-img>
      <v-img
        height="200px"
        v-if="user.responsavel == 'Raphael'"
        src="../assets/Eu.jpeg"
        cover
      ></v-img>
      <v-img
        height="200px"
        v-if="user.responsavel == 'Ambos'"
        src="../assets/noix.jpg"
        cover
      ></v-img>
      <v-card-title class="text-center">
        {{ user.local }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle class="mt-2"> {{ user.data }} </v-card-subtitle>
      <v-card-subtitle class="mt-1"> R$ {{ user.valor }} </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" block @click="openEditDialog(user)"
          >Editar</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-col>
  <v-dialog
    v-model="editDialog"
    align-center
    max-width="600px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title class="text-center">Editar Item</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="salvarEdicao">
          <v-text-field v-model="editItem.local" label="Local"></v-text-field>
          <v-text-field v-model="editItem.data" label="Data"></v-text-field>
          <v-text-field v-model="editItem.valor" label="Valor"></v-text-field>
          <v-checkbox v-model="editParcelado" label="Parcelado"></v-checkbox>
          <v-btn type="submit" color="primary" class="mr-4">Salvar</v-btn>
          <v-btn type="button" color="grey" @click="closeEditDialog"
            >Cancelar</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { cartaoMethods } from "@/service/methods/cartaoMethods";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editDialog: false,
      editItem: {
        id: "",
        local: "",
        data: "",
        valor: 0,
      },
      editParcelado: false,
      isSelected: false,
    };
  },
  methods: {
    selecionar(index) {
      this.isSelected = !this.isSelected;
      this.$emit("selection-change", this.user.id, this.isSelected);
    },
    openEditDialog(user) {
      // Abrir o diálogo de edição com os dados do card selecionado
      this.editItem = { ...user }; // Copia os dados para editItem
      this.editParcelado = user.parcelado || false; // Define o estado de parcelado
      this.editDialog = true; // Abre o diálogo
    },
    closeEditDialog() {
      this.editDialog = false; // Abre o diálogo
    },
    async salvarEdicao() {
      try {
        await cartaoMethods.atualizar(this.editItem);
      } catch (error) {
        console.log(`ERROR, ${error}`);
      }
    },
  },
};
</script>

<style scoped>
.itemSelecionado {
  border: 2px solid #42a5f5; /* Cor para indicar seleção */
}

.select-checkbox {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
