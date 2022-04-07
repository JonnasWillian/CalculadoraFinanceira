//Reserva De Emergencia
function EmergencyReserve(){
    
    //variavéis
    var goal = document.getElementById("goal");
    var wage = document.getElementById("wage");
    var extraincome = document.getElementById("extraincome");
    var expense = document.getElementById("expense");
    var extraexpense = document.getElementById("extraexpense");
    var box = document.getElementById("box");
    var Correction = 0;
    
    
    //Conexão com o HTML
    var Pgoal = document.getElementById("Pgoal");
    var Pwage = document.getElementById("Pwage");
    var Pexpense = document.getElementById("Pexpense");
    var Monthly = document.getElementById("Monthly");
    var TextGoal = document.getElementById("Goal");
    var Pextraexpense = document.getElementById("Pextraexpense");
    var Pextraincome = document.getElementById("Pextraincome");

    //Conversão
    var Goal = Number(goal.value)
    const CalculationGoal = Goal <= 0
        ? Pgoal.innerHTML = (`Seu Objetivo Não Pode Ser Negativo`)
        : Correction = Correction + 1;

    var Box = Number(box.value);

    var Wage = Number(wage.value);
    const CalculationWage  = Wage <= 0
        ? Pwage.innerHTML = (`Você Tem Que Possuir Uma Renda`)
        : Correction = Correction + 1;

    var Extraincome = Number(extraincome.value)
    const CalculationExtraincome = Extraincome <= -1 
        ?Pextraincome.innerHTML=("Você Tem Que Possuir Um Extra Maior Que 0")
        :Correction = Correction + 1

    var Expense = Number(expense.value);
    const CalculationExpense = Expense < 0
        ? Pexpense.innerHTML = (`Por Favor, Digite Um Número Positivo`)
        : Correction = Correction + 1;

    var Extraexpense = Number(extraexpense.value)
    const CalculationExtraExpense = Extraexpense < 0
        ? Pextraexpense.innerHTML = (`Por Favor, Digite Um Número Positivo`)
        : Correction = Correction + 1;

    //Cálculos
    var NetSalary = (Wage + Extraincome) - (Expense + Extraexpense)
    var Time = (Goal - Box) / NetSalary

    //Impressão dos valores

    if (Correction === 5 ){
        Monthly.innerHTML = (`Olá, você possui um valor total de R$: ${NetSalary} mensal`);
        TextGoal.innerHTML = (`Falta R$:${Goal - Box} se continuar reservando patrimônio assim, chegará ao seu objetivo em ${Math.ceil(Time)} meses`);
        Pgoal.innerHTML = (``)
        Pwage.innerHTML = (``)
        Pexpense.innerHTML = (``)
        Pextraexpense.innerHTML = (``)
        Pextraincome.innerHTML = (``)
    }else {
        Monthly.innerHTML = ("Por favor, preencha os campos corretamente")
        TextGoal.innerHTML = ("")
    }   

    return Monthly, TextGoal, Pexpense,Pgoal,Pwage
}

//Limpar Campos
function Clean(){
    document.getElementById("goal").value = "";
    document.getElementById("wage").value = "";
    document.getElementById("expense").value = "";
    document.getElementById("box").value = "";
    document.getElementById("extraincome").value = "";
    document.getElementById("extraexpense").value = "";
    var Monthly = document.getElementById("Monthly");
    var TextGoal = document.getElementById("Goal");
    var Pwage = document.getElementById("Pwage");
    var Pgoal = document.getElementById("Pgoal");
    var Pexpense = document.getElementById("Pexpense");
    var Pextraexpense = document.getElementById("Pextraexpense");
    var Pextraincome = document.getElementById("Pextraincome");
    Monthly.innerHTML = ("");
    TextGoal.innerHTML = ("");
    Pgoal.innerHTML = (``);
    Pwage.innerHTML = (``);
    Pexpense.innerHTML = (``);
    Pextraexpense.innerHTML = (``);
    Pextraincome.innerHTML = (``);
}

