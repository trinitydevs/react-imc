import {useState} from 'react';
import {  Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [diag, setDiag] = useState("");

  const calcularIMC = () =>{
    console.log('Teste');

    if(peso && altura !== ""){
    let imc = peso.replace(",",".") / (altura.replace(",",".") * altura.replace(",","."));
    setResultado(imc.toFixed(2));

    if(imc < 18.5){
      setDiag("Magreza");
    }else if(imc >= 18.5 && imc <= 24.99){
      setDiag("Normal");
    }else if(imc >= 25 && imc <= 29.99){
      setDiag("Sobrepeso");
    }else if(imc >= 30 && imc <= 39.99){
      setDiag("Obesidade");
    }else{
      setDiag("Obesidade grave");
    }

    }else{
      alert("Informe o peso e a altura corretamente");
    }
  }

  return (
    <View style={stilos.app}>
      <Text style={stilos.titulo}>Calcule o seu IMC</Text>

      <View>
        <TextInput placeholder='Informe a altura' style={stilos.input} keyboardType="numeric" value={altura} onChangeText={setAltura}/>
        <TextInput placeholder='Informe o peso' style={stilos.input} keyboardType="numeric" value={peso} onChangeText={setPeso}/>
      </View>
      <Button title="Calcular" style={stilos.button} onPress={calcularIMC}></Button>

      <View style={stilos.resultados}>
        <Text>Resultado: {resultado}</Text>
        <Text>Classificação: {diag}</Text>
      </View>
    </View>
  );
}

const stilos = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  titulo:{
    fontSize: 40,
    marginBottom: 10,
  },

  input:{
    margin: 35,
    borderWidth: 2,
    borderRadius: 12,
    textAlign: 'center',
    height: 40,
    width: 200,
  },

  button:{
    borderWidth: 2,
    borderRadius: 4
  },

  resultados:{
    fontSize: 20
  }
});
