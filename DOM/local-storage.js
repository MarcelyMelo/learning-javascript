// O localStorage guarda os dados salvos do navegador entre as sessões, podendo abrir e fechar a página e os dados permanecerão.
// O sessionStorage guarda os dados somente enquanto a página estiver aberta.

// localStorage.setItem('name', 'Marcy')
// sessionStorage.setItem('name', 'Marcy')

// Isso será muito útil para guardar na memória do computador o carrinho de compras, onde o usuário poderar fechar, abrir, recarregar a página e etc e a informação permanecerá no carrinho

// Se as keys forem as mesmas, a mais nova irá sobrepor a anterior
localStorage.setItem('name', 'Marcy');
localStorage.setItem('name', 'Cely');

localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'Recife');

const name = localStorage.getItem('name');

console.log(name);

localStorage.removeItem('address');
localStorage.clear();

