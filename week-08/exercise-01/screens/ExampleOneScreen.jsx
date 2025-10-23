import { StyleSheet, View, Image, ScrollView } from "react-native";
import MyAppText from "../components/MyAppText";
import MyAppHeading from "../components/MyAppHeading";

export default function ExampleOneScreen() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.bcitLogo}
                source={require("../assets/bcit3295.png")}
            />
            <MyAppHeading headingStyle="h1">
                Week 8 Example 1
            </MyAppHeading>
            <MyAppText>
                This an example paragraph.{"\n"}
                Notice this line stays on the same line as the previous
            </MyAppText>
            <MyAppText>
                {
                    `This is a third example paragraph with template literals.
New lines can be created by return (but spaces will render)\nEscape sequences work as well`
                }
            </MyAppText>
            <MyAppText>
                JSX expression can also evaluate statements like: {10+5}
            </MyAppText>
            <MyAppText>
                {`In literals we have to use the $ to evaluate the expression: ${10+5}`}
            </MyAppText>

            <ScrollView>
                <MyAppHeading headingStyle="h2">
                    Some filler text
                </MyAppHeading>
                <MyAppText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum excepturi itaque eveniet cumque minus nostrum quia dignissimos dolor ullam, ipsa nobis est nulla delectus repellat maiores provident debitis quod!
                </MyAppText>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 50,
        },
        bcitLogo: {
            width: 250,
            height: 250,
            margin: 15,
        },
    }
);