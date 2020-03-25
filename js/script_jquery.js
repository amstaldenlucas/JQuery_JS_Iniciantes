// $(seletor).acao();

/*$(function(){

    $('#azul').click(function(){
        $('p').css("color", "blue").css("background-color", "green");
        $('p').fadeOut(1000);
    });

    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('p').fadeIn(1000);
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red'})
            .delay(3000)
            .addClass('green');
            
            $('button').removeClass('red');
    });
});*/

$(function(){

    $('#l1').click(function(x){
        $('#img2, #img3, #img4').hide();
        $('#img1').fadeIn(1000);
        $('#msg').text(`Imagem escolhida: ${this.text}. Valor: ${x.value}`);
    });

    $('#l2').click(function(){
        $('#img1, #img3, #img4').hide();
        $('#img2').fadeIn(1000);
        $('#msg').text("Imagem escolhida: " + this.text + ". Valor: " + $('#l2').value);
    });

    $('#l3').click(function(x){
        $('#img1, #img2, #img4').hide();
        $('#img3').fadeIn(1000);
        $('#msg').text("Imagem escolhida: " + this.text + ". Valor: " + this.value);
    });

    $('#l4').click(function(x){
        $('#img1, #img2, #img3').hide();
        $('#img4').fadeIn(1000);
        $('#msg').text("Imagem escolhida: " + this.text + ". Valor: " + this.value);
    });

    $(function(){
        
    });

});