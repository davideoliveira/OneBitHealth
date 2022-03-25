import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";




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
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    onChangeText={setAltura}        //Att a func setAltura toda vez que o texto é alterado
                    value={altura}
                    placeholder="Ex. 1.75"          //Texto que fica na caixa de input quando está vazia
                    keyboardType="numeric"          // Tipo de teclado
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => validation()}        //Quando pressionado ativa a func validation
                    title={textButton}
                 />
            </View>
            
            <View>
            <Text>Seu Imc é igual: {imc}</Text>
            </View>
            
        </View>
    );


}