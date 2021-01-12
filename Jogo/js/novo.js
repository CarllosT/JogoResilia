let exp1 = document.getElementById("explicação")
let exp2 = document.getElementById("aceitar")
let bt1 = document.getElementById("b1")
let bt2 = document.getElementById("b2")

function começar() {
    if(iniciarOgame == true){
        clicarSim;
    }else{
        clicarNão();
    }
}

function clicarSim() {
    exp1.innerHTML = `<img src=img/Scarif.png>`
    exp2.innerHTML = `Você decidiu se juntar a aliança, a nave partindo ao planeta o aguarda. Você entrará nela?`
    bt1.onclick = entrarNave
    bt2.onclick = outroMeio  

}

function clicarNão() {
    exp1.innerHTML = `<img src=./images/gameOver.png>`
    exp2.innerHTML = `A resistencia respeita sua decisão, caso deseje mudar de ideia o convite continua em aberto. <br><br> Deseja mudar de ideia e irá ajudar na missão?`
    bt1.onclick = começar
    bt2.onclick = fimDeJogo
}


function entrarNave(){
    exp1.innerHTML = `<img src=img/blaster.jpg>`
    exp2.innerHTML = `O comandante responsavel pela operação, lhe presenteia com um blaster para ajudar na missão. Porém, você ainda tem receio em confiar nos rebeldes. Você aceitará o presente?`
    bt1.onclick = aceitar
    bt2.onclick = usarAntiga

}

function aceitar(){
    exp1.innerHTML = `<img src=img/luta.jpg>`
    exp2.innerHTML = `Você desce no planeta junto com a equipe, porém são surpreendidos por uma patrulha imperial. O blaster dado pelo comandante falha durante o confronto e sua única saida é se render. <br><br> Você foi preso pelo imperio e passará o resto da vida mineirando cristais kybers.`
    bt1.innerHTML = `Reiniciar`
    bt2.innerHTML = `Fim de Jogo`
    bt1.onclick = começar
    bt2.onclick = fimDeJogo
    

}

function usarAntiga() {
    exp1.innerHTML = `<img src=img/pouso.png>`
    exp2.innerHTML = `Você decide continuar com seu antigo blaster de batalha. Na descida ao planeta vocês lidam com uma emboscada, porém saem vitoriosos contra a patrula e chegam ao centro de pesquisas. <br><br> Você deve escolher se invadirá o centro de pesquisas ou se ficará de guarda caso venha algum inimigo.`
    bt1.innerHTML = `Invadir`
    bt2.innerHTML = `Ficar de Guarda`
    bt1.onclick = invadir 
    bt2.onclick = guarda
}

function invadir() {
    exp1.innerHTML = `<img src=img/lab.jpg>`
    bt1.innerHTML = `Fim de jogo`
    bt2.innerHTML = `Fim de jogo`
    exp2.innerHTML = `Você decide invadir o laboratorio e consegue roubar os planos da estrela da morte. <br> Porém, ao retornar são surpreendidos por mais patrulhas imperiais e não tem outra opção a não se se entregarem.<br><br> Fim de jogo!`
    bt1.onclick = fimDeJogo
    bt2.onclick = fimDeJogo

}

function guarda() {
    exp1.innerHTML = `<img src=img/guarda.jpg>`
   exp2.innerHTML = `Você resolve ficar de guarda enquanto o grupo rebelde invade o laboratorio. Você avista de longe que uma nova tropa imperial se aproxima e avisa ao grupo para que se apressem.<br><br> Vocês conseguem os planos da estrela da morte e agora precisam fugir do planeta, porém ao chegarem na nave são emboscados e uma nova batalha começa. Vendo que estão quase sendo derrotados sobram duas opções, correr para a nave e fugir, ou se sacrificar para que o rebelde com os planos consiga fugir e entregar os planos para a aliança.`
   bt1.innerHTML = `Sacrificar`
    bt2.innerHTML = `Fugir`
    bt1.onclick = sacrificar
    bt2.onclick = fugir
}   

function sacrificar() {
    exp1.innerHTML = `<img src=img/sacri.jpg>`
    exp2.innerHTML = `Você resolveu ficar para trás e dar corbetura para que o rebelde conseguisse fugir. Graças a isso a aliança rebelde conseguiu os planos para destruir a estrela da morte e assim a galaxia poderá sonhara novamente com dias de paz.`
    bt1.innerHTML = `Fim de jogo`
    bt2.innerHTML = `Fim de jogo`
    bt1.onclick = fimDeJogo
    bt2.onclick = fimDeJogo
}

function fugir() {
    exp1.innerHTML = `<img src=img/sacri.jpg>`
    exp2.innerHTML = `Você resolveu entrar na nave e fugir, abandonando o grupo rebelde. Graças a sua atitude covarde, o imperio recuperou os planos da estrela da morte e o sonho de uma galaxia livre da tirania fica cada vez mais distante.`
    bt1.innerHTML = `Fim de jogo`
    bt2.innerHTML = `Fim de jogo`
    bt1.onclick = fimDeJogo
    bt2.onclick = fimDeJogo
}


function outroMeio() {
    exp1.innerHTML = `<img src=img/explo.jpg>`
    exp2.innerHTML = `Você resolve viajar utilizando sua antiga nave, porém, devido a uma denuncia anonima o imperio conseguiu te rastrear e abateu sua nave antes de chegar ao planeta <br> fim de jogo! <br><br> Deseja tentar de novo?`
    bt1.onclick = começar
    bt1.innerHTML = `Fim de jogo!`
    
}


function fimDeJogo(){
    exp1.innerHTML = `Fim de Jogo!`
    exp2.innerHTML = `Obrigado por jogar!`
   
}

começar()