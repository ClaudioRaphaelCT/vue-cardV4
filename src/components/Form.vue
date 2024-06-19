<template>
  <v-alert v-show="alertaError" type="error" dismissible class="text-center">
    Erro ao inserir. Verifique se existe algum campo não preenchido.
  </v-alert>
  <div>
    <div class="text-center mt-5 mb-5" v-show="title">CADASTRAR USO</div>
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
          type="number"
          name="valor"
          label="Valor"
          v-model.number="newItem.valor"
        ></v-text-field>
        <v-checkbox label="Parcelado" v-model="parcelado"></v-checkbox>
        <v-btn block color="primary" dark type="submit">Confirmar</v-btn>
      </v-form>
    </v-sheet>
  </div>
  <AppFooter />
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
      alertaError: false,
      title: true,
    };
  },
  methods: {
    async cadastrar() {
      if (
        this.newItem.responsavel == "" ||
        this.newItem.data == "" ||
        this.newItem.local == "" ||
        this.newItem.valor <= 0
      ) {
        this.alertaError = true;
        this.title = false;
        return;
      } else {
        await cartaoMethods.cadastrar(this, this.newItem, this.parcelado);
        cartaoMethods.resetForm();
      }
    },
  },
  mixins: [Cartao],
};
</script>
