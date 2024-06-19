<template>
  <v-card flat class="mt-5">
    <v-card-title class="d-flex align-center pe-2">
      &nbsp; Realizar busca no cartão

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table :headers="headers" :items="cartao.items" :search="search">
      <template v-slot:header="{ props }">
        <thead>
          <tr>
            <th
              v-for="header in props.headers"
              :key="header.value"
              class="grey--text"
            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
      </template>

      <template v-slot:footer.prepend> </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { Cartao } from "@/service/cartao";

export default {
  data() {
    return {
      search: "",
      cartao: [],
      filters: {
        local: "",
        data: "",
        valor: "",
      },
      headers: [
        { text: "Responsável", value: "responsavel", align: "start" },
        { text: "Local", value: "local", align: "start" },
        { text: "Data", value: "data", align: "start" },
        { text: "Valor", value: "valor", align: "end" },
      ],
    };
  },
  async created() {
    this.cartao = await Cartao.methods.getAll();
  },
  methods: {
    async fetchFilteredItems() {
      const filters = this.filters;
      this.cartao = await Cartao.methods.getFilteredItems(filters);
    },
  },
};
</script>

<style scoped>
thead th {
  background-color: #808080; /* Gray color */
  color: white;
}
</style>
