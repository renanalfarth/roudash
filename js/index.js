// COMPONENTS
const Home      = { template: '<div>Home</div>' };
const Promocoes = { template: '<div>Promoções </div>' };
const Cotacoes  = { template: '<div>Cotações</div>' };
const Tempo     = { template: '<div>Tempo</div>' };

// ROUTES
const routes = [
  { path: '/', component: Home },
  { path: '/promocoes', component: Promocoes },
  { path: '/cotacoes', component: Cotacoes },
  { path: '/tempo', component: Tempo }
];

// ROUTER
const router = new VueRouter({
  routes // short for `routes: routes`
});

var app = new Vue({router, data: {teste:1}}).$mount('#app');
