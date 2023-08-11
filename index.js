let baseDeDados = `Nome, Autor, Ano, Descrição, ISBN
"Caminhos Entrelaçados", "Isabella Mendes", 2022, "Uma história envolvente de amor e amizade em meio aos desafios da vida moderna.", 978-1234567890
"O Mistério da Lua Dourada", "Gabriel Silva", 2018, "Uma emocionante aventura em busca de um tesouro lendário escondido por gerações.", 978-9876543210
"Segredos do Além", "Sofia Almeida", 2015, "Um thriller psicológico que explora os limites entre o real e o imaginário.", 978-5432109876
"O Refúgio das Estrelas", "Lucas Pereira", 2020, "Uma jornada emocionante pelo espaço sideral em busca de um novo lar para a humanidade.", 978-6789012345
"Renascer da Aurora", "Beatriz Santos", 2017, "Um romance histórico durante um período de transformação social e reviravoltas políticas.", 978-0123456789
"A Lenda do Horizonte", "Ricardo Oliveira", 2005, "Uma fábula encantadora seguindo os passos de um jovem aventureiro em busca do lendário Horizonte.", 978-7654321098
"Espíritos da Floresta", "Ana Ferreira", 2013, "Uma história ambientada em uma floresta encantada, onde os personagens se conectam com a natureza e os espíritos.", 978-0987654321
"O Enigma do Relógio", "Fernando Costa", 2019, "Um mistério intrincado envolvendo um relógio misterioso encontrado em um antiquário.", 978-2345678901
"Além das Estrelas", "Mariana Lima", 2008, "Uma viagem intergaláctica explorando mundos desconhecidos e civilizações alienígenas.", 978-8765432109
"Coração de Cristal", "André Ribeiro", 2016, "Um conto de fantasia sobre uma jovem destinada a salvar um reino mágico encontrando o lendário Coração de Cristal.", 978-3456789012
"Sombras do Passado", "Carla Andrade", 2014, "Um romance histórico com intrigas, paixões proibidas e reviravoltas dramáticas em cenários deslumbrantes.", 978-5678901234
"O Último Portal", "Pedro Carvalho", 2009, "Uma jornada emocionante por dimensões alternativas e mundos mágicos para salvar a realidade.", 978-7890123456
"O Segredo do Relicário", "Isabel Oliveira", 2011, "Um enigma através dos séculos, ligando um relicário sagrado a eventos históricos e mistérios ocultos.", 978-9012345678
"Voo das Borboletas", "Rafaela Sousa", 2010, "Uma narrativa cativante sobre a jornada de transformação de uma jovem tímida e insegura.", 978-1234567890
"O Mistério do Farol", "Gustavo Marques", 2012, "Um suspense envolvente em um farol isolado na costa, revelando segredos sombrios e perturbadores.", 978-2345678901
"Destino Entrelaçado", "Carolina Cruz", 2021, "Um romance épico que transcende o tempo e o espaço, unindo duas almas destinadas a se encontrarem.", 978-3456789012
"O Tesouro Perdido de Eldoria", "Hugo Martins", 2018, "Uma aventura emocionante em busca de um tesouro lendário escondido em um reino mágico.", 978-4567890123
"O Pacto das Sombras", "Lúcia Silva", 2013, "Um thriller sobrenatural com um detetive investigando crimes inexplicáveis envolvendo um pacto sombrio.", 978-5678901234
"O Legado da Estrela Negra", "Rodrigo Alves", 2017, "Uma fantasia épica seguindo o último guardião de uma joia mágica chamada Estrela Negra.", 978-7890123456
`;
function tratamento(dados) {
    dados = dados
        .trim()
        .split('\n')
        .slice(1)
        .map(dado => {
            dado = dado.split(`,`)
                .map(infos => infos.replaceAll(`"`, ``))
            return {
                titulo: dado[0].trim(),
                autor: dado[1].trim(),
                ano: dado[2].trim(),
                descricao: dado[3].trim(),
                isbn: dado[4].trim()
            }
        })
    return dados
}
function organizando(dados) {
    dados = dados.sort((a, b) => {
        a = a.titulo
        b = b.titulo
        return a.localeCompare(b)
    })
    return dados
}

