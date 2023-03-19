class Projeto {
    constructor(id, nome, descricao, imagens) {
      this.id = id
      this.nome = nome
      this.descricao = descricao
      this.imagens = imagens
    }
  }

const projetos = []

projetos[0] = new Projeto(
    1,
    'Pousada Haya',
    'Pousada São Miguel dos Milagres',
    [
      'http://pousadahaya.com.br/assets/img/manguezal/001.JPG',
      'http://pousadahaya.com.br/assets/img/haya/006.JPG'
    ]
  );

projetos[1] = new Projeto (
    2,
    'Pousada Zai',
    'Pousada São Miguel dos Milagres',
    [
        'http://pousadahaya.com.br/assets/img/manguezal/001.JPG',
        'http://pousadahaya.com.br/assets/img/haya/006.JPG'
    ]
)

module.exports = projetos

