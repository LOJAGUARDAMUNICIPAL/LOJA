<style>
  .quantidade-container {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Alinha os itens à direita */
  }

  .quantidade-input {
    width: 50px;
    text-align: center;
  }

  .botao-alterar {
    background-color: #3498db;
    color: #ffffff;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 5px;
  }
</style>
</head>
<body>

<div class="quantidade-container">
  <input type="text" class="quantidade-input" value="1">
  <button class="botao-alterar" onclick="alterarQuantidade(this, -1)">-</button>
  <button class="botao-alterar" onclick="alterarQuantidade(this, 1)">+</button>
</div>

<script>
  function alterarQuantidade(botao, valor) {
    var quantidadeInput = botao.parentNode.querySelector('.quantidade-input');
    var quantidadeAtual = parseInt(quantidadeInput.value);

    if (valor === -1 && quantidadeAtual > 1) {
      quantidadeInput.value = quantidadeAtual + valor;
    } else if (valor === 1) {
      quantidadeInput.value = quantidadeAtual + valor;
    }
  }
</script>