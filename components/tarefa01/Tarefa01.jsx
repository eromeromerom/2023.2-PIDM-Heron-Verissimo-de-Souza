import { ScrollView } from "react-native";
import Questao01 from "./Questao01";
import Questao03 from "./Questao03";


const Tarefa01 = () => {
    return (
        <ScrollView >

            <Questao01 />
            <Questao03 cor={'green'} />

        </ScrollView>
    );
}

export default Tarefa01