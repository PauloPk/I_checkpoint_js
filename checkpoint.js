//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//  Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function microondas(comida,tempo){

    const pipocaTime = 10;
    const brigadeiroTime = 8;
    const feijaoTime = 12;
    const carneTime = 15;
    const macarraoTime = 8;


    if(comida !== 'pipoca' && comida !== 'macarrão' && comida !== 'carne' && comida !== 'feijão' && comida !== 'brigadeiro')  console.log('Prato inexistente');
    
    //pipoca

    if(comida === 'pipoca' && tempo < pipocaTime) {
        return console.log("tempo insuficiente")
    }
    if(comida === 'pipoca' && tempo == pipocaTime * 3) {
        return console.log("Kabumm")
    }  
    if(comida === 'pipoca' && tempo == pipocaTime * 2) {
        return console.log("A comida queimou")
    }
    else if(comida === 'pipoca' && tempo >= pipocaTime) {
        return console.log("Prato pronto, bom apetite!!!")
    }
    
    

    //macarrão
    if(comida === 'macarrão' && tempo < macarraoTime) {
        return console.log("tempo insuficiente")
    }
    if(comida === 'macarrão' && tempo == macarraoTime * 3) {
        return console.log("Kabumm")
    }
    if(comida === 'macarrão' && tempo == macarraoTime * 2) {
        return console.log("A comida queimou")
    }
    else if(comida === 'macarrão' && tempo == macarraoTime) {
        return console.log("Prato pronto, bom apetite!!!")
    }
    
    
    //Brigadeiro
    if(comida === 'brigadeiro' && tempo < brigadeiroTime) {
        return console.log("tempo insuficiente")
    }
    if(comida === 'brigadeiro' && tempo == brigadeiroTime * 3) {
        return console.log("Kabumm")
    }
    if(comida === 'brigadeiro' && tempo == brigadeiroTime * 2) {
        return console.log("A comida queimou")
    }
    else if(comida === 'brigadeiro' && tempo == brigadeiroTime) {
        return console.log("Prato pronto, bom apetite!!!")
    }
    
     
    
    //Feijão
    if(comida === 'feijão' && tempo < feijaoTime) {
        return console.log("tempo insuficiente")
    }
    if(comida === 'feijão' && tempo == feijaoTime * 3) {
        return console.log("Kabumm")
    } 
    if(comida === 'feijão' && tempo == feijaoTime * 2) {
        return console.log("A comida queimou")
    }
    else if(comida === 'feijão' && tempo == feijaoTime) {
        return console.log("Prato pronto, bom apetite!!!")
    }
    
    

    //Carne
    if(comida === 'carne' && tempo < carneTime) {
        return console.log("tempo insuficiente")
    }
    if(comida === 'carne' && tempo == carneTime * 3) {
        return console.log("Kabumm")
    } 
    if(comida === 'carne' && tempo == carneTime * 2) {
        return console.log("A comida queimou")
    }
    else if(comida === 'carne' && tempo == carneTime) {
        return console.log("Prato pronto, bom apetite!!!")
    }
    
    

 

}

microondas( 'figado', 45)
//microondas(1,20);

