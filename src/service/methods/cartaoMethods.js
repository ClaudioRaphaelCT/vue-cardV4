import { Cartao } from "../cartao";

export const cartaoMethods = {
  resetForm(contexto) {
    contexto.newItem = {
      responsavel: "",
      local: "",
      data: "",
      valor: 0,
    };
    contexto.parcelado = false;
  },
  async cadastrar(contexto, newItem, parcelado) {
    if (parcelado) {
      newItem.local = newItem.local.toUpperCase() + " - PARCELADO!";
    } else {
      newItem.local = newItem.local.toUpperCase();
    }
    try {
      await contexto.create(newItem);
      this.resetForm(contexto);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar item");
    }
  },
  async atualizar(updatedItem) {
    try {
      await Cartao.methods.edit(updatedItem.id, updatedItem);
      location.reload();
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Erro ao atualizar item");
    }
  },
  async deletar(ids) {
    try {
      await Cartao.methods.delete(ids);
      location.reload();
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Erro ao atualizar item");
    }
  },
};
