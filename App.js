import React, {useState} from "react";
import { View, Text , Image,StyleSheet ,TouchableOpacity} from "react-native";

function App() { 
  const[img,setImg]= useState(require('./src/biscoito.png'));
  const[textoFrase,setTextoFrase]= useState('')

  let frases=[
    'A sabedoria está em aprender com o passado para construir um futuro melhor.',
    'A vida é uma jornada, aproveite cada passo do caminho.',
    'Seja a mudança que você deseja ver no mundo.',
    'A persistência é o caminho do êxito.',
    'A beleza está nos olhos de quem vê, mas a verdadeira essência está no coração.',
    'Acredite em si mesmo e tudo será possível.',
    'O segredo da felicidade está em encontrar alegria nas pequenas coisas.',
    'A paciência é uma virtude que leva a grandes recompensas.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'A amizade é como uma flor, precisa ser cultivada para florescer.',
    'Aprenda com o ontem, viva para o hoje, sonhe com o amanhã.',
    'A verdadeira riqueza está na bondade que compartilhamos.',
    'Seja gentil, pois cada pessoa que você encontra está travando uma grande batalha.',
    'O sorriso é a chave que abre muitas portas.',
    'A gratidão transforma o que temos em suficiente.',
    'O amor é a linguagem que todos entendem.',
    'O maior obstáculo para o sucesso é o medo do fracasso.',
    'A criatividade é a inteligência se divertindo.',
    'A vida é como andar de bicicleta, para manter o equilíbrio, é preciso continuar em movimento.',
    'Cada novo dia é uma página em branco, escreva uma boa história.'
  ];
    
  

  function quebraBiscoito(){
    let numeroAleatorio=Math.floor(Math.random()*frases.length)
    setTextoFrase('" '+frases[numeroAleatorio]+' "');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return(
    <View style={styles.container}>
      <Image source={img}
      style={styles.img}
      />
      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao,{marginTop:15,borderColor:'#121212'}]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto,{color:'#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  
  );    
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  img:{
    width:230,
    height:230,
  },
  textofrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:17,
    fontWeight:'bold',
    color:'#dd7b22'
  }

})


export default App;
