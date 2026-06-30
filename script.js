function calcular(){

    let area = Number(document.getElementById("area").value);
    let preservada = Number(document.getElementById("preservada").value);
    let agua = Number(document.getElementById("agua").value);
    let energia = document.getElementById("energia").value;

    let pontos = 0;

    if(area > 0){
        let porcentagem = (preservada/area)*100;

        if(porcentagem >= 20){
            pontos += 40;
        }else{
            pontos += 15;
        }
    }

    if(agua <= 1000){
        pontos += 30;
    }else{
        pontos += 10;
    }

    if(energia == "sim"){
        pontos += 30;
    }

    let texto="";

    if(pontos >=80){
        texto="🟢 Excelente! Sua propriedade é sustentável.";
    }
    else if(pontos >=50){
        texto="🟡 Boa sustentabilidade. Ainda pode melhorar.";
    }
    else{
        texto="🔴 Atenção! Invista em práticas sustentáveis.";
    }

    document.getElementById("resultado").innerHTML=
    "Pontuação: "+pontos+" pontos<br>"+texto;
}

function quiz(resposta){

    if(resposta=="certo"){
        document.getElementById("quizResultado").innerHTML=
        "✅ Parabéns! Você acertou.";
    }
    else{
        document.getElementById("quizResultado").innerHTML=
        "❌ Resposta incorreta.";
    }

}