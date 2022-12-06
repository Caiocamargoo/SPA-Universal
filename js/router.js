export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event // verifica se eu passei o evento, se eu nao passei pega o evento que esta na janela
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href) // coloca no seu historico que estou mudando de pagina
    
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    
         // serve para pegar algo na internet ou na nossa pagina, e sempre retorna uma PROMESSA
    
         // Prometo pra voce que vou ir buscar essa rota, quando eu concluir, PROMETO que vou executar uma funcao
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}



