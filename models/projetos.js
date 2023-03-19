class Projeto {
    constructor(id, nome, imagens) {
      this.id = id
      this.nome = nome
      this.imagens = imagens
    }
  }

const projetos = []

projetos[0] = new Projeto(
    1,
    'Pousada Haya',
    [
      'http://pousadahaya.com.br/assets/img/manguezal/001.JPG',
      'http://pousadahaya.com.br/assets/img/haya/006.JPG'
    ]
  );

projetos[1] = new Projeto (
    2,
    'Pousada Zai',
    [
        'http://pousadahaya.com.br/assets/img/manguezal/001.JPG',
        'http://pousadahaya.com.br/assets/img/haya/006.JPG'
    ]
)

module.exports = projetos

