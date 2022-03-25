import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";



export default function Form(){

const [altura, setAltura]=useState(null)              //Declara variavel altura com useState para atualiza-la   const["variavel","funcAttVariavel"]=useState("valorInicial")
const [peso, setPeso]=useState(null)
const [imc, setImc]=useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){                                   //função para calcular o imc
    return setImc((peso/(altura*altura)).toFixed(2))        //realiza o calculo e atuliza a variavel imc        tofixed é o número de casas decimais
}

function validation(){                              
    if(peso != null && altura != null){
        imcCalculator()
        setPeso(null)
        setAltura(null)
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")

}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAltura}        //Att a func setAltura toda vez que o texto é alterado
                    value={altura}
                    placeholder="Ex. 1.75"          //Texto que fica na caixa de input quando está vazia
                    keyboardType="numeric"          // Tipo de teclado
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <TouchableOpacity                   //Tipo de botao
                style={styles.buttonCalculator}
                onPress={() => {validation()}}>
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                
            </View>
            
            <View>
            <Text>Seu Imc é igual: {imc}</Text>
            </View>
            
        </View>
    );


}