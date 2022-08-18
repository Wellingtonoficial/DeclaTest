const textDigit = document.getElementById('text')
const phrasesF = [' Olá Thay!', 
                'Dediquei esse pequeno trabalho a você.', 
                'Não sou uma pessoa que consegue se expressar o que sente em palavras',
                'mas gostaria de tentar tirar um sorriso seu.',
                'Sei que você tem passado por momentos complexos em sua vida e tem estado meio confusa ultimamente',
                'mas gostaria de deixar claro a você, que independente de qualquer coisa, quero que você saiba que sempre que precisar, pode contar comigo sempre.',
                'Só quero dizer que você é uma pessoa incrível garota, e você não tem noção disso.',
                'Na primeira vez que lê vi naquele ônibus, logo percebi o qual legal você era por dentro, uma pessoa de coração enorme, uma pessoa que quer sempre ver o bem do outro.',
                'Então não deixe que nada e ninguém lê abale, siga o seu coração porque você tem tudo para poder brilhar nessa vida.',
                'Também só tenho de agradecer a você, tem me feito tão feliz nesses últimos dias. Meses que não havia conversado com uma pessoa especial igual a você, meses que alguém me fazia ficar horas conversando no celular, meses que alguém fazia eu ficar abrindo toda hora o whatsapp louco para ver uma mensagem da garota incrível que você é.',
                'Obrigado por tudo, gosto muito de você.']
let ind = 0
let jp = 0 
let currentPhraseF = []
let isDeletingF = false
let isEndF = false

function looppp () {
  isEndF = false
  textDigit.innerHTML = currentPhraseF.join('')

  if (ind < phrasesF.length) {

    if (!isDeletingF && jp <= phrasesF[ind].length) {
      currentPhraseF.push(phrasesF[ind][jp])
      jp++
      textDigit.innerHTML = currentPhraseF.join('')
    }

    if(isDeletingF && jp <= phrasesF[ind].length) {
      currentPhraseF.pop(phrasesF[ind][jp])
      jp--
      textDigit.innerHTML = currentPhraseF.join('')
    }

    if (jp == phrasesF[ind].length) {
      isEndF = true
      isDeletingF = true
    }

    if (isDeletingF && jp === 0) {
      currentPhraseF = []
      isDeletingF = false
      ind++
      if (ind === phrasesF.length) {
        ind = 0
      }
    }
  }
  const spedUpF = Math.random() * (80 -50) + 2
  const normalSpeedF = Math.random() * (300 -200) + 20
  const timeF = isEndF ? 5000 : isDeletingF ? spedUpF : normalSpeedF
  setTimeout(looppp, timeF)
}

looppp()