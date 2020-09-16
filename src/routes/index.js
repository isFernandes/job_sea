import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import SingUp from "@/views/Singup";
import RememberPassword from "@/views/RememberPassword";
import Feed from "@/views/Feed";


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
  },{
    name:"RecoverPassword",
    path:"/recover",
    component: RememberPassword,
  },
  {
    name:"Feed",
    path:"/feed",
    component: Feed,
  },
];

const router = new VueRouter({ routes });

export default router;
