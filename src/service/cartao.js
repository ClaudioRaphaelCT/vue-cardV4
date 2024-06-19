import { db } from "@/connection/firebaseConnection";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export const Cartao = {
  methods: {
    formatDate(date) {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    async getAll() {
      const snapShot = await getDocs(collection(db, "cartao"));
      const all = snapShot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      // Calcular o total dos valores e a quantidade de documentos
      const total = all.reduce((acc, item) => acc + item.valor, 0);
      const quantidade = all.length;

      return { items: all, total, quantidade };
    },
    async create(newItem) {
      // Formatando a data para dd/MM/yyyy antes de enviar ao Firestore
      if (newItem.data) {
        newItem.data = this.formatDate(newItem.data);
      }
      await addDoc(collection(db, "cartao"), newItem);
    },
    async edit(id, updatedItem) {
      const docRef = doc(db, "cartao", id);
      await updateDoc(docRef, updatedItem);
    },
    async delete(ids) {
      const promise = ids.map((id) => deleteDoc(doc(db, "cartao", id)));
      await Promise.all(promise);
    },
    async getRhaissa(name) {
      try {
        const select = query(
          collection(db, "cartao"),
          where("responsavel", "==", name)
        );
        const snapShot = await getDocs(select);
        const results = snapShot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        return results;
      } catch (error) {
        console.error("Error ao buscar itens com responsável Rhaissa:", error);
        throw error;
      }
    },
  },
};
