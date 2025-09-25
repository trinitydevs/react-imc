import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

export default function App() {
  const [peso, setWeight] = useState("");
  const [altura, setHeight] = useState("");
  const [resultado, setResultado] = useState(null);
  const [diag, setDiag] = useState("");

  const calcularIMC = () => {
    if (peso && altura !== "") {
      let imc = peso.replace(",", ".") / (altura.replace(",", ".") * altura.replace(",", "."));
      setResultado(imc.toFixed(2));

      if (imc < 18.5) {
        setDiag("Magreza");
      } else if (imc >= 18.5 && imc <= 24.99) {
        setDiag("Normal");
      } else if (imc >= 25 && imc <= 29.99) {
        setDiag("Sobrepeso");
      } else if (imc >= 30 && imc <= 39.99) {
        setDiag("Obesidade");
      } else {
        setDiag("Obesidade grave");
      }

    } else {
      alert("Informe o peso e a altura corretamente");
    }
  }

  return (
    <View style={styles.app}>
      <View style={styles.header}></View>

      <Text style={styles.title}>Cálculo de IMC</Text>
      <Text style={styles.subtitle}>Confira a classificação do seu IMC com base no seu peso e altura</Text>

      <Image
        source={require('./assets/gym.png')}
        style={styles.image}
      />

      <View style={styles.form}>
        <TextInput
          placeholder='Informe a altura (m)'
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setHeight}
        />
        <TextInput
          placeholder='Informe o peso (kg)'
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setWeight}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.results}>
        {resultado ? (
          <>
            <Text style={styles.textResult}>Resultado: <Text style={styles.valueResult}>{resultado}</Text></Text>
            <Text style={styles.textResult}>Classificação: <Text style={styles.valueResult}>{diag}</Text></Text>
          </>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'start',
    backgroundColor: '#f9fafb',
  },

  header: {
    width: '100%',
    height: 20,
    resizeMode: 'contain',
    backgroundColor: '#474747ff',
    marginBottom: 70,
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 30,
    fontFamily: 'Arial',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 30,
    fontFamily: 'Arial',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },

  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },

  input: {
    outlineStyle: 'none',
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: '#d1d5db',
    borderRadius: 7,
    textAlign: 'center',
    height: 50,
    width: '80%',
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 2,
    fontFamily: 'Arial',
  },

  button: {
    backgroundColor: '#292727ff',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginVertical: 10,
    elevation: 3,
    fontFamily: 'Arial',
    textTransform: 'uppercase',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  results: {
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 6,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#FFF',
    fontFamily: 'Arial',

  },

  textResult: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 8,
  },

  valueResult: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'Arial',
    color: 'rgba(235, 63, 143, 1)',
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 16,
  },
});
