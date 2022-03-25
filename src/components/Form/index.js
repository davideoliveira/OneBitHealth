import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";




export default function Form(){

const [altura, setAltura]=useState(null)
const [peso, setPeso]=useState(null)
const [imc, setImc]=useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((peso/(altura*altura)).toFixed(2))
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
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => validation()}
                    title={textButton}
                 />
            </View>
            
            <View>
            <Text>Seu Imc é igual: {imc}</Text>
            </View>
            
        </View>
    );


}