//CDI
function CDI(){
    //Variavéis
    var cdi = document.getElementById("cdi")
    var time = document.getElementById("time")
    var price = document.getElementById("price")
    var Correction = 0;
    var tax = document.getElementById("tax")

    //Conexão com o HTML
    var CalculationCdi = document.getElementById("CdiCalculation")
    var Goal = document.getElementById("Goal")
    var Pcdi = document.getElementById("Pcdi")
    var Ptime = document.getElementById("Ptime")
    var Pprice = document.getElementById("Pprice")
    var Ptax = document.getElementById("Ptax")

    //conversão
    var Cdi = Number(cdi.value)
    const CalculationCDI = Cdi <= 0
        ?Pcdi.innerHTML=("Você Tem Que Possuir Uma Rentabilidade Maior Que 0")
        :Correction = Correction + 1

    var Time = Number(time.value)
    const CalculationTime = Time <= 0
        ?Ptime.innerHTML=("A duração Do Investimento Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    var Price = Number(price.value)
    const CalculationPrice = Price <= 0
        ?Pprice.innerHTML=("Valor Do Investimento Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    var Tax = Number(tax.value)
    const TaxAmount = Tax < 0
        ?Ptax.innerHTML=("Valor Do Imposto Não Pode Ser Negativo")
        :Correction = Correction + 1

    //Cálculo
    var Yield = Cdi / 12;
    
    for (var counter = 0; counter < Time; counter++){
        var sum = (Price * Yield) /100;
        var TaxCharged = (sum * Tax)/100;
        Price = (Price + sum) - TaxCharged;
        var ActualIncome = Price;
    }

    //Impressão De Valores
    if (Correction === 4 ){
        CalculationCdi.innerHTML = (`Olá, o juros do CDI seria ${Yield}% mensal, você conseguiria R$: ${ActualIncome} até o final do tempo proposto`);
        Goal.innerHTML = (``)
        Pcdi.innerHTML = (``)
        Pprice.innerHTML = (``)
        Ptime.innerHTML = (``)
        Ptax.innerHTML = (``)
    }else {
        Goal.innerHTML = ("Por favor, preencha os campos corretamente")
        CalculationCdi.innerHTML = ("")
    }   
}

//Limpar Campos
function Clean1(){
    document.getElementById("cdi").value="";
    document.getElementById("time").value="";
    document.getElementById("price").value="";
    document.getElementById("tax").value="";
    var CalculationCdi = document.getElementById("CdiCalculation")
    var Goal = document.getElementById("Goal")
    var Pcdi = document.getElementById("Pcdi")
    var Ptime = document.getElementById("Ptime")
    var Pprice = document.getElementById("Pprice")
    var Ptax = document.getElementById("Ptax")
    CalculationCdi.innerHTML = ("");
    Goal.innerHTML = (``)
    Pcdi.innerHTML = (``)
    Pprice.innerHTML = (``)
    Ptime.innerHTML = (``)
    Ptax.innerHTML = (``)
}

//LCI e LCA
function LCI(){
    //Variavéis
    var cdi = document.getElementById("Cdi")
    var time = document.getElementById("Time")
    var price = document.getElementById("Price")
    var Correction = 0;
    var tax = document.getElementById("Tax")

    //Conexão com o HTML
    var CalculationCdi = document.getElementById("cdiCalculation")
    var Goal = document.getElementById("GOAL")
    var Pcdi = document.getElementById("pcdi")
    var Ptime = document.getElementById("ptime")
    var Pprice = document.getElementById("pprice")
    var Ptax = document.getElementById("ptax")

    //conversão
    var Cdi = Number(cdi.value)
    const CalculationCDI = Cdi <= 0
        ?Pcdi.innerHTML=("Você Tem Que Possuir Uma Rentabilidade Maior Que 0")
        :Correction = Correction + 1

    var Time = Number(time.value)
    const CalculationTime = Time <= 0
        ?Ptime.innerHTML=("A duração Do Investimento Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    var Price = Number(price.value)
    const CalculationPrice = Price <= 0
        ?Pprice.innerHTML=("Valor Do Investimento Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    var Tax = Number(tax.value)
    const TaxAmount = Tax <= 0
        ?Ptax.innerHTML=("Valor Do Imposto Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    //Cálculo
    var Yield = Cdi / 12;
    
    for (var counter = 0; counter < Time; counter++){
        var sum = (Price * Yield) /100;
        var TaxCharged = (sum * Tax)/100;
        Price = Price + TaxCharged;
        var ActualIncome = Price;
    }

    //Impressão De Valores
    if (Correction === 4 ){
        CalculationCdi.innerHTML = (`Olá, o juros do CDI seria ${Tax}% mensal, você conseguiria R$:${ActualIncome} até o final do tempo proposto`);
        Goal.innerHTML = (``)
        Pcdi.innerHTML = (``)
        Pprice.innerHTML = (``)
        Ptime.innerHTML = (``)
        Ptax.innerHTML = (``)
    }else {
        Goal.innerHTML = ("Por favor, preencha os campos corretamente")
        CalculationCdi.innerHTML = ("")
    }   
}

//Limpar Campos
function Clean2(){
    document.getElementById("Cdi").value="";
    document.getElementById("Time").value="";
    document.getElementById("Price").value="";
    document.getElementById("Tax").value="";
    var CalculationCdi = document.getElementById("cdiCalculation")
    var Goal = document.getElementById("GOAL")
    var Pcdi = document.getElementById("pcdi")
    var Ptime = document.getElementById("ptime")
    var Pprice = document.getElementById("pprice")
    var Ptax = document.getElementById("ptax")
    CalculationCdi.innerHTML = ("");
    Goal.innerHTML = (``)
    Pcdi.innerHTML = (``)
    Pprice.innerHTML = (``)
    Ptime.innerHTML = (``)
    Ptax.innerHTML = (``)
}

//FII
function FII(){
    //Variavéis
    var fii = document.getElementById("fii")
    var taxx = document.getElementById("taxfii")
    var Correction = 0;

    //Conexão com o HTML
    var CalculationFii = document.getElementById("FiiCalculation")
    var Goaal = document.getElementById("Goaal")
    var Pfii = document.getElementById("Pfii")
    var Ptaxfii = document.getElementById("Ptaxfii")

    //conversão
    var Fii = Number(fii.value)
    const CalculationFII = Fii <= 0
        ?Pfii.innerHTML=("Você Não Pode Ter Investimento Igual A 0")
        :Correction = Correction + 1

    var Taxx = Number(taxx.value)
    const TaxAmount = Taxx <= 0
        ?Ptaxfii.innerHTML=("Valor Do Rendimento Não Pode Ser Negativo")
        :Correction = Correction + 1

    //Cálculo
    var sum = (Taxx * Fii) /100

    //Impressão De Valores
    if (Correction === 2 ){
        CalculationFii.innerHTML = (`Seu rendimento mensal a essa taxa seria de R$: ${sum}`);
        Goaal.innerHTML = (``)
        Pfii.innerHTML = (``)
        Ptaxfii.innerHTML = (``)
    }else {
        Goaal.innerHTML = ("Por favor, preencha os campos corretamente")
        CalculationFii.innerHTML = ("")
    }   
}

//Limpar Campos
function Clean3(){
    document.getElementById("fii").value="";
    document.getElementById("taxfii").value="";
    var CalculationFii = document.getElementById("FiiCalculation")
    var Goaal = document.getElementById("Goaal")
    var Pfii = document.getElementById("Pfii")
    var Ptaxfii = document.getElementById("Ptaxfii")
    CalculationFii.innerHTML = ("");
    Goaal.innerHTML = (``)
    Pfii.innerHTML = (``)
    Ptaxfii.innerHTML = (``)
}

//CDB
function CDB(){
    //Variavéis
    var cdi = document.getElementById("cdii")
    var time = document.getElementById("tiime")
    var price = document.getElementById("priice")
    var Correction = 0;
    var tax = document.getElementById("taxx")

    //Conexão com o HTML
    var CalculationCdi = document.getElementById("CdiCalculation")
    var Goal = document.getElementById("Goal")
    var Pcdi = document.getElementById("Pcdi")
    var Ptime = document.getElementById("Ptime")
    var Pprice = document.getElementById("Pprice")
    var Ptax = document.getElementById("Ptax")

    //conversão
    var Cdi = Number(cdi.value)
    const CalculationCDI = Cdi <= 0
        ?Pcdi.innerHTML=("Você Tem Que Possuir Uma Rentabilidade Maior Que 0")
        :Correction = Correction + 1

    var Time = Number(time.value)
    const CalculationTime = Time <= 0
        ?Ptime.innerHTML=("A duração Do Investimento Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    var Price = Number(price.value)
    const CalculationPrice = Price <= 0
        ?Pprice.innerHTML=("Valor Do Investimento Tem Que Ser Maior Que 0")
        :Correction = Correction + 1

    var Tax = Number(tax.value)
    const TaxAmount = Tax < 0
        ?Ptax.innerHTML=("Valor Do Imposto Não Pode Ser Negativo")
        :Correction = Correction + 1

    //Cálculo
    var Yield = Cdi / 12;
    
    for (var counter = 0; counter < Time; counter++){
        var sum = (Price * Yield) /100;
        var TaxCharged = (sum * Tax)/100;
        Price = (Price + sum) - TaxCharged;
        var ActualIncome = Price;
    }

    //Impressão De Valores
    if (Correction === 4 ){
        CalculationCdi.innerHTML = (`Olá, o juros do CDI seria ${Yield}% mensal, você conseguiria R$: ${ActualIncome} até o final do tempo proposto`);
        Goal.innerHTML = (``)
        Pcdi.innerHTML = (``)
        Pprice.innerHTML = (``)
        Ptime.innerHTML = (``)
        Ptax.innerHTML = (``)
    }else {
        Goal.innerHTML = ("Por favor, preencha os campos corretamente")
        CalculationCdi.innerHTML = ("")
    }   
}

//Limpar Campos
function Clean4(){
    document.getElementById("cdii").value="";
    document.getElementById("tiime").value="";
    document.getElementById("priice").value="";
    document.getElementById("taxx").value="";
    var CalculationCdi = document.getElementById("CdiCalculation")
    var Goal = document.getElementById("Goal")
    var Pcdi = document.getElementById("Pcdi")
    var Ptime = document.getElementById("Ptime")
    var Pprice = document.getElementById("Pprice")
    var Ptax = document.getElementById("Ptaxx")
    CalculationCdi.innerHTML = ("");
    Goal.innerHTML = (``)
    Pcdi.innerHTML = (``)
    Pprice.innerHTML = (``)
    Ptime.innerHTML = (``)
    Ptax.innerHTML = (``)
}