import { createRouter, createWebHistory } from "vue-router";
import Cartao from "../views/Cartao.vue";
import Cadastrar from "../views/Cadastrar.vue";
import Rhai from "@/views/Rhai.vue";
import Rapha from "@/views/Rapha.vue";
import Ambos from "@/views/Ambos.vue";
import Buscar from "@/views/Buscar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "cartao", component: Cartao },
    { path: "/cadastrar", name: "cadastrar", component: Cadastrar },
    { path: "/rhai", name: "rhai", component: Rhai, ignore: [".*"] },
    { path: "/rapha", name: "rapha", component: Rapha },
    { path: "/ambos", name: "ambos", component: Ambos },
    { path: "/buscar", name: "buscar", component: Buscar },
  ],
});

export default router;
