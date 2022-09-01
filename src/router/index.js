import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewsDetail from "../views/news/NewsDetails.vue"

const routes = [
    {path: "/",name: "Home", component: Home},
    {path: "/newsdetails:id",name: "NewsDetails", component: NewsDetail},
    {path: "/:catchAll(.*)",redirect: "/"},
]

const router = createRouter({history: createWebHashHistory(process.env.BASE_URL), routes})

export default router