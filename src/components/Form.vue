<template>
  <div>
    <v-sheet class="mx-auto mb-4" width="400">
      <v-form @submit.prevent="cadastrar">
        <v-select
          :items="responsaveis"
          v-model="newItem.responsavel"
          label="Responsaveis"
        ></v-select>
        <v-text-field
          name="local"
          label="Local"
          v-model="newItem.local"
        ></v-text-field>
        <v-text-field
          name="data"
          label="Data"
          type="date"
          v-model="newItem.data"
        ></v-text-field>
        <v-text-field
          name="valor"
          label="Valor"
          v-model="newItem.valor"
        ></v-text-field>
        <v-checkbox label="Parcelado" v-model="parcelado"></v-checkbox>
        <v-btn block color="primary" dark type="submit">Confirmar</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import { Cartao } from "@/service/cartao";
import { cartaoMethods } from "@/service/methods/cartaoMethods";

export default {
  data() {
    return {
      newItem: {
        responsavel: "",
        local: "",
        data: "",
        valor: 0,
      },
      responsaveis: ["Rhaíssa", "Raphael", "Ambos"],
      parcelado: false,
    };
  },
  methods: {
    async cadastrar() {
      await cartaoMethods.cadastrar(this, this.newItem, this.parcelado);
      cartaoMethods.resetForm();
    },
  },
  mixins: [Cartao],
};
</script>
