import { View, Text } from "react-native"

const Questao03 = ({cor}) => {
    return (
        <View>
            <Text style={{fontWeight: 'bold', color: cor}}>
                Disciplinas Tops (Bala dms)
            </Text>
            <Text style={{ color: cor}}>
                Concepção e Desenvolvimento de Produtos
            </Text>
            <Text style={{ color: cor}}>
                Programação para Design
            </Text>
            <Text style={{ color: cor}}>
                Direção de Arte
            </Text>
            <Text style={{ color: cor}}>
                Edição Digital de Imagens
            </Text>
            <Text style={{ color: cor}}>
                Multimidia
            </Text>
        </View>

    )

}

export default Questao03