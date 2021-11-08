//Renda Fixa
function ReservaDeEmergencia(){
    
    //variavéis
    var objetivo = document.getElementById("objetivo");
    var salario = document.getElementById("salario");
    var despesa = document.getElementById("despesa");
    var caixa = document.getElementById("caixa");
    var Correcao = 0;
    
    //Conexão com o HTML
    var Pobjetivo = document.getElementById("Pobjetivo");
    var Psalario = document.getElementById("Psalario");
    var Pdespesa = document.getElementById("Pdespesa");
    var Pcaixa = document.getElementById("Pcaixa");
    var text = document.getElementById("Mensal");
    var text2 = document.getElementById("Objetivo");

    //Conversão
    var Salario = Number(salario.value);
    const CalculoSalario = Salario <= 0
        ? Psalario.innerHTML = (`Você Tem Que Possuir Uma Renda`)
        : Correcao = Correcao + 1;

    var Despesa = Number(despesa.value);
    const CalculoDespesa = Despesa < 0
        ? Despesa = -Despesa
        : Despesa = Despesa
  
    var Objetivo = Number(objetivo.value)
    const CalculoObjetivo = Objetivo <= 0
        ? Pobjetivo.innerHTML = (`Seu Objetivo Não Pode Ser Negativo`)
        : Correcao = Correcao + 1;
    var Caixa = Number(caixa.value);

    console.log(Correcao)

    //Cálculos
    var liquido = Salario - Despesa;
    var tempo = (Objetivo - Caixa) / liquido

    //Impressão dos valores

    if (Correcao === 2 ){
        text.innerHTML = (`Olá, você possui um valor total de R$: ${liquido} mensal`);
        text2.innerHTML = (`Falta R$:${liquido} se continuar reservando patrimonio assim, chegara ao seu objetivo em ${parseInt(tempo)} meses`);
    }else {
        text.innerHTML = ("Por favor, preencha os campos corretamente")
        text2.innerHTML = ("  ")
    }
     

}

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
    var ImprimiCdi = (`Olá, você possui um valor total de R$: ${liquido} mensal, e ira demorar ${tempo} meses para chegar ao seu objetivo`);
    CalculoCdi.innerHTML = ImprimiCdi;
}