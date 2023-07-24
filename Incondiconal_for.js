/* Definição da variavel */
var num;
document.write('<p>Apresentação dos valores acumulados para num=1 e menor ou igual a 10 incrementando a variavel de +=2');
document.write('<p>(Note que o limite irá ate 9, pois 9+2=11, portanto será maior do que 10)');

/* Aplicação do laço incondicional - for */
for (num=1; num <=10; num +=2) {
    document.write('<p>' + num);
}