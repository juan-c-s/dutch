import { Container, Flex, Heading, VStack, Text, GridItem, SimpleGrid, FormControl, FormLabel, Input, Select, Checkbox, Button } from "@chakra-ui/react"
import React, { useState } from 'react'
const Details = () => {
    let textInput = React.createRef();
    let [getValue, setValue] = useState(1000);

    const connect = () => {
        /** hacer conexión*/
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            ethereum.request({ method: 'eth_requestAccounts' });
        }
    }
    const bid = () => {
        console.log(textInput.current.value)
    }
    return (
        <VStack // inner elements
            w="full"
            h="full"
            p={10}
            spacing={10}
            align-items="flex-start"

        >
            <VStack spacing={3}>
                <Heading size="2xl">Subasta</Heading>
                <Text>details</Text>
            </VStack>
            <SimpleGrid columns={2} rowGap={6} columnGap={3} w="full" alignItems="end">
                <GridItem colSpan={2}>
                    <Button onClick={connect}>connect</Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Bid</FormLabel>
                        <Input ref={textInput} placeholder="Input Bid"></Input>
                    </FormControl>

                </GridItem>
                <GridItem colSpan={1} alignItems="end">
                    <Button w="100%" onClick={bid}> Bid</Button>
                </GridItem>



            </SimpleGrid>

        </VStack>
    )
}
export default Details;
