NomeDaPessoa = document.getElementById("junior");
texto = document.getElementById("resposta")

function enviar ()
{
    texto.innerHTML="Ola, " + NomeDaPessoa.value + " tudo bem "
}

let nm = document.getElementById("nm");
let kl = document.getElementById("kl");

function jr()
{
    kl.innerHTML = parseInt(nm.value) *100
}

function aperte()
{
    if (numero1.value > numero2.value)
        {
            exato.innerHTML = numero1.value
        }
        else
        {
            exato.innerHTML = numero2.value
        }
}

var c = 0;
while(c < 55 )
    {
        console.log(c)
        c = c +5;
    }

    var c = 0;
    while(c < 101 )
        {
            console.log(c)
            c = c +1;
        }

       var z = 100;
       while(c > 0 )
        {
            console.log(c)
            c =c -10;
        }