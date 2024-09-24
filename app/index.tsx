import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {

  const [numb, setNumb] = useState(0);
  
  function plus() {
    setNumb(numb + 1);
  };
  function minus() {
    {numb > 0 &&
    setNumb(numb - 1);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 60}}>{numb}</Text>
      <View style={{ marginVertical: 16 }}>
        <Button 
          title="Plus" 
          onPress={()=> {plus();}}
        />
      </View>
      
      <View style={{ marginVertical: 16 }}>
        <Button 
          title="Minus" 
          onPress={()=> {minus();}}
        />
      </View>

      {numb > 0 && 
      <View style={{ marginVertical: 16 }}>
        <Button 
          title="Reset" 
          color={'red'}
          onPress={()=> {setNumb(0)}}
        />
      </View>
      }

    </SafeAreaView>
  );
}
