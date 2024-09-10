import { createRouter, createWebHistory } from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import contactView from "../src/views/contactView.vue";

const localVue = createLocalVue();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/contact", name: "contact", component: contactView },
  ],
});

describe("Vue Router", () => {
  it("Carga Home", async () => {
    const wrapper = mount(HomeView, { global: { plugins: [router] } });
    await router.push("/");
    expect(wrapper.vm.$route.name).toBe("home");
  });

  it("Carga About", async () => {
    const wrapper = mount(AboutView, { global: { plugins: [router] } });
    await router.push("/about");
    expect(wrapper.vm.$route.name).toBe("about");
  });

  it("Carga contact", async () => {
    const wrapper = mount(contactView, { global: { plugins: [router] } });
    await router.push("/contact");
    expect(wrapper.vm.$route.name).toBe("contact");
  });

});