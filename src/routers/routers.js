import { createRouter, createWebHistory } from "vue-router";
import Cartao from "../views/Cartao.vue";
import Cadastrar from "../views/Cadastrar.vue";
import Rhai from "@/views/Rhai.vue";
import Rapha from "@/views/Rapha.vue";
import Ambos from "@/views/Ambos.vue";
import Buscar from "@/views/Buscar.vue";
import ErrorNotFound from "@/views/ErrorNotFound.vue";

const routes = [
  { path: "/", name: "cartao", component: Cartao },
  { path: "/cadastrar", name: "cadastrar", component: Cadastrar },
  { path: "/rhai", name: "rhai", component: Rhai },
  { path: "/rapha", name: "rapha", component: Rapha },
  { path: "/ambos", name: "ambos", component: Ambos },
  { path: "/buscar", name: "buscar", component: Buscar },
  { path: "/:catchAll(.*)*", name: "not-found", component: ErrorNotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