baseDeDados = tratamento(baseDeDados)
baseDeDados = organizando(baseDeDados)

const encontrarLivro = (nome) => {
    console.log(`Procurando por:${nome}`);
    const found = baseDeDados.find(dado => dado.titulo.toLowerCase() === nome.toLowerCase());

    Loading(2)
    function Loading(segundos) {

        const delay = 100;
        const iterations = segundos * (1000 / delay);

        let progressBar = "[                    ]";

        for (let i = 0; i < iterations; i++) {
            setTimeout(() => {
                const progresso = ((i + 1) / iterations * 20).toFixed(0);
                progressBar = "[" + "#".repeat(progresso) + " ".repeat(20 - progresso) + "]";
                // console.clear();
                console.log(`Carregando... ${progresso * 5}%`);
                console.log(progressBar);
            }, i * delay);
        }
        if (found != undefined) {
            setTimeout(() => {
                // console.clear();
                console.log("\n\nEncontrado:", `\n\nO livro "${found.titulo}" por ${found.autor}\nLancado no ano de ${found.ano}\nFala de ${found.descricao}\n\n\n\n`);
            }, iterations * delay);
        } else {
            setTimeout(() => {
                // console.clear();
                console.log(`ERRO 404 : LIVRO NAO ENCONTRADO`);
            }, iterations * delay);
        }


    }

}

const adicionarLivro = (titulo, autor, ano, desc, isbn) => {
    if (!baseDeDados.some(dado => dado.titulo == titulo && dado.autor == autor && dado.ano == ano)) {
        const livro = {
            titulo: titulo,
            autor: autor,
            ano: ano.toString(),
            descricao: desc,
            isbn: isbn.toString()
        }
        baseDeDados.push(livro)
        // console.clear()
        console.log(`\nLivro adicionado com sucesso!`);
        const index = baseDeDados.findIndex(dado => dado.ano == ano.toString())
        console.log(baseDeDados[index])
    } else {
        console.log(`Livro ja foi adicionado`)
    }
    organizando(baseDeDados)
}

const removerLivro = (nome) => {
    if (baseDeDados.some(dado => dado.titulo.toLowerCase() == nome.toLowerCase())) {
        const found = baseDeDados.find(dado => dado.titulo.toLowerCase() === nome.toLowerCase());
        baseDeDados = baseDeDados.filter(dado => dado != found)
    } else {
        console.log(`Livro nao existe`)
    }

}




adicionarLivro(`a`, `b`, 2000, `a`, 12312312123)


