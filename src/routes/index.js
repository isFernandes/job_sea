import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import SingUp from "@/views/Singup";

Vue.use(VueRouter);

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },
  {
    name: "SingUp",
    path: "/SingUp",
    component: SingUp,
  },
];

const router = new VueRouter({ routes });

export default router;
