const elementos = [
    {tag: 'p', texto: 'Meu Paragrafo'},
    {tag: 'div', texto: 'Minha Div'},
    {tag: 'footer', texto: 'Meu Footer'},
    {tag: 'section', texto: 'Meu Section'
    }
];

const [lista1, lista2, lista3, lista4] = elementos;

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div)