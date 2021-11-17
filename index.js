//Renda Fixa
function ReservaDeEmergencia(){
    
    //variavéis
    var objetivo = document.getElementById("objetivo");
    var salario = document.getElementById("salario");
    var rendaextra = document.getElementById("rendaextra");
    var despesa = document.getElementById("despesa");
    var despesaextra = document.getElementById("despesaextra");
    var caixa = document.getElementById("caixa");
    var Correcao = 0;
    
    
    //Conexão com o HTML
    var Pobjetivo = document.getElementById("Pobjetivo");
    var Psalario = document.getElementById("Psalario");
    var Pdespesa = document.getElementById("Pdespesa");
    var Pcaixa = document.getElementById("Pcaixa");
    var text = document.getElementById("Mensal");
    var text2 = document.getElementById("Objetivo");
    var Pdespesaextra = document.getElementById("PdespesaExtra");
    var Pextra = document.getElementById("Prendaextra");

    //Conversão
    var Objetivo = Number(objetivo.value)
    const CalculoObjetivo = Objetivo <= 0
        ? Pobjetivo.innerHTML = (`Seu Objetivo Não Pode Ser Negativo`)
        : Correcao = Correcao + 1;

    var Caixa = Number(caixa.value);

    var Salario = Number(salario.value);
    const CalculoSalario = Salario <= 0
        ? Psalario.innerHTML = (`Você Tem Que Possuir Uma Renda`)
        : Correcao = Correcao + 1;

    var RendaExtra = Number(rendaextra.value)
    const CalculoRendaExtra = RendaExtra <= -1 
        ?Pextra.innerHTML=("Você Tem Que Possuir Um Extra Maior Que 0")
        :Correcao = Correcao + 1

    var Despesa = Number(despesa.value);
    const CalculoDespesa = Despesa < 0
        ? Pdespesa.innerHTML = (`Por Favor, Digite Um Número Positivo`)
        : Correcao = Correcao + 1;

    var Despesaextra = Number(despesaextra.value)
    const CalculoDespesaExtra = Despesaextra < 0
        ? Pdespesaextra.innerHTML = (`Por Favor, Digite Um Número Positivo`)
        : Correcao = Correcao + 1;

    //Cálculos
    var liquido = (Salario + RendaExtra) - (Despesa + Despesaextra)
    //var liquido = Salario - (Despesa + Despesaextra);
    var tempo = (Objetivo - Caixa) / liquido

    //Impressão dos valores

    if (Correcao === 5 ){
        text.innerHTML = (`Olá, você possui um valor total de R$: ${liquido} mensal`);
        text2.innerHTML = (`Falta R$:${Objetivo - Caixa} se continuar reservando patrimonio assim, chegará ao seu objetivo em ${parseInt(tempo)} meses`);
        Pobjetivo.innerHTML = (``)
        Psalario.innerHTML = (``)
        Pdespesa.innerHTML = (``)
        Pdespesaextra.innerHTML = (``)
        Pextra.innerHTML = (``)
    }else {
        text.innerHTML = ("Por favor, preencha os campos corretamente")
        text2.innerHTML = ("")
    }   

    return text, text2, Pdespesa,Pobjetivo,Psalario
}

//Limpar Campos
function limpar(){
    document.getElementById("objetivo").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("despesa").value = "";
    document.getElementById("caixa").value = "";
    document.getElementById("rendaextra").value = "";
    document.getElementById("despesaextra").value = "";
    var text = document.getElementById("Mensal");
    var text2 = document.getElementById("Objetivo");
    var Pobjetivo = document.getElementById("Pobjetivo");
    var Psalario = document.getElementById("Psalario");
    var Pdespesa = document.getElementById("Pdespesa");
    var Pdespesaextra = document.getElementById("PdespesaExtra");
    var Pextra = document.getElementById("Prendaextra");
    text.innerHTML = ("");
    text2.innerHTML = ("");
    Pobjetivo.innerHTML = (``);
    Psalario.innerHTML = (``);
    Pdespesa.innerHTML = (``);
    Pdespesaextra.innerHTML = (``);
    Pextra.innerHTML = (``);
}

//Renda Fixa
function RendaFixa(){
    //Variavéis
    var cdi = document.getElementById("cdi")
    var duracao = document.getElementById("duracao")
    var valor = document.getElementById("valor")

    //Conexão com o HTML
    var CalculoCdi = document.getElementById("CdiCalculo")

    //conversão
    var Cdi = Number(cdi.value)
    var Duracao = Number(duracao.value)
    var Valor = Number(valor.value)

    //Calculo

    //Impressão De Valores
    var ImprimiCdi = (`Olá, você possui um valor total de R$: ${Cdi} mensal, e ira demorar ${Duracao} meses para chegar ao seu objetivo`);
    CalculoCdi.innerHTML = ImprimiCdi;
}