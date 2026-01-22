//TIPOS PRIMITIVOS

let nome: string = 'Daniel'
let idade: number = 34
let matriculaAtiva: boolean = true

//Interfêrencia de tipos

let segundoNome = 'Ventura de Almeida'

//Arrays

let notas: number[] = [8.5, 9, 10]

let alunos: string[] = ['a','b','c']

//FUNÇÕES

function somar(n1: number,n2: number){
    return n1+n2;
}

function validaSeEhPar(n1: number,n2: number): boolean{

    const soma = n1+n2;
    const isPar: boolean = soma % 2 === 0 ;

    
    return isPar

}