let novosDados = `Nome, Autor, Ano, Descrição, ISBN
"O Legado das Estrelas", "Mariana Lima", 2023, "Uma jornada cósmica que explora o legado deixado por antigas civilizações através das estrelas.", 978-5432109876
"O Silêncio da Noite", "André Ribeiro", 2015, "Um thriller psicológico que desvenda os segredos sombrios escondidos durante as longas noites.", 978-1234567890
"Corações em Conflito", "Isabel Oliveira", 2010, "Um romance arrebatador que acompanha a luta de dois corações em meio a um cenário de guerra e transformação.", 978-9876543210
"O Enigma do Atlas", "Gustavo Marques", 2019, "Uma aventura cheia de mistérios em busca do lendário Atlas, um artefato capaz de alterar a realidade.", 978-2345678901
"A Bailarina de Ébano", "Carolina Cruz", 2017, "Um conto fascinante sobre uma jovem bailarina que encontra magia e encantamento ao dançar com um parceiro inusitado.", 978-9012345678
"O Portal das Sombras", "Ricardo Oliveira", 2022, "Uma história épica que se desenrola entre dois mundos, onde um portal misterioso abre caminho para aventuras incríveis e perigos iminentes.", 978-3456789012
"Além do Horizonte", "Sofia Almeida", 2018, "Uma exploração emocional de descobertas e autodescobertas em uma jornada que ultrapassa os limites do horizonte.", 978-4567890123
"O Labirinto Esmeralda", "Lucas Pereira", 2013, "Uma busca fascinante por um tesouro lendário escondido no coração de um labirinto mágico.", 978-2345678901
"Raios de Esperança", "Beatriz Santos", 2016, "Uma narrativa inspiradora que segue personagens em sua jornada de superação e crescimento, iluminando o caminho com raios de esperança.", 978-6789012345
"A Canção do Vento", "Pedro Carvalho", 2011, "Uma aventura poética que segue um músico viajante enquanto ele busca a melodia perdida do vento em terras distantes.", 978-0987654321
"O Jardim Secreto", "Ana Ferreira", 2007, "Um conto encantador sobre um jardim mágico escondido, onde crianças descobrem a magia da amizade e da natureza.", 978-5678901234
"O Fogo Eterno", "Rafaela Sousa", 2020, "Uma fantasia épica que segue um grupo de heróis em sua busca para domar o poder do Fogo Eterno e salvar o mundo de uma ameaça ancestral.", 978-0123456789
"A Sombra da Lua", "Fernando Costa", 2014, "Um suspense sombrio que desvenda os segredos ocultos por trás do desaparecimento de pessoas em noites de lua cheia.", 978-7890123456
"O Relógio de Areia", "Lúcia Silva", 2009, "Um enigma cronológico que leva os personagens por uma jornada no tempo em busca do misterioso Relógio de Areia.", 978-6543210987
"Memórias Esquecidas", "Rodrigo Alves", 2018, "Uma história comovente sobre um homem em busca de suas memórias perdidas, descobrindo segredos enterrados no passado.", 978-2345678901
"O Legado da Penumbra", "Mariana Lima", 2015, "Uma jornada de heróis para desvendar os segredos do Legado da Penumbra e impedir a ascensão de um mal ancestral.", 978-8765432109
"Estrelas Cadentes", "Gustavo Marques", 2012, "Uma aventura intergaláctica que acompanha uma equipe de exploradores espaciais em busca das lendárias Estrelas Cadentes.", 978-0987654321
"O Tesouro do Abismo", "Carolina Cruz", 2017, "Uma busca submarina por um tesouro perdido, repleta de perigos marinhos e descobertas surpreendentes.", 978-9876543210
"O Guardião das Lendas", "Ricardo Oliveira", 2014, "Um conto mágico sobre o guardião responsável por proteger as lendas do mundo, até que um dia elas desaparecem misteriosamente.", 978-2345678901
"Vozes do Passado", "Sofia Almeida", 2021, "Um romance que transcende o tempo, conectando duas almas através das vozes sussurradas pelo vento do passado.", 978-3456789012
`
novosDados = tratamento(novosDados).map(dado => {
    adicionarLivro(dado.titulo, dado.autor, dado.ano, dado.descricao, dado.isbn)
})



console.log('base de dados:', baseDeDados.length)













// let dadosOrganizados = []
// let biblioteca = []



// baseDeDados.forEach(dado => {
//     dadosOrganizados.push(dado.split(`,`))
// })
// for (let i = 0; i < dadosOrganizados.length; i++) {
//     const dado = dadosOrganizados[i];
//     let objeto = {}
//     for (let i = 0; i < dado.length; i++) {
//         objeto.livro = dado[0]
//         objeto.autor = dado[1]
//         objeto.ano = dado[2]
//         objeto.descricao = dado[3]
//         objeto.isbn = dado[4]
//     }
//     biblioteca.push(objeto)
// }








